// ScrollToTop.jsx
import { useEffect } from "react";

const ScrollToTop = ({id}) => {

  useEffect(() => {
    const container = document.querySelector(".outlet-container");
    if (container) {
      requestAnimationFrame(() => {
        container.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  }, [id]);

  return null;
};

export default ScrollToTop;
