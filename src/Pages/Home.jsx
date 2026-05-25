import { useEffect, useRef, useState } from 'react'
import Nav from '../Components/Nav'

export default function Home() {
  const textRef = useRef(null)
  const [transform, setTransform] = useState({ scale: 1, angle: -29 })

  useEffect(() => {
    const compute = () => {
      if (!textRef.current) return
      const w = window.innerWidth
      const h = window.innerHeight
      // true corner-to-corner diagonal
      const diagonal = Math.sqrt(w * w + h * h)
      // angle from horizontal: negative so text rises left→right
      const angle = -(Math.atan2(h, w) * 180 / Math.PI)
      // scale text width to match the diagonal exactly
      const textWidth = textRef.current.offsetWidth
      const scale = diagonal / textWidth
      setTransform({ scale, angle })
    }

    // slight delay so font is loaded before measuring
    const t = setTimeout(compute, 80)
    window.addEventListener('resize', compute)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', compute)
    }
  }, [])

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

      {/* "JAYSHOTZ PORTFOLIO" — J anchored bottom-left, last O at top-right */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
        <h1
          ref={textRef}
          style={{
            fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
            fontWeight: 900,
            fontSize: '120px',
            color: 'white',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            letterSpacing: '0.04em',
            transformOrigin: 'center center',
            transform: `rotate(${transform.angle}deg) scale(${transform.scale})`,
            textShadow: '0 4px 32px rgba(0,0,0,0.55)',
            opacity: 0.93,
            lineHeight: 1,
          }}
        >
          Jayshotz Portfolio
        </h1>
      </div>
    </div>
  )
}
