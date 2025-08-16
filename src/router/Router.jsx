import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "../pages/NotFound";
import PropertyDetails from "../pages/PropertyDetails";
import Loading from "../components/Loading";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

export default function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
