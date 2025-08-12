import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import CopyrightNotice from "../components/CopyrightNotice";

export default function Home() {
  return (
    <>
      <header className="header">
        <Logo logoTheme={"light"} />
        <Navigation />
      </header>

      <div className="body">
        <Hero
          textContent={"Chez vous, partout et ailleurs"}
          backgroundImage="/src/assets/images/backgrounds/hero-background-1.jpg"
          isInnerShadowed={true}
          isBoxShadowed={true}
        />
      </div>

      <footer className="footer">
        <Logo logoTheme={"dark"} />
        <CopyrightNotice />
      </footer>
    </>
  );
}
