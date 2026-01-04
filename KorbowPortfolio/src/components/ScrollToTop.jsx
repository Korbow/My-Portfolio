import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // On ne force le scroll à 0 que si on n'est PAS dans une transition de détail
    // Ou alors, on laisse faire, car ProjectDetail est en "fixed" donc ça ne se verra pas.
    
    window.scrollTo(0, 0);
    
  }, [pathname]);

  return null;
}