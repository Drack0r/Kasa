import Logo from "../common/Logo";
import Navigation from "../common/Navigation";

/**
 * Composant Header qui affiche l'en-tête principal de l'application.
 * Contient le logo de Kasa et la navigation principale.
 *
 * @component
 * @returns {JSX.Element} Un élément header contenant le logo et la navigation
 *
 * @example
 * // Utilisation dans le layout principal
 * <Header />
 *
 * @example
 * // Utilisation dans App.jsx
 * function App() {
 *   return (
 *     <div>
 *       <Header />
 *       <main>{ contenu principal }</main>
 *     </div>
 *   );
 * }
 */
export default function Header() {
  return (
    <header className="header">
      <Logo logoTheme="light" />
      <Navigation />
    </header>
  );
}
