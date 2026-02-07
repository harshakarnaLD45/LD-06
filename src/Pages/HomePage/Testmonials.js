import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import React, { useRef, useState,useEffect } from "react";
import ScrollMaskHeadings from "../../Components/CommonComponents/ScrollMaskHeadings";
import VolumeUpIcon from "@mui/icons-material/VolumeMute";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { styled, keyframes } from "@mui/material/styles";

import Video1 from '../../assets/Home/Testimonials/Testimonial_video (1).mp4';
import Video2 from '../../assets/Home/Testimonials/Testimonial_video (2).mp4';
import Video3 from '../../assets/Home/Testimonials/Testimonial_video (3).mp4';
import Video4 from '../../assets/Home/Testimonials/Testimonial_video (4).mp4';
import Video5 from '../../assets/Home/Testimonials/Testimonial_video (5).mp4';



// Create keyframes animation
const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;


const TestimonialCard = ({ text, author }) => (
  <Box
    sx={{
      width: 300,
      height: 300,
      bgcolor: "#262626",
      borderRadius: 4,
      p: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: "#C2C2C4",
      boxSizing: "border-box",
    }}
  >
    <Typography variant="body1" sx={{ flexGrow: 1 }}>
      {text}
    </Typography>
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", mt: 2 }}>
      <Typography variant="body2" align="right">{author}</Typography>
    </Box>
  </Box>
);

// Styled component for the animated track
const InfiniteScrollTrack = styled(Box)({
  display: "flex",
  width: "max-content",
  gap: "16px",
  animation: `${scrollAnimation} 60s linear infinite`,
  willChange: "transform",
  '&:hover': {
    animationPlayState: 'paused',
  }
});

const TestimonialVideoCard = ({ videoSrc, ariaLabel }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  React.useEffect(() => {
    if (!isIOS) return;
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.play().catch(() => {});
    }
  }, [videoSrc]);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  
  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        width: 300,
        height: 300,
        bgcolor: "#262626",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
        isolation: 'isolate',
      }}
    >
      <video
        ref={videoRef}
        aria-label={ariaLabel}
        src={videoSrc}
        loop
        muted={muted}
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          position: "relative",
          zIndex: 1,
        }}
      />
      <IconButton
        onClick={toggleMute}
        sx={{
          position: "absolute",
          bottom: 8,
          right: 8,
          width: 40,
          height: 40,
          minWidth: 40,
          zIndex: 9999,
          cursor: "pointer",
          pointerEvents: 'auto',
          backgroundColor: isIOS ? 'rgba(0,0,0,0.6)' : 'transparent',
          borderRadius: '50%',
          backdropFilter: isIOS ? 'blur(10px)' : 'none',
          '&:hover': {
            backgroundColor: isIOS ? 'rgba(0,0,0,0.7)' : 'transparent',
          },
          '&:active': {
            backgroundColor: isIOS ? 'rgba(0,0,0,0.9)' : 'transparent',
            transform: isIOS ? 'scale(0.95)' : 'none',
          }
        }}
      >
        {muted ? <VolumeOffIcon sx={{ color: 'white', fontSize: 20 }} /> : <VolumeUpIcon sx={{ color: 'white', fontSize: 20 }} />}
      </IconButton>
    </Box>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    // Video 1 with matching text
    {
      type: "video",
      videoSrc: Video1,
      ariaLabel: "NAF Client Testimonial - Improved Employee Satisfaction with Vending Machines",
    },
    {
      type: "text",
      text: t('Home.testimonial1.text'),
      author: t('Home.testimonial1.author'),
    },
    
    // Video 2 with matching text
    {
      type: "video",
      videoSrc: Video2,
      ariaLabel: "NAF Vending - Testimonial: Increased Revenue with Smart Machines",
    },
    {
      type: "text",
      text: t('Home.testimonial2.text'),
      author: t('Home.testimonial2.author'),
    },
    
    // Video 3 with matching text
    {
      type: "video",
      videoSrc: Video3,
      ariaLabel: "NAF Vending - Testimonial: Streamlined Operations with Cloud Management",
    },
    {
      type: "text",
      text: t('Home.testimonial3.text'),
      author: t('Home.testimonial3.author'),
    },
    
    // Video 4 with matching text
    {
      type: "video",
      videoSrc: Video4,
      ariaLabel: "NAF Vending - Testimonial: Reliable Vending Solutions and Support",
    },
    {
      type: "text",
      text: t('Home.testimonial4.text'),
      author: t('Home.testimonial4.author'),
    },
    
    // Video 5 with matching text
    {
      type: "video",
      videoSrc: Video5,
      ariaLabel: "NAF Vending - Testimonial: Modern and Customizable Vending Experience",
    },
    {
      type: "text",
      text: t('Home.testimonial5.text'),
      author: t('Home.testimonial5.author'),
    },

    // NEW: First part of Martina's testimonial
    {
      type: "text",
      text: t('Home.testimonial6.text'),
      author: t('Home.testimonial6.author'),
    },

    // NEW: Second part of Martina's testimonial (New Year wishes)
    {
      type: "text",
      text: t('Home.testimonial7.text'),
      author: t('Home.testimonial7.author'),
    },
  ];

  // Create a single array with the items for the marquee
const loopItems = [...testimonials, ...testimonials];


  return (
    <Box>
      <Box className="section-container">
        <ScrollMaskHeadings text={t("Home.testmonialHeading")}/>
      </Box>
      <Box sx={{ overflow: "hidden", width: "100%" }}>
  <Box
    sx={{
      display: "flex",
      width: "max-content",
      gap: "16px",
      animation: "testimonialScroll 60s linear infinite",
      willChange: "transform",
    }}
  >
     <InfiniteScrollTrack>
          {loopItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.type === "video" ? (
                <TestimonialVideoCard
                  videoSrc={item.videoSrc}
                  ariaLabel={item.ariaLabel}
                />
              ) : (
                <TestimonialCard
                  text={item.text}
                  author={item.author}
                />
              )}
            </React.Fragment>
          ))}
        </InfiniteScrollTrack>
      </Box>
    </Box>
    </Box>
  );
};

export default Testimonials;