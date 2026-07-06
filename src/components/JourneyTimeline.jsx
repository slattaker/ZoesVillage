const steps = [
  {
    number: "01",
    title: "First hello",
    text: "We begin with a relaxed consultation where you can share your story, ask questions, and see if Zoë’s Village feels like the right fit.",
  },
  {
    number: "02",
    title: "Birth planning",
    text: "Together we talk through your preferences, fears, hopes, comfort measures, and how you want to feel supported.",
  },
  {
    number: "03",
    title: "Steady support",
    text: "As birth approaches, you have a calm person to turn to for encouragement, preparation, and reassurance.",
  },
  {
    number: "04",
    title: "Birth & after",
    text: "During labor and the early postpartum days, support stays gentle, present, and centered around your family.",
  },
];

function JourneyTimeline() {
  return (
    <section className="section journey" id="journey">
      <div className="container journey-header">
        <p className="eyebrow">Your Journey</p>
        <h2 className="section-title">A path you do not have to walk alone.</h2>
        <p className="section-copy">
          From the first conversation to those tender days after baby arrives,
          Zoë’s Village offers support that feels steady, thoughtful, and human.
        </p>
      </div>

      <div className="container journey-map">
        <div className="journey-path"></div>

        {steps.map((step, index) => (
          <article
            className={`journey-step ${index % 2 === 0 ? "left" : "right"}`}
            key={step.number}
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