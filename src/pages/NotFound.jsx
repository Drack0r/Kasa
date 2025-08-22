import Error404 from "../components/ui/Error404";

/**
 * Composant NotFound qui affiche la page d'erreur 404.
 * Page affichée lorsqu'une route n'existe pas ou qu'une ressource est introuvable.
 *
 * @component
 * @returns {JSX.Element} La page d'erreur 404 avec message et lien de retour
 *
 * @example
 * // Utilisation dans le routeur pour les routes non trouvées
 * <Route path="*" element={<NotFound />} />
 *
 * @example
 * // Utilisation pour une redirection 404
 * <Route path="/404" element={<NotFound />} />
 *
 * @example
 * // Utilisation directe
 * <NotFound />
 *
 * @example
 * // Utilisation dans un layout
 * <Layout>
 *   <NotFound />
 * </Layout>
 */
export default function NotFound() {
  return (
    <>
      <Error404 />
    </>
  );
}
