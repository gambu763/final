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

      {/* "JAYSHOTZ PORTFOLIO" — full-height vertical label, starts at the logo's left edge */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          left: '24px',   /* matches nav's px-6 — aligns with the logo's J */
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
            /* 18 chars in "jayshotz portfolio"; ~5.2vh per char fills the screen */
            fontSize: 'calc(100vh / 20)',
            color: 'white',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            letterSpacing: '0.12em',
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
