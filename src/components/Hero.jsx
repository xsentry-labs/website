export default function Hero({ title, tagline, imageSrc, imageAlt, navLinks }) {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="hero__brand">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__tagline">{tagline}</p>
        </div>
        <nav className="hero__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
      </div>
      <div className="hero__illustration">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  )
}
