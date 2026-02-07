import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  const [height, setHeight] = useState(
    window.innerWidth >= 1400 ? "1005px" : "100%"
  );

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerWidth >= 1400 ? "1005px" : "100%");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="calendly-container">
      <InlineWidget
        url="https://calendly.com/vendinaf/30min"
        styles={{
          height,
          width: "100%",
          border: "none",
          overflow: "hidden",
        }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "4d5055",
        }}
      />
    </div>
  );
};

export default Calendly;
