import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import React from "react";
import { useTranslation } from "react-i18next";

import Award1 from "../../../assets/About/Awards/Award1.jpg";
import Award2 from "../../../assets/About/Awards/Award2.jpg";
import Award3 from "../../../assets/About/Awards/Award3.jpg";
import Award4 from "../../../assets/About/Awards/Award4.jpg";
import Award5 from "../../../assets/About/Awards/Award5.jpg";
import Record1 from "../../../assets/About/NAF-about-image (17).png";

import Award16 from "../../../assets/About/NAF-about-image (16).png";
import Award18 from "../../../assets/About/Awards/NAF-about-image (18).png";
import Award19 from "../../../assets/About/Awards/NAF-about-image (19).png";
import Award20 from "../../../assets/About/Awards/NAF-about-image (20).png";
import Award21 from "../../../assets/About/Awards/NAF-about-image (21).png";
import Award22 from "../../../assets/About/Awards/NAF-about-image (22).png";
import Award23 from "../../../assets/About/Awards/NAF-about-image (23).png";
import Award24 from "../../../assets/About/Awards/NAF-about-image (24).png";


import ArrowButton from "../../../Components/CommonComponents/ArrowButton";

const AwardCard = ({ isFirst, title, image, link, bgColor,fit, customSize,noPadding }) => {

    {/* const isYouTube =
        link &&
        (link.includes("youtube.com") || link.includes("youtu.be"));

    const getEmbedUrl = (url) => {
        if (!url) return null;

        if (url.includes("watch?v=")) {
            return url.replace("watch?v=", "embed/");
        }

        if (url.includes("youtu.be")) {
            return url.replace("youtu.be/", "youtube.com/embed/");
        }

        // If already embed URL
        return url;
    }; */}

    //const embedUrl = isYouTube ? getEmbedUrl(link) : null;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "300px", sm: "350px", md: "550px" },
                pl: isFirst ? { xs: "2px", sm: "15px", md: "40px" } : 0,
            }}
        >
            {/*{isYouTube ? (
                <Box sx={wrapperStyles}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={embedUrl}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Box>
            ) : */}
            <Box
                sx={{
                    // width: { xs: "300px", sm: "350px", md: "450px" },
                    height: { xs: "200px", sm: "250px", md: "400px" },
                    borderRadius: !bgColor ? '24px' : '24px',
                    mb: 1,
                    overflow: "hidden",
                    backgroundColor: bgColor || "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                     p: (bgColor && !noPadding) ? { xs: 2, sm: 3, md: 4 } : 0,
                }}
            >
                <Box
                    component="img"
                    src={image}
                    alt={title}
                    sx={{
                        width: customSize?.width || "100%",
                        height: customSize?.height || "100%",
                        maxWidth: customSize?.width || "100%",
                        maxHeight: customSize?.height || "100%",
                        objectFit: fit || "contain",
                        borderRadius: "24px",  
                    }}
                />
            </Box>


            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'flex-start', gap: 1,  px: !bgColor ? { xs: 1,sm:1,md:0 } : 0 }}>
                <Typography variant="body2" color="#FCFCFC" className="bodyMediumText1">
                    {title}
                </Typography>

                {/* Show Arrow only when link exists AND not a YouTube embed */}
                {link && (
                    <Box onClick={() => window.open(link, "_blank")} >
                        <ArrowButton colorBg="#262626" />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

const AwardsSection = () => {
    const { t } = useTranslation();

    const awardsData = [
        {
            title: t("about.awards.award3.title"),
            image: Award3,

            bgColor: "#E5F39E",
        },
        {
            title: t("about.awards.award0.title"),
            image: Record1,
            link: "https://www.mdr.de/nachrichten/sachsen/chemnitz/freiberg/nudelautomat-essen-halsbruecke-gruene-woche-100.html",
        },
        {
            title: t("about.awards.award1.title"),
            image: Award1,
            bgColor: "#FBD63D",
        },
        {
            title: t("about.awards.award2.title"),
            image: Award2,

            bgColor: "#158BA9",
        },
        
        {
            title: t("about.awards.award4.title"),
            image: Award4,

            bgColor: "#FFA0A6",
        },
        {
            title: t("about.awards.award5.title"),
            image: Award5,
            bgColor: "#9BE3C2",
        },
        { 
            title: t("about.awards.award16.title"), 
            image: Award16,
            customSize: { width: "120%", height: "80%" },
            noPadding:true,
             
        },
        {
             title: t("about.awards.award18.title"), 
            link: 'https://www.freiepresse.de/mittelsachsen/freiberg/frischer-otto-macht-appetit-neuer-speiseautomat-in-freiberg-nimmt-seinen-dienst-auf-artikel13635242?ref=share_link', 
            image: Award18
         },
        {
             title: t("about.awards.award19.title"),
            link: 'https://www.freiepresse.de/mittelsachsen/freiberg/kulinarischer-test-in-freiberg-wie-schmeckt-das-essen-aus-den-automaten-von-new-age-of-food-artikel13571672?ref=share_link', 
            image: Award19 
        },
        { 
            title:  t("about.awards.award20.title"),
            link: 'https://www.freiepresse.de/mittelsachsen/freiberg/mittagessen-ganz-modern-unternehmerzentrum-gizef-in-freiberg-stellt-auf-automaten-um-artikel13450282?ref=share_link', 
            image: Award20 
        },
        { 
            title: t("about.awards.award21.title"),
            link: 'https://www.freiepresse.de/mittelsachsen/freiberg/innovationen-im-gasthof-halsbach-warum-ein-indischer-computerspezialist-in-marrokanisch-deutscher-kueche-mitmischt-artikel13347381?ref=share_link', 
            image: Award21 
        },
        {
             title: t("about.awards.award22.title"),
            link: 'https://nafhalsbach-my.sharepoint.com/:b:/g/personal/anitha_boppidi_naf-halsbach_de/Efb0SYHLKVNIoy-8T7ovpnEBDRTwsnKsZCfWX8uOLteeEg?e=RjPRXN', 
            image: Award22 
        },
        { 
            title: t("about.awards.award23.title"), 
            link: 'https://www.freiepresse.de/mittelsachsen/freiberg/new-age-of-food-freiberg-zeigt-wie-modern-speiseautomaten-sein-koennen-artikel13201205?ref=share_link', 
            image: Award23 
        },
        { 
            title:t("about.awards.award24.title"), 
            link: 'https://youtu.be/TtR2bxr-sbw?si=hPGsUVK9RZVOnOEw',
             image: Award24 
        },
    
        /*
        {
          title: t("about.awards.award6.title"),
          image: Award6,
          bgColor: "#EAEAEA",
        },
        {
          title: t("about.awards.award7.title"),
          image: Award7,
          bgColor: "#C6E4FF",
        },
        {
          title: t("about.awards.award8.title"),
          image: Award8,
        
          bgColor: "#FFE8B0",
        },
        */
    ];


    return (
        <Box className="section-container" sx={{ px: 0 }}>
            <Typography
                variant="h2"
                color="#FCFCFC"
                className="headings-h2"
                sx={{
                    width: { xs: "90%", sm: "90%", md: "50%" },
                    px: { xs: "15px", sm: "20px", md: "50px" },
                }}
                mb={4}
            >
                {t("about.AwardsRecognitions")}
            </Typography>

            <Box sx={{ overflow: "hidden", position: "relative" }}>
                <Swiper
                    modules={[FreeMode]}
                    spaceBetween={24}
                    slidesPerView="auto"
                    freeMode
                    style={{ padding: "0 16px" }}
                >
                    {awardsData.map((award, index) => (
                        <SwiperSlide key={index} style={{ width: "auto",}}>
                            <AwardCard
                                isFirst={index === 0}
                                title={award.title}
                                image={award.image}
                                link={award.link}
                                bgColor={award.bgColor}
                                fit={award.fit}
                                noPadding={award.noPadding}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default AwardsSection;