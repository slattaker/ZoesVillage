function Navbar() {
  return (
    <header className="navbar">
      <a className="nav-logo" href="#">
        <span className="nav-logo-mark">ZV</span>
        <span>
          <strong>Zoë's Village</strong>
          <small>Birth & Postpartum Doula</small>
        </span>
      </a>

      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#journey">Your Journey</a>
        <a href="#journal">Journal</a>
      </nav>

      <a className="nav-cta" href="#contact">
        Free Consultation
      </a>
    </header>
  );
}

export default Navbar;