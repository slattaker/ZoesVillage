const services = [
 {
   icon: "🌿",
   title: "Postpartum Support",
   text: "Compassionate in-home care that gives you space to rest, recover, and adjust to life with your baby.",
 },
 {
   icon: "🌸",
   title: "Newborn Care",
   text: "Gentle guidance with feeding, soothing, diapering, sleep rhythms, and everyday newborn care.",
 },
 {
   icon: "🕯️",
   title: "Overnight Support",
   text: "Calm nighttime care that helps your family get more rest while your baby is safely supported.",
 },
];

function ServicesPreview() {
  return (
    <section className="section services-preview" id="services">
      <div className="container">
        <div className="services-heading">
          <p className="eyebrow">Care Options</p>
          <h2 className="section-title">Support that meets you where you are.</h2>
          <p className="section-copy">
            Every family’s needs are different. Zoë’s Village offers calm,
            personalized doula support for pregnancy, birth, and the tender
            weeks after baby arrives.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card-premium" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#packages">Start here →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;