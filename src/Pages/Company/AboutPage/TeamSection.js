import React from "react";
import { LinkedInIcon } from "../../../Components/CustomIcons";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import PersonImage1 from '../../../assets/About/Odette-lamkhizni.png';
import PersonImage2 from '../../../assets/About/Abdelilah-lamkhizni.png';
import PersonImage3 from '../../../assets/About/Sri-satya-sai-kanna-dhulipudi.png';

function TeamSection() {
    const { t } = useTranslation();

    const teamMembers = [
        {
            name: "Odette Lamkhizni",
            position: "CEO",
            linkedin: "https://www.linkedin.com/in/odette-lamkhizni-42a241251/",
            image: PersonImage1,
            alt: "Odette Lamkhizni, NAF Owner - Driving Vending Innovation and Quality."
        },
        {
            name: "Abdelilah Lamkhizni",
            position: "Managing Director",
            linkedin: "https://www.linkedin.com/in/abdelilah-lamkhizni-110864291",
            image: PersonImage2,
            alt: "Abdelilah Lamkhizni, NAF Owner - Passionate about Customer Experience."
        },
        {
            name: "Sri Satya Sai Kanna Dhulipudi",
            position: "CTO",
            linkedin: "https://www.linkedin.com/in/sri-satya-sai-kanna-dhulipudi-31676617b/",
            image: PersonImage3,
            alt: "Sri Satya Sai Kanna Dhulipudi, CTO at NAF - Technical Expertise."
        }
    ];

    return (
        <section className="section-container">
            <Typography className="headings-h2" variant="h2" gutterBottom>
                {t("about.MeetTeam")}
            </Typography>

            {/* Responsive Grid */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                        md: "1fr 1fr 1fr"
                    },
                    gap: { xs: 5, md: 2 },
                    justifyItems: "center"
                }}
            >
                {teamMembers.map((member) => (
                    <Box
                        key={member.name}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%"
                        }}
                    >
                        {/* Image */}
                        <Box
                            component="img"
                            src={member.image}
                            alt={member.alt}
                            sx={{
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: 2,
                                mb: 2
                            }}
                        />

                        {/* Member Info */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                        >
                            <Box>
                                <Typography
                                    variant="body1"
                                    color="#FCFCFC"
                                    className="bodyMediumText1"
                                >
                                    {member.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="#C2C2C4"
                                    className="bodyMediumText3"
                                >
                                    {member.position}
                                </Typography>
                            </Box>

                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon />
                            </a>
                        </Box>
                    </Box>
                ))}
            </Box>
        </section>
    );
}

export default TeamSection;
