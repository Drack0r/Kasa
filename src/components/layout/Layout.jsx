import usePageClass from "../../hooks/usePageClass";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const pageClass = usePageClass();

  return (
    <div className={`page ${pageClass}`}>
      <Header />
      <main className="body">{children}</main>
      <Footer />
    </div>
  );
}
