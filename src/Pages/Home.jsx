import Nav from '../Components/Nav'

export default function Home() {

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="https://res.cloudinary.com/dopqrpvhl/image/upload/P9_akrtfe"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <Nav
        dark={false}
        logoSrc="https://res.cloudinary.com/dopqrpvhl/image/upload/v1779612456/WhatsApp_Image_2026-05-22_at_22.30.01_nqajeq.jpg"
      />

      {/* "JAYSHOTZ PORTFOLIO" — full-height vertical label, sitting RIGHT of the logo */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          left: '104px',  /* just to the right of the logo (~h-16 logo width + px-6 offset) */
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <h1
          style={{
            fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
            fontWeight: 900,
            /* 18 chars; fontSize * 18 = 100vh → each char fills exactly 1/18th of screen */
            fontSize: 'calc(100vh / 18)',
            color: 'white',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            letterSpacing: '0',
            writingMode: 'vertical-lr',
            textOrientation: 'mixed',
            textShadow: '0 2px 12px rgba(0,0,0,0.55)',
            opacity: 0.9,
            lineHeight: 1,
            margin: 0,
          }}
        >
          jayshotz portfolio
        </h1>
      </div>
    </div>
  )
}
