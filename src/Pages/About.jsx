import Nav from '../components/Nav'
import bg from '../assets/P9.jpg'
import portrait from '../assets/P32.jpg'
import p10 from '../assets/P10.jpg'


export default function About() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-body">

      {/* Background */}
      <img
        src={bg}
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover -z-10"
      />
      <div className="fixed inset-0 -z-10 bg-black/50" />

      <Nav dark={false} />

      {/* Layout */}
      <div className="flex min-h-screen pt-24">

      {/* Left: portraits, scroll with content */}
<div className="w-3/5 flex-shrink-0 flex flex-col p-6 pt-0">
  <img
    src={portrait}
    alt="Jayshotz"
    className="w-full flex-1 object-cover object-top"
    style={{ minHeight: '60vh' }}
  />
  <img
    src={p10}
    alt="Jayshotz"
    className="w-full flex-1 object-cover object-center mt-3"
    style={{ minHeight: '60vh' }}
  />
</div>

        {/* Right: biography content */}
        <div className="w-2/5 bg-black/70 px-10 py-12 overflow-y-auto text-white">

          {/* Header */}
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2 font-medium">
            Biography
          </p>
          <h1 className="text-4xl font-display font-semibold text-white tracking-tight mb-1">
            Jayshotz
          </h1>
          <p className="text-sm tracking-[0.2em] uppercase text-white/50 mb-10">
            Director &nbsp;//&nbsp; Director of Photography &nbsp;//&nbsp; Creative
          </p>

          {/* Intro */}
          <p className="text-sm text-white/75 leading-relaxed mb-10">
            Jayshotz is a dynamic and visionary Director and Director of Photography (DOP) emerging as a powerful creative force within the entertainment and commercial production industry. Known for his cinematic precision and bold visual storytelling, Jayshotz has built a reputation not only as a filmmaker but as a brand architect shaping modern visual culture.
          </p>
          <p className="text-sm text-white/75 leading-relaxed mb-10">
            With a foundation rooted in cinematography, Jayshotz approaches every project with a deep understanding of how lighting, composition, and camera movement influence emotion and narrative. His work reflects a commitment to crafting imagery that elevates both story and brand identity.
          </p>

          {/* Creative Identity */}
          <section className="mb-10">
            <h2 className="text-xs tracking-[0.25em] uppercase text-white/40 mb-4 font-semibold">
              Creative Identity &amp; Style
            </h2>
            <p className="text-sm text-white/75 leading-relaxed mb-5">
              Jayshotz's directing style blends commercial sharpness with cinematic depth, allowing him to move seamlessly between branded content, music visuals, and narrative-driven productions. His visual language is defined by:
            </p>
            <ul className="space-y-2 text-sm text-white/70 pl-4">
              {[
                'Strong, intentional lighting design',
                'Clean, high-end commercial framing',
                'Emotion-driven storytelling',
                'A modern, globally relevant aesthetic',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-white/75 leading-relaxed mt-5">
              His ability to translate ideas into visually compelling content positions him among a new generation of filmmakers redefining what it means to be a multi-disciplinary creative director.
            </p>
          </section>

          {/* Jayshotz as a Brand */}
          <section className="mb-10">
            <h2 className="text-xs tracking-[0.25em] uppercase text-white/40 mb-4 font-semibold">
              Jayshotz as a Brand
            </h2>
            <p className="text-sm text-white/75 leading-relaxed mb-4">
              More than just a filmmaker, Jayshotz has evolved into a recognizable creative brand associated with quality, innovation, and premium visual execution.
            </p>
            <p className="text-sm text-white/75 leading-relaxed">
              Operating at the intersection of film, marketing, and digital culture, Jayshotz collaborates with brands to create content that does not just advertise but connects. His work merges cinematic techniques with strategic messaging, positioning him not only as a service provider but as a creative partner for brands looking to elevate their visual identity.
            </p>
          </section>

          {/* Brand Collaborations */}
          <section className="mb-10">
            <h2 className="text-xs tracking-[0.25em] uppercase text-white/40 mb-4 font-semibold">
              Brand Collaborations &amp; Industry Presence
            </h2>
            <p className="text-sm text-white/75 leading-relaxed mb-5">
              Jayshotz has worked with and alongside established and emerging brands, contributing to campaigns, branded content, and visual rollouts that demand both creative direction and technical excellence. His collaborations reflect a growing footprint in:
            </p>
            <ul className="space-y-2 text-sm text-white/70 pl-4">
              {[
                'Commercial advertising',
                'Fashion and lifestyle branding',
                'Music and entertainment visuals',
                'Social-first and digital campaigns',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Industry Positioning */}
          <section className="mb-10">
            <h2 className="text-xs tracking-[0.25em] uppercase text-white/40 mb-4 font-semibold">
              Industry Positioning
            </h2>
            <p className="text-sm text-white/75 leading-relaxed">
              In an industry where the role of the Director of Photography continues to evolve beyond technical execution, Jayshotz represents a new archetype: a hybrid creative who combines directing, cinematography, and brand strategy into one cohesive vision. His trajectory mirrors that of globally recognized cinematographers and directors who have expanded their influence across film, television, and commercial work.
            </p>
          </section>

          {/* Vision */}
          <section className="mb-10">
            <h2 className="text-xs tracking-[0.25em] uppercase text-white/40 mb-4 font-semibold">
              Vision
            </h2>
            <p className="text-sm text-white/75 leading-relaxed">
              Jayshotz's long-term vision is to build a globally recognized creative brand that bridges African storytelling with international standards, while continuing to collaborate with major brands, artists, and platforms. Through innovation, consistency, and a strong creative identity, Jayshotz is not just creating visuals but building a legacy in the visual storytelling space.
            </p>
          </section>

          {/* Work With */}
          <section>
            <h2 className="text-xs tracking-[0.25em] uppercase text-white/40 mb-4 font-semibold">
              Work With Jayshotz
            </h2>
            <p className="text-sm text-white/60 mb-4">Available for:</p>
            <ul className="space-y-2 text-sm text-white/70 pl-4 mb-8">
              {[
                'Commercial campaigns',
                'Brand collaborations',
                'Music videos',
                'Creative direction projects',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); window.location.hash = '/contact' }}
              className="inline-block border border-white/40 text-white text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
            >
              Get in Touch
            </a>
          </section>

        </div>
      </div>
    </div>
  )
}
