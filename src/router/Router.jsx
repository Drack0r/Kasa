import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const PropertyDetails = lazy(() => import("../pages/PropertyDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
