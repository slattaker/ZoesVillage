const BOOKING_URL =
 "https://calendar.app.google/nXVsKwuQUBeXJyis8";
function Footer() {
 return (
<footer className="site-footer" id="contact">
<div className="container footer-contact">
<div>
<p className="eyebrow">Contact Zoë</p>
<h2>Questions? I’d love to hear from you.</h2>
<p>
           Reach out about postpartum support, newborn care, availability,
           or scheduling a consultation.
</p>
</div>
<div className="footer-contact-details">
<a href="tel:+18036103007">
<span>Call or text</span>
<strong>(803) 610-3007</strong>
</a>
<a href="mailto:hello@zoesvillage.com">
<span>Email</span>
<strong>hello@zoesvillage.com</strong>
</a>
<div>
<span>Serving</span>
<strong>
             Charlotte, Fort Mill, Rock Hill, Tega Cay, Waxhaw, Matthews,
             and surrounding communities
</strong>
</div>
</div>
</div>
<div className="container footer-actions">
<a
         className="primary-btn"
         href={BOOKING_URL}
         target="_blank"
         rel="noopener noreferrer"
>
         Schedule a Free Consultation
</a>
</div>
<div className="container footer-bottom">
<nav aria-label="Footer navigation">
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#packages">Packages</a>
<a href="#journey">Journey</a>
</nav>
<p>© {new Date().getFullYear()} Zoë’s Village LLC</p>
</div>
</footer>
 );
}
export default Footer;