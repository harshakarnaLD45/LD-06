import { Box, Link } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import OdetteVideo from '../../assets/Home/Odette-lamkhizni.mp4'
import AbdelilahVideo from '../../assets/Home/Abdelilah-lamkhizni.mp4'
import SaiVideo from '../../assets/Home/Sri-satya-sai kanna-dhulipudi.mp4'
import './HomePage.css';

gsap.registerPlugin(ScrollTrigger);

const FadeInParagraph = () => {
    const { t } = useTranslation();
    const ref = useRef(null);

    const paragraphText = [
        { text: t('Home.naftext1'), highlight: false },
        { text: "Odette", highlight: true, person: "odette" },
        { text: t('Home.naftext2'), highlight: false },
        { text: "Abdelilah", highlight: true, person: "abdelilah" },
        { text: "Lamkhizni", highlight: true, person: "abdelilah" },
        { text: t('Home.naftext3'), highlight: false },
        { text: "Sri Satya Sai Kanna Dhulipudi", highlight: true, person: "sai" },
        { text: t('Home.naftext4'), highlight: false },
    ];
    const [hoveredPerson, setHoveredPerson] = useState(null);
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        
            
        
        const words = gsap.utils.toArray(".fade-word");

        gsap.fromTo(
            words,
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                stagger: 0.04,
                duration: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    once: true,
                },
            }
        );
    }, []);

    const handleMouseEnter = (person, event) => {
        const rect = event.target.getBoundingClientRect();
        setHoveredPerson(person);
        setHoverPosition({ x: rect.left + rect.width / 2, y: rect.bottom });
    };

    const handleMouseLeave = () => {
        setHoveredPerson(null);
    };

    // const renderWords = () => {
    //     return paragraphText.flatMap((item, idx) =>
    //         item.text.split(" ").map((word, i) => {
    //             const key = `${idx}-${i}`;
    //             const isPerson = item.highlight && item.person;

    //             return (
    //                 <span key={key} style={{ display: "inline-block" }}>
    //                     <span
    //                         className="fade-word headings-h2"
    //                         style={{
    //                             color: item.highlight ? "#FA7854" : undefined,
    //                             textDecoration: item.highlight ? "underline" : "none",
    //                             fontWeight: item.highlight ? 600 : 400,
    //                             position: "relative",
    //                             cursor: isPerson ? "pointer" : "default",
    //                         }}
    //                         onMouseEnter={isPerson ? (e) => handleMouseEnter(item.person, e) : undefined}
    //                         onMouseLeave={isPerson ? handleMouseLeave : undefined}
    //                     >
    //                         {word}
    //                     </span>
    //                     {/* Add space as a non-breaking space */}
    //                     <span>&nbsp;</span>
    //                 </span>
    //             );
    //         })
    //     );
    // };
    const renderWords = () => {
        return paragraphText.flatMap((item, idx) => {
            const isPerson = item.highlight && item.person;

            if (isPerson) {
                // Keep the full name as one underlined 
                return (
                    <span key={idx} style={{ display: "inline", whiteSpace: "normal" }}>
                        <Link
                            className="fade-word headings-h2 naf-words"
                            sx={{
                                textDecoration: "underline",
                                textDecorationColor: "#FA7854",
                                color: "#FA7854",
                                fontWeight: 600,
                                textUnderlineOffset: "4px",
                                cursor: "pointer",
                                overflowWrap: "break-word",
                                wordBreak: "break-word",
                                whiteSpace: "normal",
                                display: "inline",
                            }}
                            onMouseEnter={(e) => handleMouseEnter(item.person, e)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item.text}
                        </Link>
                        <span>&nbsp;</span>
                    </span>
                );
            } else {
                // Split regular text into words
                return item.text.split(" ").map((word, i) => {
                    const key = `${idx}-${i}`;
                    return (
                        <span key={key} style={{ display: "inline", whiteSpace: "normal" }}>
                            <span className="fade-word headings-h2 naf-words">{word}</span>
                            <span>&nbsp;</span>
                        </span>
                    );
                });
            }
        });
    };

    const getVideoForPerson = (person) => {
        switch (person) {
            case "odette":
                return OdetteVideo;
            case "abdelilah":
                return AbdelilahVideo;
            case "sai":
                return SaiVideo;
            default:
                return null;
        }
    };

    return (
        <Box
            className=""
            ref={ref}
            sx={{
                mt: { xs: 3, sm: 4, md: 5 },
                display: "flex",
                justifyContent: "center",
                position: "relative",
                width: "100%",
                minWidth: 0,
                overflowWrap: "break-word",
            }}
        >
            <Box
                className="headings-h2 naf-words"
                sx={{
                    width: { xs: "100%", sm: '80%', md: "90%", lg: "70%" },
                    minWidth: 0,
                    maxWidth: "100%",
                    boxSizing: "border-box",
                    color: "#C2C2C4",
                    position: "relative",
                    textAlign: "center",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    hyphens: "auto",
                    WebkitHyphens: "auto",
                    display: "block",
                    lineHeight: { xs: 1.4, sm: 1.5 },
                    padding: { xs: "0 16px", sm: "0" },
                }}
            >
                {renderWords()}

                {/* Hover Image */}
                {hoveredPerson && (
                    <Box
                        sx={{
                            position: "fixed",
                            top: hoverPosition.y + 10,
                            left: hoverPosition.x,
                            transform: "translateX(-50%)",
                            zIndex: 1000,
                            transition: "opacity 0.3s",
                            pointerEvents: "none",
                            opacity: hoveredPerson ? 1 : 0,
                            borderRadius: '12px',
                            WebkitTransform: "translateZ(0)",
                            overflow: "hidden",
                            width: { xs: "120px", sm: "140px", md: "400px" },
                            height: { xs: "120px", sm: "140px", md: "400px" },
                        }}
                    >
                        <video
                            src={getVideoForPerson(hoveredPerson)}
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                    </Box>
                )}
            </Box>
        </Box >
    );
};

export default FadeInParagraph;