const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "pierre@shorttermrentalsupport.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

function extractEmail(text) {
  const match = String(text || "").match(
    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
  );
  return match?.[0] || "";
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "Server is not configured to send email (missing RESEND_API_KEY)."
    });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: "Invalid JSON" });
    }
  }

  const name = String(body?.name || "").trim();
  const propertyAddress = String(body?.propertyAddress || "").trim();
  const bestContactMethod = String(body?.bestContactMethod || "").trim();
  const message = String(body?.message || "").trim();
  const company = String(body?.company || "").trim();

  if (company) {
    return res.status(200).json({ ok: true });
  }

  if (!name || name.length < 2) {
    return res.status(400).json({ error: "Name is required." });
  }

  if (!propertyAddress) {
    return res.status(400).json({ error: "Property address is required." });
  }

  if (!bestContactMethod) {
    return res.status(400).json({ error: "Best contact method is required." });
  }

  if (!message || message.length < 10) {
    return res
      .status(400)
      .json({ error: "Message must be at least 10 characters." });
  }

  const replyTo = extractEmail(bestContactMethod);
  if (replyTo && !isValidEmail(replyTo)) {
    return res.status(400).json({ error: "Invalid email in contact method." });
  }

  const subject = `New website request: ${name}`;

  const html = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height: 1.5;">
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Property Address:</strong> ${escapeHtml(propertyAddress)}</p>
      <p><strong>Best Contact Method:</strong> ${escapeHtml(bestContactMethod)}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space: pre-wrap; background: #f6f6f6; padding: 12px; border-radius: 8px;">${escapeHtml(
        message
      )}</pre>
    </div>
  `;

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject,
        html,
        reply_to: replyTo || undefined
      })
    });

    const resendData = await resendRes.json().catch(() => ({}));

    if (!resendRes.ok) {
      return res.status(502).json({
        error: "Email service error.",
        details: resendData
      });
    }

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: "Failed to send email." });
  }
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
