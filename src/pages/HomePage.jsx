import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Xsentry Labs - Engineering the Future, One Venture at a Time'
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const el = document.querySelector('.contact__visual img')
      if (!el) return
      const rect = el.getBoundingClientRect()
      const ratio = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      el.style.transform = `translateY(${-ratio * 20}px) scale(${1 + ratio * 0.03})`
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Hero
        title="xsentry labs"
        tagline="Engineering the future, one venture at a time."
        imageSrc="/images/hero-company.jpg"
        imageAlt="Innovation Campus Illustration"
        navLinks={[
          { href: '#ventures', label: 'Ventures' },
          { href: '#contact', label: 'Contact' },
        ]}
      />

      {/* Ventures */}
      <section className="ventures" id="ventures">
        <div className="ventures__inner">
          <div className="ventures__header">
            <h2>Our ventures</h2>
            <p>Companies and products under the xsentry labs umbrella</p>
          </div>
          <div className="ventures__grid">
            <Link to="/services" className="ventures__card">
              <div className="ventures__card-img">
                <img src="/images/venture-services.jpg" alt="Laptop with code surrounded by floating geometric shapes and connected nodes" />
              </div>
              <div className="ventures__card-body">
                <h3>services</h3>
                <p>Software engineering, app development, and web development - built with precision and modern craft.</p>
                <span className="ventures__card-arrow">
                  Explore
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </div>
            </Link>

            <div className="ventures__card">
              <div className="ventures__card-img">
                <img src="/images/venture-datawolf.jpg" alt="Wolf silhouette composed of data streams and neural network nodes" />
              </div>
              <div className="ventures__card-body">
                <h3>datawolf.ai</h3>
                <p>Coming soon, summer 2026.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="contact__inner">
          <div className="contact__content">
            <h2>Get in touch</h2>
            <p>Whether you're looking to partner, collaborate, or simply learn more about what we're building - we'd love to hear from you.</p>
            <a href="mailto:hello@xsentrylabs.com" className="contact__cta">
              say hello
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
          <div className="contact__visual">
            <img src="/images/company-contact.jpg" alt="Open mailbox with letters and paper airplanes" style={{ maxWidth: '400px' }} />
          </div>
        </div>
      </section>

      <Footer
        description="Engineering the future, one venture at a time. A holding company building for tomorrow."
        columns={[
          {
            title: 'Ventures',
            links: [
              { label: 'services', to: '/services' },
              { label: 'datawolf.ai', href: '#' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'Contact', href: '#contact' },
            ],
          },
          {
            title: 'Legal',
            links: [
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
            ],
          },
        ]}
      />
    </>
  )
}
