import Logo from "../common/Logo";
import CopyrightNotice from "../common/CopyrightNotice";

export default function Footer() {
  return (
    <footer className="footer">
      <Logo logoTheme="dark" />
      <CopyrightNotice />
    </footer>
  );
}
