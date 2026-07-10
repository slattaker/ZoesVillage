const BOOKING_URL = "https://calendar.app.google/nXVsKwuQUBeXJyis8";
const hourlyServices = [
 {
   name: "Postpartum Support",
   rate: "$45/hour",
   minimum: "4-hour minimum",
   description:
     "Gentle daytime support for recovery, confidence, and life with your newborn.",
   features: [
     "Feeding support",
     "Newborn care guidance",
     "Maternal recovery support",
     "Emotional support",
     "Sibling transitions",
     "Light baby-related household support",
   ],
 },
 {
   name: "Twins & Specialized Newborn Care",
   rate: "$50/hour",
   minimum: "4-hour minimum",
   description:
     "Personalized newborn care for twins, premature babies, NICU graduates, and families needing additional support.",
   features: [
     "Twin feeding support",
     "Multiples routines and organization",
     "Parent education",
     "Sleep and feeding guidance",
     "Specialized newborn support",
   ],
 },
 {
   name: "Overnight Newborn Care",
   rate: "Starting at $45/hour",
   minimum: "8-hour minimum",
   description:
     "Calm overnight care so your baby is supported while your family gets meaningful rest.",
   features: [
     "Overnight feeding support",
     "Diapering and soothing",
     "Bottle preparation and washing",
     "Sleep and feeding logs",
     "Parent education",
     "Twins and multiples available at $50/hour",
   ],
 },
];
const postpartumPackages = [
 {
   name: "Golden Hour",
   hours: "20 hours",
   price: "$900",
   description:
     "A gentle introduction to postpartum support during your earliest days at home.",
   features: [
     "Flexible daytime visits",
     "Personalized postpartum care plan",
     "Newborn care and feeding guidance",
     "Light baby-related household support",
     "Text support between visits",
   ],
 },
 {
   name: "Village",
   hours: "40 hours",
   price: "$1,800",
   badge: "Most Popular",
   description:
     "Consistent care as your family recovers, adjusts, and builds confidence.",
   features: [
     "Everything included in Golden Hour",
     "Priority scheduling",
     "Ongoing feeding and soothing guidance",
     "Weekly family check-ins",
     "Support with routines and newborn rhythms",
   ],
 },
 {
   name: "Fourth Trimester",
   hours: "80 hours",
   price: "$3,600",
   description:
     "Comprehensive support throughout the first weeks and months postpartum.",
   features: [
     "Everything included in Village",
     "Daytime and overnight scheduling options",
     "Extended newborn and recovery support",
     "Ongoing family education",
     "Resources and trusted local referrals",
   ],
 },
];


function PackageCards() {
 return (
    
<section className="section packages" id="packages">
<div className="container package-divider">
<span></span>
<h3>Postpartum Packages</h3>
<span></span>
</div>
<div className="container postpartum-package-grid">
 {postpartumPackages.map((carePackage) => (
<article className="postpartum-package-card" key={carePackage.name}>
     {carePackage.badge && (
<span className="package-badge">{carePackage.badge}</span>
     )}
<p className="package-hours">{carePackage.hours}</p>
<h3>{carePackage.name}</h3>
<p className="package-price">{carePackage.price}</p>
<p className="package-description">
       {carePackage.description}
</p>
<ul className="package-feature-list">
       {carePackage.features.map((feature) => (
<li key={feature}>
<span aria-hidden="true">✓</span>
           {feature}
</li>
       ))}
</ul>
<a
       className="primary-btn"
       href={BOOKING_URL}
       target="_blank"
       rel="noopener noreferrer"
>
       Schedule a Consultation
</a>
</article>
 ))}
</div>
<div className="container package-footer-note">
<div>
<p className="eyebrow">Every Family Receives</p>
<ul>
<li>Complimentary consultation</li>
<li>Personalized care plan</li>
<li>Evidence-based newborn guidance</li>
<li>Judgment-free emotional support</li>
<li>Local resources and referrals</li>
</ul>
</div>
<div>
<p className="eyebrow">Specialty Areas</p>
<ul>
<li>First-time parents</li>
<li>Twins and multiples</li>
<li>Premature babies and NICU graduates</li>
<li>Overnight newborn care</li>
</ul>
</div>
</div>
</section>
 );
}
export default PackageCards;