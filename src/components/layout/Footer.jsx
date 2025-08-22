import Logo from "../common/Logo";
import CopyrightNotice from "../common/CopyrightNotice";

/**
 * Composant Footer qui affiche le pied de page principal de l'application.
 * Contient le logo de Kasa en version sombre et la notice de copyright.
 *
 * @component
 * @returns {JSX.Element} Un élément footer contenant le logo sombre et le copyright
 *
 * @example
 * // Utilisation dans le layout principal
 * <Footer />
 *
 * @example
 * // Utilisation dans App.jsx
 * function App() {
 *   return (
 *     <div>
 *       <Header />
 *       <main>{ contenu principal }</main>
 *       <Footer />
 *     </div>
 *   );
 * }
 */
export default function Footer() {
  return (
    <footer className="footer">
      <Logo logoTheme="dark" />
      <CopyrightNotice />
    </footer>
  );
}
