import { useEffect, useRef } from 'react'
import Nav from '../Components/Nav'
import bg from '../assets/P9.jpg'
import p2 from '../assets/P2.jpg'
import p4 from '../assets/P4.jpg'
import p15 from '../assets/P15.jpg'
import p16 from '../assets/P16.jpg'
import p17 from '../assets/P17.jpg'
import p18 from '../assets/P18.jpg'
import p19 from '../assets/P19.jpg'
import p20 from '../assets/P20.jpg'
import p21 from '../assets/P21.jpg'
import p30 from '../assets/P30.jpg'
import p31 from '../assets/P31.PNG'

import reel from '../assets/REEL.MOV'


const projects = [
  {
    id: 1,
    title: 'Uncle Waffels: Zenzele',
    thumbnail: p2,
    subtitle: 'Music video',
    link: 'https://www.youtube.com/watch?v=MHcp9rRPIWQ&list=RDMHcp9rRPIWQ&start_radio=1',
  },
  {
    id: 2,
    title: 'Bophelo bo ke Telenovela',
    subtitle: 'New music video with @poisoncuretv',
    thumbnail: p4,
    subtitle: 'Music video',
    link: 'https://www.youtube.com/watch?v=Y7tKDTKDJvU&list=RDY7tKDTKDJvU&start_radio=1',
  },
  {
    id: 3,
    title: 'DBN Gogo Fly Radio Mix ',
    thumbnail: p15,
    subtitle: 'live shot',
    link: 'https://www.youtube.com/watch?v=AJktO3zsSDg&list=RDAJktO3zsSDg&start_radio=1',
  },
  {
    id: 4,
    title: 'DJ Tshegu - Basela',
    thumbnail: p16,
    subtitle: 'Music video',
    link: 'https://www.youtube.com/watch?v=kXKh74ikHrU&list=RDkXKh74ikHrU&start_radio=1',
  },
  {
    id: 5,
    title: 'DJ Tshengu - Chengu Shesha',
    thumbnail: p17,
    subtitle: 'Music video',
    link: 'https://www.youtube.com/watch?v=4a-zkNFOOsg&list=RD4a-zkNFOOsg&start_radio=1',
  },
  {
    id: 6,
    title: 'Kamo Mphela - Dali',
    thumbnail: p18,
    subtitle: 'Music video',
    link: 'https://www.youtube.com/watch?v=hcqcy6cdCw8&list=RDhcqcy6cdCw8&start_radio=1',
  },
  {
    id: 7,
    title: 'Leemack - Umfula',
    thumbnail: p19,
    subtitle: 'Music video',
    link: 'https://www.youtube.com/watch?v=-Qk8xU0Ru1U&list=RD-Qk8xU0Ru1U&start_radio=1',
  },
  {
    id: 8,
    title: 'Tito Twhala - Bami',
    thumbnail: p20,
    subtitle: 'Music video',
    link: 'https://www.youtube.com/watch?v=KK4dC7rASYs&list=RDKK4dC7rASYs&start_radio=1',
  },
  {
    id: 9,
    title: 'Waffles Fly Radio Mix',
    thumbnail: p21,
    subtitle: 'live shot',
    link: 'https://www.youtube.com/watch?v=K070t0y1-fM&list=RDK070t0y1-fM&start_radio=1',
  },
   {
    id: 10,
    title: 'Tumi moliko SONY COLLAB',
    thumbnail: p30,
    subtitle: 'instagram reel',
    link: 'https://www.instagram.com/reel/CTFCJXLKE2N/',
  },
   {
    id: 11,
    title: 'DJ Tshegu, Focalistic, Ch cco, Nkosazana Daughter - Basela ft. Ceehle Sims Noreng',
    thumbnail: p31,
    subtitle: 'music video',
    link: 'https://www.youtube.com/watch?v=kXKh74ikHrU&list=RDkXKh74ikHrU&start_radio=1',
  },
 
]

function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

function ProjectCard({ project }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="scroll-reveal group cursor-pointer"
      onClick={() => window.open(project.link, '_blank')}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Play overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-white ml-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-2">
        <h3 className="text-base font-semibold text-white tracking-tight">{project.title}</h3>
        {project.subtitle && (
          <p className="text-sm text-white/50 mt-0.5">{project.subtitle}</p>
        )}
        
      </div>
    </div>
  )
}

export default function Projects() {
  const headerRef = useScrollReveal()
  const videoRef = useScrollReveal()

  return (
    <div className="relative w-full min-h-screen font-body">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src={bg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Nav dark={false} />

      <div className="max-w-5xl mx-auto px-8 pt-32 pb-24">

        {/* Page header */}
        <div ref={headerRef} className="scroll-reveal mb-16">
          <h1 className="text-5xl font-display font-semibold text-white tracking-tight mb-3">
            Projects
          </h1>
          <div className="w-12 h-px bg-white/40" />
        </div>

        {/* Reel video */}
        <div ref={videoRef} className="scroll-reveal mb-20">
          <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-4 font-medium">
            Reel
          </p>
          <video
            controls
            className="w-full aspect-video object-cover bg-black"
            preload="metadata"
          >
            <source src={reel} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-sm text-white/50 mt-3 tracking-wide">JAYSHOTZ REEL</p>
        </div>

        {/* Projects grid */}
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-8 font-medium">
            Selected Work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>

      {/* Scroll reveal styles */}
      <style>{`
        .scroll-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
