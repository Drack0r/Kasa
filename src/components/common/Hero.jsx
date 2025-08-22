/**
 * Composant Hero qui affiche une bannière avec image de fond et texte personnalisables.
 * Permet d'ajouter différents effets d'ombre (intérieure et extérieure).
 *
 * @component
 * @param {string} [textContent=""] - Le contenu textuel affiché dans la bannière
 * @param {string} [backgroundImage=""] - L'URL ou le chemin vers l'image d'arrière-plan
 * @param {boolean} [isInnerShadowed=false] - Active l'ombre intérieure sur l'image
 * @param {boolean} [isBoxShadowed=false] - Active l'ombre extérieure (box-shadow) sur la section
 * @param {number} [innerShadowOpacity=0.6] - L'opacité de l'ombre intérieure (entre 0 et 1)
 * @returns {JSX.Element} Un élément section contenant la bannière avec les styles appliqués
 *
 * @example
 * // Bannière simple avec texte
 * <Hero textContent="Chez vous, partout et ailleurs" />
 *
 * @example
 * // Bannière avec image de fond et ombre intérieure
 * <Hero
 *   textContent="Chez vous, partout et ailleurs"
 *   backgroundImage="/src/assets/images/backgrounds/hero-background-1.jpg"
 *   isInnerShadowed={true}
 *   innerShadowOpacity={0.8}
 * />
 *
 * @example
 * // Bannière avec ombre extérieure (page About)
 * <Hero
 *   backgroundImage="/src/assets/images/backgrounds/hero-background-2.jpg"
 *   isBoxShadowed={true}
 * />
 */
export default function Hero({
  textContent = "",
  backgroundImage = "",
  isInnerShadowed = false,
  isBoxShadowed = false,
  innerShadowOpacity = 0.6,
}) {
  const heroClass = `hero ${isBoxShadowed ? "hero--box-shadowed" : ""} ${
    isInnerShadowed ? "hero--inner-shadowed" : ""
  }`;

  const heroStyle = {
    backgroundImage: `url(${backgroundImage}`,
    "--inner-shadow-opacity": innerShadowOpacity,
  };

  return (
    <section className={heroClass} style={heroStyle}>
      <h2 className="hero__text">{textContent}</h2>
    </section>
  );
}
