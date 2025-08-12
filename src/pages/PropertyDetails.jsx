import { useParams } from "react-router-dom";
import propertyData from "../data/logements.json";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import CopyrightNotice from "../components/CopyrightNotice";

export default function PropertyDetails() {
  const { id } = useParams();
  const propertyTitle = propertyData.find(
    (property) => property.id === id
  ).title;

  return (
    <>
      <header className="header">
        <Logo logoTheme={"light"} />
        <Navigation />
      </header>

      <p>Propriété #{id} :</p>
      <h1>{propertyTitle}</h1>

      <footer className="footer">
        <Logo logoTheme={"dark"} />
        <CopyrightNotice />
      </footer>
    </>
  );
}
