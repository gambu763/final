import Nav from '../Components/Nav'

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="https://res.cloudinary.com/dopqrpvhl/image/upload/P9_akrtfe"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Centered portfolio header */}
      <div className="absolute top-0 left-0 w-full flex justify-center items-center z-10 pointer-events-none"
           style={{ height: '72px' }}>
        <h1
          className="text-white text-xl font-semibold tracking-widest uppercase"
          style={{
            textShadow: '0 1px 8px rgba(0,0,0,0.55)',
            letterSpacing: '0.18em',
            fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
          }}
        >
          Jayshotz Portfolio
        </h1>
      </div>

      {/* Nav — pass logoSrc so it renders the image instead of text */}
      <Nav
        dark={false}
        logoSrc="https://res.cloudinary.com/dopqrpvhl/image/upload/v1779612456/WhatsApp_Image_2026-05-22_at_22.30.01_nqajeq.jpg"
      />
    </div>
  )
}
