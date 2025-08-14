import collapseData from "../data/collapse.json";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Collapse from "../components/Collapse";
import CopyrightNotice from "../components/CopyrightNotice";

export default function About() {
  return (
    <div className="about">
      <header className="header">
        <Logo logoTheme={"light"} />
        <Navigation />
      </header>

      <div className="body">
        <Hero
          textContent={""}
          backgroundImage={
            "/src/assets/images/backgrounds/hero-background-2.jpg"
          }
          isInnerShadowed={true}
          isBoxShadowed={false}
        />

        <section className="collapse-container">
          {collapseData.map((element) => (
            <Collapse
              key={element.id}
              title={element.title}
              textContent={element.textContent}
            />
          ))}
        </section>
      </div>

      <footer className="footer">
        <Logo logoTheme={"dark"} />
        <CopyrightNotice />
      </footer>
    </div>
  );
}
