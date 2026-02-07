import { Box, Typography } from "@mui/material";
import React,{useEffect} from "react";
import AnimateButton from "../../Components/CommonComponents/AnimateButton";
import FadeInParagraph from "./FadeInParagraph";
import NafIcon from '../../assets/Home/naf-icon.svg'
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const bannerItems = Array(8).fill({
  text: "NAF GERMANY",
  icon: NafIcon,
});

const NafParagrap = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

 

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        '& .nafgermany': {
          whiteSpace: { xs: 'normal', md: 'nowrap' },
        },
        '& .nafbighead': {
          wordWrap: 'break-word',
        },
        '& .viewmore': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      {/* Top banner section - mareq effect */}
      <Box  className="section-container"
        sx={{
          position: "relative",p:0,
          height: { xs: "200px", sm: "280px", md: "351px" },
          borderRadius: "2.79px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "150px", sm: "200px", md: "231px" },
            top: { xs: "30px", sm: "40px", md: "60px" },
          }}
        >
          {/* First banner strip */}
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: { xs: "40px", sm: "50px", md: "64px" },
              top: { xs: "50px", sm: "60px", md: "84px" },
              backgroundColor: "#7FEE64",
              transform: "rotate(-2.86deg)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                gap: { xs: "20px", sm: "40px", md: "57.13px" },
                padding: { xs: "5px 0", md: "10px 0" },
                animation: "scrollBanner 20s linear infinite",
              }}
            >
              {bannerItems.map((item, index) => (
                <Box
                  key={`banner1-${index}`}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: "8px", md: "13.93px" },
                    padding: { xs: "8px", md: "13.93px" },
                  }}
                >
                  <Typography
                    className="bodyRegularText4"
                    sx={{
                      color: "#101010",
                      letterSpacing: { xs: "1px", md: "2.09px" },
                      width: { xs: "120px", sm: "180px", md: "217.36px" },
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Box
                    sx={{
                      transform: "rotate(2.86deg)",
                      width: { xs: "20px", sm: "25px", md: "30px" },
                      height: { xs: "20px", sm: "25px", md: "30px" },
                    }}
                  >
                    <img src={item.icon} alt="Custom Icon" style={{ width: "100%", height: "100%" }} />
                  </Box>
                </Box>
              ))}
              {bannerItems.map((item, index) => (
                <Box
                  key={`banner1-dup-${index}`}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: "8px", md: "13.93px" },
                    padding: { xs: "8px", md: "13.93px" },
                  }}
                >
                  <Typography
                    className="bodyRegularText4"
                    sx={{
                      color: "#101010",
                      letterSpacing: { xs: "1px", md: "2.09px" },
                      width: { xs: "120px", sm: "180px", md: "217.36px" },
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Box
                    sx={{
                      transform: "rotate(2.86deg)",
                      width: { xs: "20px", sm: "25px", md: "30px" },
                      height: { xs: "20px", sm: "25px", md: "30px" },
                    }}
                  >
                    <img src={item.icon} alt="Custom Icon" style={{ width: "100%", height: "100%" }} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Second banner strip */}
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: { xs: "40px", sm: "50px", md: "64px" },
              top: { xs: "50px", sm: "60px", md: "84px" },
              backgroundColor: "#7FEE64",
              transform: "rotate(3.98deg)",
              boxShadow: "0px 4px 11px 5px rgba(0, 0, 0, 0.15)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                gap: { xs: "20px", sm: "40px", md: "57.13px" },
                padding: { xs: "5px 0", md: "10px 0" },
                animation: "scrollBanner 20s linear infinite reverse",
              }}
            >
              {bannerItems.map((item, index) => (
                <Box
                  key={`banner2-${index}`}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: "8px", md: "13.93px" },
                    padding: { xs: "8px", md: "13.93px" },
                  }}
                >
                  <Typography
                    className="bodyRegularText4"
                    sx={{
                      color: "#101010",
                      letterSpacing: { xs: "1px", md: "2.09px" },
                      width: { xs: "120px", sm: "180px", md: "217.36px" },
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Box
                    sx={{
                      transform: "rotate(-3.98deg)",
                      width: { xs: "20px", sm: "25px", md: "30px" },
                      height: { xs: "20px", sm: "25px", md: "30px" },
                    }}
                  >
                    <img src={item.icon} alt="Custom Icon" style={{ width: "100%", height: "100%" }} />
                  </Box>
                </Box>
              ))}
              {bannerItems.map((item, index) => (
                <Box
                  key={`banner2-dup-${index}`}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: "8px", md: "13.93px" },
                    padding: { xs: "8px", md: "13.93px" },
                  }}
                >
                  <Typography
                    className="bodyRegularText4"
                    sx={{
                      color: "#101010",
                      letterSpacing: { xs: "1px", md: "2.09px" },
                      width: { xs: "120px", sm: "180px", md: "217.36px" },
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Box
                    sx={{
                      transform: "rotate(-3.98deg)",
                      width: { xs: "20px", sm: "25px", md: "30px" },
                      height: { xs: "20px", sm: "25px", md: "30px" },
                    }}
                  >
                    <img src={item.icon} alt="Custom Icon" style={{ width: "100%", height: "100%" }} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Main content section */}
      <FadeInParagraph />
      <Box sx={{
        display: 'flex', justifyContent: 'center', mb: {
          xs: 0,
          sm: 4,
          md: 6,
        }, mt: 3
      }}>
        <AnimateButton text1={t('AnimateBtn.learn')} text2={t('AnimateBtn.more')} route={`/${lang}/company/about`} />
      </Box>

      <Box
        sx={{
          "@keyframes scrollBanner": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      />
    </Box>
  );
};

export default NafParagrap;