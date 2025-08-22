import Layout from "./components/layout/Layout";
import Router from "./router/Router";

/**
 * Composant App principal de l'application Kasa.
 * Point d'entrée de l'application qui combine le layout et le système de routage.
 *
 * @component
 * @returns {JSX.Element} L'application complète avec layout et routage
 *
 * @example
 * // Utilisation dans main.jsx avec BrowserRouter
 * import { BrowserRouter } from "react-router-dom";
 *
 * ReactDOM.createRoot(document.getElementById('root')).render(
 *   <BrowserRouter>
 *     <App />
 *   </BrowserRouter>
 * );
 *
 * @example
 * // Structure de l'application générée :
 * // <Layout>
 * //   <Header />
 * //   <main>
 * //     <Router /> // Contient toutes les pages
 * //   </main>
 * //   <Footer />
 * // </Layout>
 *
 * @example
 * // Utilisation directe (nécessite BrowserRouter parent)
 * <App />
 */
export default function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}
