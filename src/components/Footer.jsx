function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="footer-brand" href="#">
            <span>ZV</span>
            <div>
              <strong>Zoë's Village</strong>
              <p>Birth & Postpartum Doula Care</p>
            </div>
          </a>

          <p className="footer-copy">
            Gentle support for pregnancy, birth, postpartum, and the beautiful
            beginning of your family’s story.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#about">About Zoë</a>
          <a href="#services">Services</a>
          <a href="#journey">Your Journey</a>
          <a href="#contact">Consultation</a>
        </div>

        <div className="footer-links">
          <h3>Service Area</h3>
          <p>Charlotte</p>
          <p>Fort Mill</p>
          <p>Rock Hill</p>
          <p>Tega Cay</p>
        </div>

        <div className="footer-links">
          <h3>Connect</h3>
          <a href="mailto:hello@zoesvillage.com">hello@zoesvillage.com</a>
          <a href="tel:+10000000000">Call or Text</a>
          <a href="#journal">Village Journal</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Zoë's Village. All rights reserved.</p>
        <p>Serving families across the Charlotte area.</p>
      </div>
    </footer>
  );
}

export default Footer;