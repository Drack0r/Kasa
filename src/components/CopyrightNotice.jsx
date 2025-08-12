export default function CopyrightNotice() {
  let currentYear = new Date().getFullYear();

  return (
    <span className="footer__copyright">
      © {currentYear} Kasa. All rights reserved
    </span>
  );
}
