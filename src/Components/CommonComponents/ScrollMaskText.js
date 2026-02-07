import React, { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollMaskText = ({ text, textColor, textAlignment, textDisplay }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".custom-line", containerRef.current);

      gsap.set(lines, { perspective: 400 });

      gsap.from(lines, {
        rotationX: -100,
        transformOrigin: "50% 50% -160px",
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const lines = text.split("\n"); // Split by line breaks

  return (
    <div ref={containerRef} style={{  }}>
      <Typography
        variant="body1"
        sx={{
          color: textColor || "#C2C2C4",
          textAlign: textAlignment || "left",
          display: textDisplay || "inline-block",
          lineHeight: 1.2,
          wordWrap: "break-word",
          whiteSpace: "pre-wrap"
        }}
      >
        {lines.map((line, index) => (
          <div
            key={index}
            className='custom-line bodyRegularText3'
            style={{ display: "block", }}
          >
            {line}
          </div>
        ))}
      </Typography>
    </div>
  );
};

export default ScrollMaskText;
