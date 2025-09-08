import { useState, useEffect } from "react";
import { TIMEOUTS } from "../config/api";

/**
 * Hook personnalisé pour récupérer des données depuis une API avec gestion d'état.
 * Gère automatiquement le chargement, les erreurs et le nettoyage des requêtes.
 *
 * @function useFetch
 * @param {string} dataSource - L'URL ou le chemin vers la source de données à récupérer
 * @returns {Object} Un objet contenant l'état de la requête
 * @returns {Array|Object} returns.data - Les données récupérées (tableau vide par défaut)
 * @returns {boolean} returns.loading - État de chargement de la requête
 * @returns {string|null} returns.error - Message d'erreur ou null si pas d'erreur
 *
 * @example
 * // Utilisation basique pour récupérer des appartements
 * const { data: apartments, loading, error } = useFetch('/data/apartments.json');
 *
 * @example
 * // Utilisation avec gestion d'erreur
 * const { data, loading, error } = useFetch(API_ENDPOINTS.APARTMENTS);
 *
 * if (loading) return <Loading />;
 * if (error) return <Error message={error} />;
 * return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>;
 *
 * @example
 * // Utilisation pour différents types de données
 * const { data: aboutData } = useFetch(API_ENDPOINTS.ABOUT_DATA);
 * const { data: apartments } = useFetch(API_ENDPOINTS.APARTMENTS);
 *
 * @since 1.0.0
 */
export function useFetch(dataSource) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    /**
     * Fonction asynchrone interne pour récupérer les données
     * Gère les erreurs HTTP et le nettoyage des composants démontés
     */
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Délai artificiel pour voir le loader
        await new Promise((resolve) =>
          setTimeout(resolve, TIMEOUTS.LOADING_DELAY)
        );

        const response = await fetch(dataSource);

        if (!response.ok) {
          throw new Error(`HTTP error ! status : ${response.status}`);
        }

        const result = await response.json();

        if (isMounted) {
          setData(result);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
          console.error("Fetch error:", error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function pour éviter les fuites mémoire
    return () => {
      isMounted = false;
    };
  }, [dataSource]);

  return { data, loading, error };
}
