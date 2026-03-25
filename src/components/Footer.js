function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">🍋 Little Lemon</span>
          <p className="footer__tagline">Family owned. Mediterranean inspired.</p>
        </div>

        <nav className="footer__link-group">
          <h4 className="footer__link-group-title">Doormat Menu</h4>
          <ul className="footer__link-list">
            {['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="footer__link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__link-group">
          <h4 className="footer__link-group-title">Contact</h4>
          <ul className="footer__link-list">
            <li className="footer__contact-item">📍 123 W. Michigan Ave, Chicago, IL</li>
            <li className="footer__contact-item">📞 (312) 555-0199</li>
            <li className="footer__contact-item">✉️ hello@littlelemon.com</li>
          </ul>
        </div>

        <div className="footer__link-group">
          <h4 className="footer__link-group-title">Social Media</h4>
          <ul className="footer__link-list">
            {['Instagram', 'Facebook', 'Twitter', 'TikTok'].map(s => (
              <li key={s}>
                <a href="#social" className="footer__link">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">© 2026 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;