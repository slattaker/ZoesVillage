import { useEffect, useState } from "react";
import logo from "../assets/zoes-village-logo.png";

const INTRO_KEY = "zv-intro-last-shown";
const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;

function VillageIntro() {
    const [showIntro, setShowIntro] = useState(() => {
    const lastShown = localStorage.getItem(INTRO_KEY);

    if (!lastShown) return true;

    const daysSince =
        Date.now() - Number(lastShown);

    return daysSince > THIRTY_DAYS;
    });

useEffect(() => {
  if (!showIntro) return;

  const finishIntro = () => {
    localStorage.setItem(
      INTRO_KEY,
      Date.now().toString()
    );

    setShowIntro(false);
  };

  const timer = setTimeout(finishIntro, 3800);

  window.addEventListener("click", finishIntro);
  window.addEventListener("keydown", finishIntro);
  window.addEventListener("touchstart", finishIntro);
  window.addEventListener("wheel", finishIntro);

  return () => {
    clearTimeout(timer);

    window.removeEventListener("click", finishIntro);
    window.removeEventListener("keydown", finishIntro);
    window.removeEventListener("touchstart", finishIntro);
    window.removeEventListener("wheel", finishIntro);
  };
}, [showIntro]);

if (!showIntro) return null;

  return (
    <section className="village-intro" aria-label="Zoë's Village introduction">
      <div className="intro-sky"></div>

      <div className="intro-sun">
        <span className="sun-ray ray-1"></span>
        <span className="sun-ray ray-2"></span>
        <span className="sun-ray ray-3"></span>
        <span className="sun-ray ray-4"></span>
        <span className="sun-ray ray-5"></span>
      </div>

      <div className="intro-hill intro-hill-one"></div>
      <div className="intro-hill intro-hill-two"></div>

      <div className="intro-path"></div>

      <div className="intro-flowers">
        <span>✿</span>
        <span>❀</span>
        <span>✦</span>
        <span>✿</span>
        <span>❀</span>
      </div>

      <img className="intro-logo" src={logo} alt="Zoë's Village logo" />

      <div className="intro-fade"></div>
    </section>
  );
}

export default VillageIntro;