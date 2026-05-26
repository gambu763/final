import Nav from '../Components/Nav'

export default function Home() {

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Responsive style: vertical on mobile, horizontal on desktop */}
      <style>{`
        .portfolio-title {
          font-family: 'Montserrat', 'Helvetica Neue', sans-serif;
          font-weight: 900;
          color: white;
          text-transform: uppercase;
          white-space: nowrap;
          text-shadow: 0 2px 12px rgba(0,0,0,0.55);
          opacity: 0.9;
          line-height: 1;
          margin: 0;
        }

        /* Mobile — vertical, full height, right of logo */
        .portfolio-title-wrap {
          position: absolute;
          left: 104px;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: flex-start;
          z-index: 10;
          pointer-events: none;
        }
        .portfolio-title {
          writing-mode: vertical-lr;
          text-orientation: mixed;
          font-size: calc(100vh / 18);
          letter-spacing: 0;
        }

        /* Desktop — horizontal, bottom-left of hero */
        @media (min-width: 768px) {
          .portfolio-title-wrap {
            left: 40px;
            bottom: 48px;
            top: auto;
            height: auto;
            align-items: flex-end;
          }
          .portfolio-title {
            writing-mode: horizontal-tb;
            text-orientation: mixed;
            font-size: clamp(2rem, 5vw, 4.5rem);
            letter-spacing: 0.2em;
          }
        }
      `}</style>

      <img
        src="https://res.cloudinary.com/dopqrpvhl/image/upload/P9_akrtfe"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <Nav
        dark={false}
        logoSrc="https://res.cloudinary.com/dopqrpvhl/image/upload/v1779612456/WhatsApp_Image_2026-05-22_at_22.30.01_nqajeq.jpg"
      />

      <div className="portfolio-title-wrap">
        <h1 className="portfolio-title">
          jayshotz portfolio
        </h1>
      </div>
    </div>
  )
}
