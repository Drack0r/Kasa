/**
 * Composant CopyrightNotice qui affiche la notice de copyright de Kasa.
 * Affiche automatiquement l'année courante dans le copyright.
 *
 * @component
 * @returns {JSX.Element} Un élément span contenant la notice de copyright avec l'année courante
 * @example
 * // Utilisation dans un footer :
 * <CopyrightNotice />
 */
export default function CopyrightNotice() {
  let currentYear = new Date().getFullYear();

  return (
    <span className="footer__copyright">
      © {currentYear} Kasa. All rights reserved
    </span>
  );
}
