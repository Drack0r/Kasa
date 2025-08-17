import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import ErrorDisplay from "../components/ErrorDisplay";
import CopyrightNotice from "../components/CopyrightNotice";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <header className="header">
        <Logo logoTheme={"light"} />
        <Navigation />
      </header>

      <main className="body">
        <ErrorDisplay />
      </main>

      <footer className="footer">
        <Logo logoTheme={"dark"} />
        <CopyrightNotice />
      </footer>
    </div>
  );
}
