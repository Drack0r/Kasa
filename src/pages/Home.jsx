import Header from "../components/Header";
import Footer from "../components/Footer";

function Hero() {
  return (
    <section className="hero">
      <span className="hero__text">Chez vous, partout ailleurs</span>
    </section>
  );
}

function Body() {
  return (
    <div className="body">
      <Hero />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      {/* <div className="section-placeholder"></div> */}
      <Body />
      <Footer />
    </>
  );
}
