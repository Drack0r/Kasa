import Loading from "../components/ui/Loading";

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
