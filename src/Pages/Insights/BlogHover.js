import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import whatarrow from "../../assets/Home/Blogs/Arrow 2.svg";
import "./Insights.css";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const BlogHover = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const blogRefs = useRef([]);
  const { t } = useTranslation();

  useEffect(() => {
      
     window.scrollTo(0, 0);
    
    
    if (!blogPosts.length) return;

    const cleanupFns = [];

    blogRefs.current.forEach((blog, index) => {
      if (!blog) return;

      const date = blog.querySelector(".date");
      const arrow = blog.querySelector(".arrowbig");
      const image = blog.querySelector(".blog-image");

      if (window.innerWidth >= 1024) {
        gsap.set(image, { opacity: 0, scale: 1, immediateRender: true });
        gsap.set(arrow, { x: 0 });
        gsap.set(date, { x: 0 });

        const tl = gsap.timeline({ paused: true })
          .to(date, { x: 20, duration: 0.3, ease: "power2.out" })
          .to(arrow, { x: -30, duration: 0.3, ease: "power2.out" }, 0)
          .to(image, { opacity: 1, scale: 1.2, duration: 0.3, ease: "power2.out" }, 0);

        const handleMouseEnter = () => tl.play();
        const handleMouseLeave = () => {
          tl.reverse().then(() => {
            gsap.set(image, { opacity: 0, scale: 1 });
          });
        };

        blog.addEventListener("mouseenter", handleMouseEnter);
        blog.addEventListener("mouseleave", handleMouseLeave);

        cleanupFns.push(() => {
          blog.removeEventListener("mouseenter", handleMouseEnter);
          blog.removeEventListener("mouseleave", handleMouseLeave);
          tl.kill();
        });
      }
    });

    return () => {
      cleanupFns.forEach(fn => fn());
    };
  }, [blogPosts]);


  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch('https://blog.vendinaf.com/de/rss.xml');
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'application/xml');
        const items = Array.from(xml.querySelectorAll('item'));

        const blogs = items.slice(0, 3).map((item, i) => {
          const title = item.querySelector('title')?.textContent.trim() || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          const date = pubDate ? new Date(pubDate).toLocaleDateString('de-DE') : '';
          const contentEncoded = item.getElementsByTagName('content:encoded')[0]?.textContent || '';
          const doc = new DOMParser().parseFromString(contentEncoded, 'text/html');
          const imgEl = doc.querySelector('img');
          const imageUrl = imgEl?.src || '';
          const link = item.querySelector('link')?.textContent.trim() || '';
          return { id: i + 1, title, date, imageUrl, link };
        });

        setBlogPosts(blogs);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      }
    };

    fetchRSS();
  }, []);

  const handleBlogClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      {/* Blog Posts Mapping */}
      {blogPosts.map((post, index) => (
        <Box
          key={post.id}
          ref={el => blogRefs.current[index] = el}

          sx={{
            width: '100%',
            position: "relative",
          }}
          onClick={() => handleBlogClick(post.link)}
        >
          <Divider sx={{ borderColor: "#6F6F6F", zIndex: '-100' }} />
          <Box className="blog-main-container"
            sx={{
              py: 1.5,
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-between",
              alignItems: "flex-start",
              position: "relative",
              minHeight: '250px',
              cursor: 'pointer',
              gap: 3
            }}
          >
            {/* date */}
            <Box className="blog-items blog-date" sx={{ marginRight: '30px' }}>
              <Typography className="bodyRegularText4 date" sx={{ color: "#C2C2C4", whiteSpace: 'nowrap' }}>
                {post.date}
              </Typography>
            </Box>
            {/* image */}
            <Box className="blog-img-sec" sx={{
              margin: "0 60px", position: 'relative', minWidth: "20%", height: "100%", display: 'flex',
              alignItems: 'center', justifyContent: 'center'
            }}>
              <img
                style={{
                  borderRadius: '10px',
                  width: '100%',
                  height: '270px',
                  objectFit: 'cover',
                  zIndex: "100",
                }}
                src={post.imageUrl}
                alt={post.title}
                className="blog-image bigimage"
              />
            </Box>

            <Box className="blog-items blog-title-sec" sx={{ ml: 3, width: "60%", }}>
              <Typography className="bodyRegularText4 blog-mobile-date" sx={{ color: "#C2C2C4", display: 'none' }}>
                {post.date}
              </Typography>
              <Typography
                className="bodyMediumText1 whatsmiddletext bigtitle"
                sx={{
                  color: "#FCFCFC", cursor: 'pointer !important'
                }}
              >
                {post.title}
              </Typography>
              <Typography className="bodyRegularText4" sx={{ color: '#444444' }}>
                {t('insights.Blog')}

              </Typography>

            </Box>
            <Box className="blog-items blog-green-arrow" sx={{ ml: '30px', width: "8%" }}>
              <Box
                component="img"
                src={whatarrow}
                onClick={() => handleBlogClick(index)}
                alt="Arrow Icon"
                className="arrow arrowbig title-arrow"
                sx={{
                  display: 'flex',
                  justifySelf: 'flex-end',
                  width: '28px',
                  height: 28,
                  borderRadius: '6px',
                }}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default BlogHover;