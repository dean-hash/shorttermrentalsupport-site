export default function Logo({ serviceAreas }) {
  return (
    <div className="inline-flex flex-col items-start uppercase text-cream font-extrabold leading-tight w-max">
      <div className="mb-1 text-cream" aria-hidden="true">
        <svg
          className="h-16 w-16 sm:h-20 sm:w-20"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          {/* House roof */}
          <path d="M8 30 L32 10 L56 30 L52 30 L52 46 L44 46 L44 34 L36 34 L36 46 L28 46 L28 34 L20 34 L20 46 L12 46 L12 30 Z" />
          {/* Chimney */}
          <rect x="42" y="14" width="6" height="8" />
          {/* Window */}
          <rect x="28" y="26" width="4" height="4" />
          <rect x="32" y="26" width="4" height="4" />
          <rect x="28" y="30" width="4" height="4" />
          <rect x="32" y="30" width="4" height="4" />
          {/* Waves */}
          <path d="M12 50 q6 4 12 0 t12 0 t12 0" stroke="currentColor" strokeWidth="4" fill="none" />
          <path d="M12 56 q6 4 12 0 t12 0 t12 0" stroke="currentColor" strokeWidth="4" fill="none" />
        </svg>
      </div>

      <div className="text-lg sm:text-xl tracking-[0.06em] leading-[1.08] text-left">
        SHORT TERM
        <br />
        RENTAL
        <br />
        SUPPORT
      </div>
      <div className="mt-2 text-[10px] sm:text-xs tracking-[0.18em] text-cream/80 text-left max-w-[18rem]">
        {serviceAreas}
      </div>
    </div>
  )
}
