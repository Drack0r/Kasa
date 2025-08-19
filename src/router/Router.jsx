import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/ui/Loading";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const ApartmentDetails = lazy(() => import("../pages/ApartmentDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apartment/:id" element={<ApartmentDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
