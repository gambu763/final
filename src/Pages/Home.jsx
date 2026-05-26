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

      {/* "JAYSHOTZ PORTFOLIO" — vertical, starts next to the logo */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{ left: '90px', top: '28px' }}
      >
        <h1
          style={{
            fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
            fontWeight: 900,
            fontSize: '120px',
            color: 'white',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            letterSpacing: '0.04em',
            writingMode: 'vertical-lr',
            textOrientation: 'mixed',
            textShadow: '0 4px 32px rgba(0,0,0,0.55)',
            opacity: 0.93,
            lineHeight: 1,
          }}
        >
          jayshotz portfolio
        </h1>
      </div>
    </div>
  )
}
