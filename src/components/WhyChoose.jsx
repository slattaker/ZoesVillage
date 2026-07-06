const reasons = [
  {
    icon: "🌿",
    title: "A calm presence",
    text: "Support that helps you feel grounded when pregnancy, birth, or postpartum feels overwhelming.",
  },
  {
    icon: "🤍",
    title: "Personal to your family",
    text: "Care shaped around your preferences, your questions, your home, and your hopes for birth.",
  },
  {
    icon: "🕊️",
    title: "Encouragement without pressure",
    text: "Gentle guidance that helps you feel informed and confident without judgment or fear.",
  },
];

function WhyChoose() {
  return (
    <section className="section why-choose" id="why">
      <div className="container why-container">
        <div className="why-intro">
          <p className="eyebrow">Why Families Choose Zoë</p>
          <h2 className="section-title">Peace of mind for a tender season.</h2>
        </div>

        <div className="why-cards">
          {reasons.map((reason) => (
            <article className="why-card" key={reason.title}>
              <div className="why-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>

        <div className="why-quote">
          <span>“</span>
          <p>
            You deserve support that feels steady, warm, and personal — not
            rushed, clinical, or one-size-fits-all.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;