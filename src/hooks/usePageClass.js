import { useLocation } from "react-router-dom";
import { ROUTES, PAGE_CLASSES } from "../constants/routes";

export default function usePageClass() {
  const location = useLocation();

  // Déterminer la classe en fonction du pathname
  const getPageClass = (pathname) => {
    switch (pathname) {
      case ROUTES.HOME:
        return PAGE_CLASSES.HOME;
      case ROUTES.ABOUT:
        return PAGE_CLASSES.ABOUT;
      default:
        if (pathname.startsWith(ROUTES.APARTMENT_PREFIX)) {
          return PAGE_CLASSES.APARTMENT;
        }
        return PAGE_CLASSES.NOT_FOUND;
    }
  };

  return getPageClass(location.pathname);
}
