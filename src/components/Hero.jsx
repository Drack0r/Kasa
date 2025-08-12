export default function Hero({
  textContent,
  backgroundImage,
  isInnerShadowed,
  isBoxShadowed,
}) {
  const heroClass = `hero ${isBoxShadowed ? "hero--box-shadowed" : ""} ${
    isInnerShadowed ? "hero--inner-shadowed" : ""
  }`;

  return (
    <section
      className={heroClass}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="hero__text">{textContent}</h1>
    </section>
  );
}
