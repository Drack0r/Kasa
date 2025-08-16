export default function Hero({
  textContent,
  backgroundImage,
  isInnerShadowed,
  isBoxShadowed,
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
