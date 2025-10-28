// ScrollToTop.jsx
import { useEffect } from "react";

const ScrollToTop = ({pathname}) => {

  useEffect(() => {
    // Wait for DOM paint so smooth scroll actually animates
    const container = document.querySelector(".outlet-container");
    if (container) {
      requestAnimationFrame(() => {
        container.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
