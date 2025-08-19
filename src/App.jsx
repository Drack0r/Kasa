import { useLocation } from "react-router-dom";
import Router from "./router/Router";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import CopyrightNotice from "./components/CopyrightNotice";

export default function App() {
  const location = useLocation();

  // Déterminer la classe en fonction du pathname
  const getPageClass = (pathname) => {
    switch (pathname) {
      case "/":
        return "homepage";
      case "/about":
        return "about-page";
      default:
        if (pathname.startsWith("/property/")) {
          return "property-page";
        }
        return "not-found-page";
    }
  };

  return (
    <div className={`page ${getPageClass(location.pathname)}`}>
      {/* Header */}
      <header className="header">
        <Logo logoTheme={"light"} />
        <Navigation />
      </header>

      {/* Body */}
      <main className="body">
        <Router />
      </main>

      {/* Footer */}
      <footer className="footer">
        <Logo logoTheme={"dark"} />
        <CopyrightNotice />
      </footer>
    </div>
  );
}
