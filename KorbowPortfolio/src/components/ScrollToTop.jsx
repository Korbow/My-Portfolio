import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const pathname = location.pathname;
  const background = location.state && location.state.background;

  useEffect(() => {
    if (background) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [background]);

  return null;
}