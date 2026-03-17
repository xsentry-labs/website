export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__grain" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <div className="hero__top">
          <span className="hero__brand">xsentry labs</span>
        </div>
        <div className="hero__tagline">
          <p className="hero__line hero__line--1">
            <span>There's a factory somewhere.</span>
          </p>
          <p className="hero__line hero__line--2">
            <span>It builds systems the modern way.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
