import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Xsentry Labs Services - Software Engineering, App & Web Development'
  }, [])

  return (
    <>
      <Hero
        title="xsentry labs"
        tagline="World-class software, at your fingertips."
        imageSrc="/images/test.png"
        imageAlt="London skyline pen and ink illustration"
        navLinks={[
          { href: '#services', label: 'Services' },
          { href: '#about', label: 'About' },
          { href: '#insights', label: 'Insights' },
          { href: '#contact', label: 'Contact' },
        ]}
      />

      {/* About */}
      <section className="about" id="about">
        <div className="about__inner">
          <div className="about__visual">
            <img src="/images/table.png" alt="Architect's drafting table illustration" />
          </div>
          <div className="about__content">
            <h2>About Us</h2>
            <p>We are a team of experienced developers and AI specialists who believe in building software the right way - with intelligence at its core.</p>
            <p>Our mission is to help businesses leverage cutting-edge AI technology to create applications that are faster, smarter, and more efficient.</p>
            <p>From custom app development to enterprise software solutions, we bring your vision to life with precision and expertise.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="services__inner">
          <div className="services__header">
            <h2>Our Services</h2>
            <p>Comprehensive development services powered by AI and human expertise.</p>
          </div>
          <div className="services__grid">
            <div className="services__card">
              <div className="services__card-icon services__card-icon--img">
                <img src="/images/mobile.jpg" alt="Mobile phone illustration" />
              </div>
              <h3>Custom App Development</h3>
              <p>Native and cross-platform mobile applications built with the latest technologies and AI-powered features.</p>
            </div>
            <div className="services__card">
              <div className="services__card-icon services__card-icon--img">
                <img src="/images/soft-dev.jpg" alt="Retro computer illustration" />
              </div>
              <h3>Software Development</h3>
              <p>Enterprise-grade software solutions tailored to your business needs, architected for resilience and scale.</p>
            </div>
            <div className="services__card">
              <div className="services__card-icon services__card-icon--img">
                <img src="/images/web-dev.jpg" alt="Web development illustration" />
              </div>
              <h3>Web Development</h3>
              <p>Modern, responsive websites and web applications that perform - every pixel considered, every millisecond earned.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="lead" id="contact">
        <div className="lead__inner">
          <div className="lead__content">
            <h2>Ready to Build Something Amazing?</h2>
            <p>Get a free consultation and discover how AI-native development can transform your business. No commitment required.</p>
            <a href="mailto:hello@xsentrylabs.com" className="lead__cta">
              book free consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
          <div className="lead__visual">
            <img src="/images/build.jpg" alt="Workspace desk illustration" />
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="insights" id="insights">
        <div className="insights__inner">
          <div className="insights__header">
            <h2>Latest Insights</h2>
            <p>Stay updated with our latest thoughts on technology and development</p>
          </div>
          <div className="insights__grid">
            <article className="insights__card">
              <div className="insights__card-date">Feb 10, 2026</div>
              <h3>How AI is Transforming Software Development</h3>
              <p>Discover the latest trends in AI-powered development and how they can benefit your business.</p>
              <a href="#">Read more →</a>
            </article>
            <article className="insights__card">
              <div className="insights__card-date">Feb 5, 2026</div>
              <h3>Building Scalable Applications: Best Practices</h3>
              <p>Learn the key principles behind creating applications that grow with your business needs.</p>
              <a href="#">Read more →</a>
            </article>
            <article className="insights__card">
              <div className="insights__card-date">Jan 28, 2026</div>
              <h3>The Future of Web Development</h3>
              <p>Exploring emerging technologies and frameworks shaping the future of the web.</p>
              <a href="#">Read more →</a>
            </article>
          </div>
        </div>
      </section>

      <Footer
        description="Building the future with AI-powered development solutions."
        columns={[
          {
            title: 'Services',
            links: [
              { label: 'App Development', href: '#' },
              { label: 'Web Development', href: '#' },
              { label: 'Software Development', href: '#' },
              { label: 'AI Solutions', href: '#' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '#about' },
              { label: 'Insights', href: '#insights' },
              { label: 'Labs', to: '/' },
              { label: 'Contact', href: 'mailto:hello@xsentrylabs.com' },
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
