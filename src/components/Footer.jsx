import { Link } from 'react-router-dom'

export default function Footer({ description, columns }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__col">
            <h4>xsentry labs</h4>
            <p>{description}</p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="footer__col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link to={link.to}>{link.label}</Link>
                    ) : (
                      <a href={link.href}>{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          © 2026 Xsentry Labs. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
