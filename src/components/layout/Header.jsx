import Logo from "../common/Logo";
import Navigation from "../common/Navigation";

export default function Header() {
  return (
    <header className="header">
      <Logo logoTheme="light" />
      <Navigation />
    </header>
  );
}
