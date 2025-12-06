import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Security,
  Construction,
  // LocalShipping,
  Public,
  VideoCameraFrontOutlined,
} from "@mui/icons-material";
import {
  Box,
  Toolbar,
  useTheme,
  useMediaQuery,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import CustomButton from "../ui/CustomButton";
import { Link } from "react-router";

const HeroSlider = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const [index, setIndex] = useState(0);

  const totalSlides = 6;
  const nextSlide = () =>
    setIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  const prevSlide = () => setIndex((prev) => Math.max(prev - 1, 0));

  const slidesData = [
    {
      bg: "/assets/images_1.png",
      text: "راهکارهای تحلیل ویدئویی\nمبتنی بر هوش مصنوعی",
      Icon: Security,
    },
    {
      bg: "/assets/images_2.png",
      text: "امنیت و نظارت",
      Icon: VideoCameraFrontOutlined,
    },
    {
      bg: "/assets/images_3.png",
      text: "ایمنی ساخت‌وساز و لجستیک",
      Icon: Construction,
    },
    {
      bg: "/assets/images_6.png",
      text: "مدیریت ایمنی عمومی",
      Icon: Public,
    },
  ];

  return (
    <Box
      sx={{
        height: isMdDown ? "auto" : "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Toolbar />

      <SwipeableViews
        index={index}
        onChangeIndex={setIndex}
        axis="x-reverse"
        enableMouseEvents
        style={{ flexGrow: 1 }}
        containerStyle={{ height: isMdDown ? "auto" : "100%" }}
      >
        {/* Slide 1: Video */}
        <Box
          sx={{
            height: isMdDown ? "auto" : "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <video
              src="/assets/video.webm"
              autoPlay
              playsInline
              muted
              loop
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>

        {/* Slide 2: Diagram + Button */}
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Box
            component="img"
            src="/assets/hero_diagram.jpg"
            alt="diagram"
            sx={{ maxWidth: "80%", borderRadius: 2 }}
          />
          <CustomButton
            variant="contained"
            color="secondary"
            disableElevation
            component={Link}
            to="/products"
          >
            مشاهده محصولات
          </CustomButton>
        </Box>

        {/* Slides with background + icon + text */}
        {slidesData.map((slide, i) => {
          const IconComponent = slide.Icon;
          return (
            <Box
              key={i}
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundImage: `url("${slide.bg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                p: 2,
                color: "#fff",
                textAlign: "center",
              }}
            >
              <IconComponent
                sx={{
                  fontSize: { xs: 50, sm: 70, md: 90, lg: 110 },
                  mb: 2,
                  border: "2px solid #fff",
                  borderRadius: "50%",
                  padding: 1,
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  whiteSpace: "pre-line",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "1.8rem",
                    md: "2.2rem",
                    lg: "2.6rem",
                  },
                }}
              >
                {slide.text}
              </Typography>
            </Box>
          );
        })}
      </SwipeableViews>

      {/* Navigation Buttons */}
      <Box
        sx={{
          position: "absolute",
          bottom: isMdDown ? 5 : 54,
          left: 5,
          borderRadius: 2,
          padding: 0.5,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <IconButton onClick={prevSlide} sx={{ color: "#fff" }}>
          <KeyboardArrowRight />
        </IconButton>

        <IconButton onClick={nextSlide} sx={{ color: "#fff" }}>
          <KeyboardArrowLeft />
        </IconButton>
      </Box>

      {!isMdDown && <Toolbar variant="dense" />}
    </Box>
  );
};

export default HeroSlider;
