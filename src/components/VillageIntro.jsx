import { useEffect, useState } from "react";
import logoImage from "../assets/zoes-village-logo.png";
import "./VillageIntro.css";
import cottageBackground from "../assets/Cottage Background.png";

function VillageIntro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <section className="village-intro">
<div className="morning-background"></div>

<div className="logo-wrapper">
  <img src={logoImage} alt="Zoë's Village logo" />
</div>

<div className="valley-scene">
  <img
    src={cottageBackground}
    alt="Flower Valley"
  />
</div>

<div className="intro-soft-fade"></div>
    </section>
  );
}

export default VillageIntro;