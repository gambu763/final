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

      {/* Portfolio header — sits below the nav bar */}
      <div
        className="absolute left-0 w-full flex justify-center items-center z-10 pointer-events-none px-4"
        style={{ top: '96px' }}
      >
        <h1
          className="text-white font-semibold uppercase text-center text-base sm:text-lg md:text-2xl"
          style={{
            textShadow: '0 1px 8px rgba(0,0,0,0.6)',
            letterSpacing: '0.18em',
            fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
          }}
        >
          Jayshotz Portfolio
        </h1>
      </div>
    </div>
  )
}
