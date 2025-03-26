import { useEffect, useRef } from "react";

const useSpotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!spotlightRef.current) return;

      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      spotlightRef.current.style.setProperty("--x", `${x}%`);
      spotlightRef.current.style.setProperty("--y", `${y}%`);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return spotlightRef;
};

export default useSpotlight;
