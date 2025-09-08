import usePageClass from "../../hooks/usePageClass.js";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Composant Layout qui définit la structure principale de l'application.
 * Contient l'en-tête, le contenu principal et le pied de page avec une classe CSS dynamique basée sur la route.
 *
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {React.ReactNode} props.children - Le contenu à afficher dans la section principale
 * @returns {JSX.Element} Un div contenant la structure complète de la page (header, main, footer)
 *
 * @example
 * // Utilisation dans le routeur
 * <Layout>
 *   <Home />
 * </Layout>
 *
 * @example
 * // Utilisation avec différentes pages
 * <Layout>
 *   <ApartmentDetails />
 * </Layout>
 *
 * @example
 * // Utilisation dans App.jsx
 * function App() {
 *   return (
 *     <Router>
 *       <Layout>
 *         <Routes>
 *           <Route path="/" element={<Home />} />
 *           <Route path="/about" element={<About />} />
 *         </Routes>
 *       </Layout>
 *     </Router>
 *   );
 * }
 */
export default function Layout({ children }) {
  const pageClass = usePageClass();

  return (
    <div className={`page ${pageClass}`}>
      <Header />
      <main className="body">{children}</main>
      <Footer />
    </div>
  );
}
