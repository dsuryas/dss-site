import React from "react";
import useSpotlight from "../../hooks/useSpotlight";

const Spotlight = () => {
  const spotlightRef = useSpotlight();

  return <div className="spotlight" ref={spotlightRef} />;
};

export default Spotlight;
