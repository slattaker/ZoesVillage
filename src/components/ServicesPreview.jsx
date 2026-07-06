const services = [
  {
    icon: "🌿",
    title: "Birth Support",
    text: "Steady encouragement, comfort measures, advocacy support, and calm guidance before and during labor.",
  },
  {
    icon: "🕯️",
    title: "Postpartum Care",
    text: "Gentle in-home support as your family recovers, rests, feeds, heals, and finds a new rhythm.",
  },
  {
    icon: "🌸",
    title: "Virtual Guidance",
    text: "Flexible support for birth planning, postpartum questions, emotional encouragement, and preparation.",
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
              <a href="#contact">Start here →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;