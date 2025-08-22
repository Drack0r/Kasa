import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "/src/assets/styles/main.scss";

/**
 * Point d'entrée principal de l'application React Kasa.
 * Configure le rendu de l'application avec React Router et les styles globaux.
 *
 * @fileoverview Point d'entrée de l'application qui initialise React avec le routage et les styles
 * @author Votre nom
 * @since 1.0.0
 *
 * @example
 * // Structure générée dans le DOM :
 * // <div id="app">
 * //   <BrowserRouter>
 * //     <App>
 * //       <Layout>
 * //         <Header />
 * //         <main><Router /></main>
 * //         <Footer />
 * //       </Layout>
 * //     </App>
 * //   </BrowserRouter>
 * // </div>
 *
 */
createRoot(document.getElementById("app")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
