import React, { useEffect, useState } from "react";
import Matter from "matter-js";
import image1 from '../../assets/Solutions/ball.png';
import image2 from '../../assets/Solutions/ball (1).png';
import image3 from '../../assets/Solutions/ball (2).png';
import image4 from '../../assets/Solutions/ball (3).png';
import image5 from '../../assets/Solutions/ball (4).png';
import image6 from '../../assets/Solutions/ball (5).png';
import AnimateButton from "../../Components/CommonComponents/AnimateButton";
import { Box, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";

const ReadySection = () => {
    const { t } = useTranslation();
    const { lang } = useParams(); 
    const [containerSize, setContainerSize] = useState({
        width: window.innerWidth * 0.9,
        height: window.innerHeight * 0.9,
    });

    useEffect(() => {
        
            window.scrollTo(0, 0);
        
        
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            // Apply different height ratio for small screens
            const heightRatio = screenWidth < 480 ? 0.5 : 0.9;

            setContainerSize({
                width: screenWidth * 0.9,
                height: screenHeight * heightRatio,
            });
        };

        handleResize(); // Initialize on mount

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    useEffect(() => {
        const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

        const engine = Engine.create();
        const { world } = engine;

        const sectionWidth = containerSize.width;
        const sectionHeight = containerSize.height;

        const render = Render.create({
            element: document.getElementById("physics-container"),
            engine: engine,
            options: {
                width: sectionWidth,
                height: sectionHeight,
                wireframes: false,
                background: "transparent",
            },
        });

        let mouseConstraint;
        if (sectionWidth > 0) {
            const mouse = Mouse.create(render.canvas);
            const mouseConstraint = MouseConstraint.create(engine, {
              mouse: mouse,
              constraint: {
                stiffness: 0.2,
                render: {
                  visible: false,
                },
              }
            });
            
            // Make sure it only listens to your canvas container
            mouseConstraint.mouse.element = render.canvas;
            World.add(engine.world, mouseConstraint);            
        }

        // Boundaries adjusted to the new height
        // const ground = Bodies.rectangle(sectionWidth / 2, sectionHeight + 20, sectionWidth, 40, { isStatic: true, render: { fillStyle: "transparent", strokeStyle: "transparent" } });
        // const leftWall = Bodies.rectangle(-10, sectionHeight / 2, 40, sectionHeight + 40, { isStatic: true, render: { fillStyle: "transparent", strokeStyle: "transparent" } });
        // const rightWall = Bodies.rectangle(sectionWidth + 10, sectionHeight / 2, 40, sectionHeight + 40, { isStatic: true, render: { fillStyle: "transparent", strokeStyle: "transparent" } });
        // const ceiling = Bodies.rectangle(sectionWidth / 2, -20, sectionWidth, 40, { isStatic: true, render: { fillStyle: "transparent", strokeStyle: "transparent" } });

        const wallThickness = 100;

        const ground = Bodies.rectangle(
            sectionWidth / 2,
            sectionHeight + wallThickness / 2,
            sectionWidth,
            wallThickness,
            { isStatic: true, render: { fillStyle: "transparent" } }
        );

        const ceiling = Bodies.rectangle(
            sectionWidth / 2,
            -wallThickness / 2,
            sectionWidth,
            wallThickness,
            { isStatic: true, render: { fillStyle: "transparent" } }
        );

        const leftWall = Bodies.rectangle(
            -wallThickness / 2,
            sectionHeight / 2,
            wallThickness,
            sectionHeight,
            { isStatic: true, render: { fillStyle: "transparent" } }
        );

        const rightWall = Bodies.rectangle(
            sectionWidth + wallThickness / 2,
            sectionHeight / 2,
            wallThickness,
            sectionHeight,
            { isStatic: true, render: { fillStyle: "transparent" } }
        );

        World.add(world, [ground, leftWall, rightWall, ceiling]);

        const preloadImages = async (imageUrls) => {
            const images = [];
            for (const url of imageUrls) {
                const img = new Image();
                img.src = url;
                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
                });
                images.push(img);
            }
            return images;
        };

        // const createMixedImages = async () => {
        //     const imageUrls = [image1, image2, image3, image3, image4, image5, image6];

        //     try {
        //         const loadedImages = await preloadImages(imageUrls);
        //         const images = [];
        //         for (let i = 0; i < 7; i++) {
        //             const maxSize = Math.min(200, sectionWidth * 0.2); // Responsive max size
        //             const minSize = Math.min(120, sectionWidth * 0.1); // Responsive min size
        //             const size = Math.random() * (maxSize - minSize) + minSize;
        //             const x = Math.random() * (sectionWidth - size) + (size / 2);
        //             const y = Math.random() * (sectionHeight - size) + (size / 2);
        //             const randomImage = loadedImages[Math.floor(Math.random() * loadedImages.length)];

        //             // Changed from Bodies.rectangle to Bodies.circle
        //             images.push(
        //                 Bodies.circle(x, y, size / 2, {
        //                     restitution: 0.2, // 🔧 Less bounce
        //                     friction: 0.05,   // 🔧 Slight ground friction
        //                     frictionAir: 0.02, // 🔧 Air resistance to slow things down
        //                     render: {
        //                         sprite: {
        //                             texture: randomImage.src,
        //                             xScale: size / randomImage.width,
        //                             yScale: size / randomImage.height,
        //                         },
        //                     },
        //                 })
        //             );
        //         }
        //         World.add(world, images);
        //     } catch (error) {
        //         console.error("Failed to load images:", error);
        //     }
        // };

        const createMixedImages = async () => {
            const imageUrls = [image1, image2, image3, image3, image4, image5, image6];

            try {
                const loadedImages = await preloadImages(imageUrls);
                const images = [];

                const fixedSize = Math.min(200, sectionWidth * 0.12); // Fixed size

                for (let i = 0; i < 7; i++) {
                    const x = Math.random() * (sectionWidth - fixedSize) + (fixedSize / 2);
                    const y = Math.random() * (sectionHeight - fixedSize) + (fixedSize / 2);
                    const randomImage = loadedImages[Math.floor(Math.random() * loadedImages.length)];

                    images.push(
                        Bodies.circle(x, y, fixedSize / 2, {
                            restitution: 0.2,
                            friction: 0.05,
                            frictionAir: 0.02,
                            render: {
                                sprite: {
                                    texture: randomImage.src,
                                    xScale: fixedSize / randomImage.width,
                                    yScale: fixedSize / randomImage.height,
                                },
                            },
                        })
                    );
                }

                World.add(world, images);
            } catch (error) {
                console.error("Failed to load images:", error);
            }
        };

        createMixedImages();

        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);

        return () => {
            Render.stop(render);
            Runner.stop(runner);
            World.clear(world, false);
            Engine.clear(engine);
            render.canvas.remove();
        };
    }, [containerSize]);

    return (
        <Box className='section-container' sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: { xs: '75px', sm: '150px', md: "200px" }
        }}>
            <div style={{ position: 'relative' }}>
                {/* Adjusted height in inline styles */}
                <div
                    id="physics-container"
                    style={{
                        width: `${containerSize.width}px`,
                        height: `${containerSize.height}px`,
                        margin: "0 auto",
                        border: "1px solid",
                        borderColor: "#525252",
                        borderRadius: "24px",
                        touchAction: "manipulation", // ✅ allows scrolling while still detecting dragging
                        position: 'relative',
                    }}
                ></div>
                <Typography
                    variant="h2"
                    className="headings-h2"
                    sx={{
                        position: "absolute",
                        width: { xs: "90%", md: "80%", xl: "70%" },
                        top: { xs: "5%", sm: "15%", md: "10%" },
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                    }}
                >
                    {t('software.ReadyNAFCloud')}
                </Typography>

                <Box
                    className="centralButton"
                    sx={{
                        position: "absolute",
                        width: { xs: "80px", md: "120px" },
                        height: { xs: "80px", md: "120px" },
                        top: { xs: "40%", md: "35%" },
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1,
                    }}
                >
                    <AnimateButton text1={t('footer.footergetIn')} text2={t('footer.footertouch')} route={`/${lang}/contact`} />
                </Box>
            </div>
        </Box>
    );
};

export default ReadySection;