import { useState } from 'react'
import Nav from '../Components/Nav'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSend = () => {
    const to = 'nkosin08@gmail.com'
    const subject = encodeURIComponent(form.subject || 'Enquiry')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-body">

      {/* Blurred background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/assets/P13.jpg" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-md bg-white/30" />
      </div>

      <Nav dark={true} />

      <div className="flex items-center justify-center min-h-screen px-6 pt-24 pb-12">
        <div className="w-full max-w-lg bg-white/85 p-10">

          <h1 className="text-3xl font-display font-semibold text-black tracking-tight mb-1">
            Get in Touch
          </h1>

          {/* Contact details */}
          <div className="mb-8 space-y-1 text-sm text-black/60">
            <p>
              <a href="mailto:nkosin08@gmail.com" className="underline underline-offset-2 hover:text-black transition-colors">
                nkosin08@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:0671653915" className="underline underline-offset-2 hover:text-black transition-colors">
                0671653915
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/_jayshotz_/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-black transition-colors"
              >
                @_jayshotz_
              </a>
            </p>
          </div>

          <div className="space-y-5">

            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-black/50 mb-1.5 font-medium">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className="w-full border border-black/20 bg-transparent px-4 py-3 text-sm text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-black/50 mb-1.5 font-medium">
                Email
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="your@email.com"
                className="w-full border border-black/20 bg-transparent px-4 py-3 text-sm text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-black/50 mb-1.5 font-medium">
                Subject
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                type="text"
                placeholder="What is this about?"
                className="w-full border border-black/20 bg-transparent px-4 py-3 text-sm text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-black/50 mb-1.5 font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message here..."
                className="w-full border border-black/20 bg-transparent px-4 py-3 text-sm text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            <button
              onClick={handleSend}
              className="w-full bg-black text-white text-sm tracking-[0.2em] uppercase py-4 hover:bg-black/80 transition-colors mt-2"
            >
              Send Message
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}
