const steps = [
 {
   number: "01",
   title: "First hello",
   text: "We begin with a relaxed consultation to talk about your family, your needs, and the kind of support that would feel most helpful.",
 },
 {
   number: "02",
   title: "Your care plan",
   text: "Together we create a flexible postpartum plan centered around recovery, rest, newborn care, and your household.",
 },
 {
   number: "03",
   title: "Steady support",
   text: "Zoë provides calm, practical care while helping you build confidence and find a rhythm that works for your family.",
 },
 {
   number: "04",
   title: "Growing confidence",
   text: "As your family settles in, support adapts to your changing needs so you feel prepared, encouraged, and never alone.",
 },
];

function JourneyTimeline() {
  return (
    <section className="section journey" id="journey">
      <div className="container journey-header">
        <p className="eyebrow">Your Journey</p>
        <h2 className="section-title">Support for the season after baby arrives.</h2>
        <p className="section-copy">
          From the first conversation to those tender days after baby arrives,
          Zoë’s Village offers support that feels steady, thoughtful, and human.
        </p>
      </div>

      <div className="container journey-map">
        <div className="journey-path">
          <span className="timeline-dot dot1"></span>
          <span className="timeline-dot dot2"></span>
          <span className="timeline-dot dot3"></span>
          <span className="timeline-dot dot4"></span>
        </div>

        {steps.map((step, index) => (
        <article
          className={`journey-step ${
            index % 2 === 0 ? "left" : "right"
          } step-${index + 1}`}
          >
            <div className="journey-number">{step.number}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default JourneyTimeline;