import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloudVideo from '../../assets/Home/NAF-showreel.mp4';
import { MuteIcon, UnmuteIcon } from "../../Components/CustomIcons";

gsap.registerPlugin(ScrollTrigger);

const Homepagereel = () => {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
     
     
    const videoContainer = videoContainerRef.current;

    if (window.innerWidth > 1024) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoContainer,
          start: () => `top ${window.innerWidth < 1650 ? '50%' : '50%'}`,
          end: "bottom 20%",
          scrub: 1,
        }
      });

      tl.to(videoContainer, {
        borderRadius: "24px",
        ease: "power2.inOut",
      })
        .to(videoContainer, {
          borderRadius: "24px",
          ease: "power2.inOut",
        });

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <Box 
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
        // mt: { xs: -8, md: -6, xl: -10 },
        mt: { xs: 10, md: 15, lg:25, xl: 25 },
      }}
    >
      <Box
        ref={videoContainerRef}
        className="videobox"
        sx={{
          position: "relative",
          height: "auto",
          overflow: "hidden",
          borderRadius: "24px",
          width: "93%",
          "@media (min-width: 1650px)": {
            width: "96%",
          },
          "@media (max-width: 1024px)": {
            borderRadius: "9.495px",
          },
          "@media (max-width: 480px)": {
            borderRadius: "0px",
            width: "100%",
          },
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* Mute/Unmute Button */}
        <Box
          onClick={toggleMute}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 2,
            width: 60,
            height: 60,
            padding: 2,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.50)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {isMuted ? (
            <MuteIcon className="custom-icons" sx={{ color: "#fff" }} />
          ) : (
            <UnmuteIcon className="custom-icons" sx={{ color: "#fff" }} />
          )}
        </Box>

        {/* Video */}
        <video
          aria-label="NAF Showreel - Innovative Vending Machines and Technology Solutions."
          ref={videoRef}
          muted={isMuted}
          autoPlay
          loop
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "24px",
          }}
        >
          <source src={CloudVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
};

export default Homepagereel;