import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PropertyDetails from "../pages/PropertyDetails";
import Loading from "../components/Loading";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Suspense>
  );
}
