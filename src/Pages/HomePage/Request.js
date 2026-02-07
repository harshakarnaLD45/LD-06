import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimateButton from "../../Components/CommonComponents/AnimateButton";
import ScrollMaskText from "../../Components/CommonComponents/ScrollMaskText";

gsap.registerPlugin(ScrollTrigger);

const solutionCards = [
    {
        id: "01",
        title: "UX/UI Design",
        description:
            "Manage your vending machines globally, adjust pricing on the fly, and track key performance indicators—all from a single, user-friendly dashboard.",
        rotation: -2.5,
    },
    {
        id: "02",
        title: "Graphic Design",
        description:
            "Manage your vending machines globally, adjust pricing on the fly, and track key performance indicators—all from a single, user-friendly dashboard.",
        rotation: 2.5,
    },
    {
        id: "03",
        title: "End to End Development",
        description:
            "Manage your vending machines globally, adjust pricing on the fly, and track key performance indicators—all from a single, user-friendly dashboard.",
        rotation: -2.5,
    },
];

const Request = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
     
        cardRefs.current.forEach((card, i) => {
            gsap.fromTo(
                card,
                { y: 0, opacity: i === 0 ? 1 : 1, zIndex: i },
                {
                    y: (index) => (index === 0 ? 0 : -index * 50),
                    opacity: 1,
                    // zIndex: solutionCards.length - i, 
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top top",
                        end: "top 20%",
                        scrub: true,

                    },
                }
            );
        });
    }, []);

    return (
        <Container className="section-container" sx={{ position: "relative" }}>
            {/* <Typography variant='h2' className='headings-h2' sx={{ color: '#FCFCFC', textAlign: 'center' }}>
                You Request.<br />
                We Build!
            </Typography> */}
            <ScrollMaskText text="You Request." textAlignment='center' textDisplay='block' />
            <ScrollMaskText text="We Build!" textAlignment='center' textDisplay='block' />
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6, mt: 3 }}>
                <AnimateButton />
            </Box>

            <Box sx={{ position: "relative" }}  className="section-container" >
                {solutionCards.map((card, i) => (
                    <Card
                        key={card.id}
                        ref={(el) => (cardRefs.current[i] = el)}
                        sx={{
                            position: "sticky",
                            top: `calc(40vh + ${i * 25}px)`,
                            "@media (min-width: 1300px)": {
                                top: `calc(10vh + ${i * 20}px)`,
                            },
                            "@media (max-width: 960px)": {
                                top: `calc(30vh + ${i * 20}px)`,
                            },
                            "@media (max-width: 600px)": {
                                top: `calc(20vh + ${i * 15}px)`,
                            },
                            width: "100%",
                            maxWidth: { xs: "90%", md: "1206px" },
                            height: { xs: "auto", md: "407px" },
                            mx: "auto",
                            backgroundColor: "#F4F4F4",
                            borderRadius: 2,
                            overflow: "hidden",
                            transform: {
                                // xs: "rotate(0deg)",
                                xs:`rotate(${card.rotation}deg)`,
                                md: `rotate(${card.rotation}deg)`,
                            },
                            p: { xs: 2, md: 0 },
                            paddingTop:{xs:'2rem',md:'0rem'}
                            // zIndex: solutionCards.length - i, 
                        }}
                    >
                        <CardContent
                            sx={{
                                p: 0,
                                height: "100%",
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Box sx={{display:"flex",flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Typography
                                className="headings-h3"
                                variant="h3"
                                sx={{
                                    position: { xs: "static", md: "absolute" },
                                    top: { md: "57px" },
                                    left: { md: "50px" },
                                    color: "#1A1A1A",
                                    // whiteSpace: "nowrap",
                                    mb: { xs: 2, md: 0 },
                                }}
                            >
                                {card.title}
                            </Typography>
                            <Typography
                                className="bodyRegularText4"
                                sx={{
                                    position: { xs: "static", md: "absolute" },
                                    top: { md: "68px" },
                                    right: { md: "50px" },
                                    color: "#1A1A1A",
                                    whiteSpace: "nowrap",
                                    mb: { xs: 2, md: 0 },
                                }}
                            >
                                {card.id}
                            </Typography></Box>
                            <Typography
                                className="bodyRegularText3"
                                sx={{
                                    position: { xs: "static", md: "absolute" },
                                    width: { xs: "100%", sm: "545px" },
                                    top: { md: "234px" },
                                    left: { md: "50px" },
                                    color: "#444444",
                                    textAlign: "left",
                                    paddingTop:{xs:'2rem',md:'0rem'}
                                }}
                            >
                                {card.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Container>
    );
};

export default Request;