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

      {/* Diagonal "Jayshotz Portfolio" — J at bottom-left, O at top-right */}
      <div
        className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <path
              id="diagonal-path"
              d="M 2,97 L 98,3"
            />
          </defs>
          <text
            style={{
              fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
              fontWeight: 700,
              fill: 'white',
              fontSize: '6.5',
              letterSpacing: '0.6',
              textTransform: 'uppercase',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
              opacity: 0.92,
            }}
          >
            <textPath
              href="#diagonal-path"
              startOffset="0%"
              dominantBaseline="middle"
              style={{ filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.6))' }}
            >
              Jayshotz Portfolio
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  )
}
