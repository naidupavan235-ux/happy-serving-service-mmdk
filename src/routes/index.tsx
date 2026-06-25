import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const services = [
  {
    icon: '💼',
    title: 'Wedding Staff',
    description: 'Professional serving boys for wedding events.',
  },
  {
    icon: '🎉',
    title: 'Party Service',
    description: 'Serving staff for birthday and family functions.',
  },
  {
    icon: '🏢',
    title: 'Corporate Events',
    description: 'Reliable staff for meetings and corporate events.',
  },
  {
    icon: '🍽️',
    title: 'Food Serving',
    description: 'Well-trained serving boys for guest service.',
  },
]

function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#ff6b00] to-[#ff9800] text-white text-center py-14 px-5">
        <div className="w-28 h-28 rounded-full bg-white text-[#ff6b00] mx-auto flex items-center justify-center text-5xl font-bold shadow-lg">
          HS
        </div>
        <h1 className="mt-5 text-4xl font-bold tracking-tight">Happy Serving Services</h1>
        <p className="mt-3 text-lg opacity-90">Professional Serving Staff For Every Occasion</p>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-5">
        <h2 className="text-[#333] text-4xl font-bold">Experienced Serving Boys Available</h2>
        <p className="mt-4 text-[#666] text-lg max-w-2xl mx-auto">
          We provide trained serving boys and event staff for weddings,
          receptions, birthday parties, housewarming ceremonies,
          corporate events and special functions.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="tel:9581437218"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#28a745] text-white text-xl font-bold transition-transform hover:scale-105 no-underline"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/919581437218?text=Hello%20Happy%20Serving%20Services,%20I%20need%20serving%20boys%20for%20my%20event."
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#25D366] text-white text-xl font-bold transition-transform hover:scale-105 no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-14 px-5 text-center">
        <h2 className="text-[#ff6b00] text-3xl font-bold mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-[#fff3e0] p-6 rounded-xl w-64 shadow-md text-left"
            >
              <h3 className="text-xl font-bold mb-2">
                {svc.icon} {svc.title}
              </h3>
              <p className="text-[#555]">{svc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#ff6b00] text-white text-center py-12 px-5">
        <h2 className="text-3xl font-bold">Book Our Staff Today</h2>
        <h3 className="mt-3 text-2xl font-semibold">📞 9581437218</h3>
        <p className="mt-2 text-lg opacity-90">Available for Events Across Andhra Pradesh</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-[#333] text-white text-sm">
        © 2026 Happy Serving Services | All Rights Reserved
      </footer>
    </div>
  )
}
