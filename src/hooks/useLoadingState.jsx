import Loading from "../components/ui/Loading";

/**
 * Hook personnalisé pour gérer l'affichage des états de chargement et d'erreur.
 * Retourne le composant approprié selon l'état de la requête (loading, error, ou null).
 *
 * @function useLoadingState
 * @param {boolean} loading - État de chargement de la requête
 * @param {string|null} error - Message d'erreur ou null si pas d'erreur
 * @param {string} [loadingMessage="Chargement en cours..."] - Message personnalisé pour l'état de chargement
 * @returns {Object} Un objet contenant l'état et le contenu à afficher
 * @returns {boolean} returns.isLoading - Indique si l'application est en cours de chargement ou en erreur
 * @returns {JSX.Element|null} returns.content - Le composant à afficher (Loading, Error, ou null)
 *
 * @example
 * // Utilisation basique avec useFetch
 * const { data, loading, error } = useFetch(API_ENDPOINTS.APARTMENTS);
 * const { isLoading, content } = useLoadingState(loading, error, "Chargement des appartements...");
 *
 * if (isLoading) {
 *   return content;
 * }
 *
 * return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>;
 *
 * @example
 * // Utilisation avec message personnalisé
 * const { isLoading, content } = useLoadingState(
 *   loading,
 *   error,
 *   "Récupération des données de l'appartement..."
 * );
 *
 * @example
 * // Utilisation avec gestion conditionnelle
 * const { isLoading, content } = useLoadingState(loading, error);
 *
 * if (isLoading || error) {
 *   return content;
 * }
 *
 * // Rendu du contenu normal
 * return <MainContent data={data} />;
 *
 * @since 1.0.0
 */
export default function useLoadingState(
  loading,
  error,
  loadingMessage = "Chargement en cours..."
) {
  if (loading) {
    return { isLoading: true, content: <Loading message={loadingMessage} /> };
  }

  if (error) {
    return {
      isLoading: false,
      content: <div className="error">Erreur : {error}</div>,
    };
  }

  return { isLoading: false, content: null };
}
