export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__rule" />
        <div className="footer__grid">
          <div className="footer__col">
            <span className="footer__brand">xsentry labs</span>
            <p className="footer__tagline">
              Building systems the modern way.
            </p>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Product</h4>
            <ul className="footer__links">
              <li><a href="#factory">the Factory</a></li>
              <li><a href="/tools/chat-pdf">Chat with your data</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__links">
              <li><a href="mailto:hello@xsentrylabs.com">hello@xsentrylabs.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">
            &copy; {new Date().getFullYear()} xsentry labs. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
