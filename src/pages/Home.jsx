import propertyData from "../data/logements.json";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import GalleryCard from "../components/GalleryCard";
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

        <section className="gallery">
          {propertyData.map((property) => {
            return <GalleryCard propertyData={property} key={property.id} />;
          })}
        </section>
      </div>

      <footer className="footer">
        <Logo logoTheme={"dark"} />
        <CopyrightNotice />
      </footer>
    </>
  );
}
