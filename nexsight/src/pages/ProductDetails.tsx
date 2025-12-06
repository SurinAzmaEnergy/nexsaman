import { useState } from "react";
import { useParams } from "react-router";
import {
  Box,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  IconButton,
} from "@mui/material";
import {
  FileDownloadOutlined,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { CustomButton } from "../components";
import SwipeableViews from "react-swipeable-views";

const ProductDetails = () => {
  const { id } = useParams();
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => Math.min(prev + 1, 2));
  const prevSlide = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <Box
      sx={{
        height: isMdDown ? "auto" : "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Toolbar />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {id === "0" && (
          <Card
            sx={{
              p: 2,
              display: "flex",
              flexDirection: isMdDown ? "column-reverse" : "row",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              gap: 2,
            }}
          >
            <Box >
              <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
                مدل AIB-TS2-08
              </Typography>
              <Typography variant="body2">
                ویژگی‌های کلیدی:
                <br />
                - بیش از ۵۰ اپلیکیشن هوش مصنوعی قابل اجرا در محل (On-Premises)
                <br />
                - اجرای چند الگوریتم هوش مصنوعی به‌صورت هم‌زمان روی یک کانال
                <br />
                - تحلیل پیشرفته رفتار انسانی و شناسایی الگوهای حرکتی
                <br />
                - پشتیبانی از حداکثر ۴ کانال ویدئویی مستقل
                <br />
                - طراحی مقاوم با عملکرد پایدار در بازه دمایی گسترده -30°C تا
                ‎+70°C (بدون نیاز به فن)
                <br />
                - سازگار با انواع پروتکل‌ها و سامانه‌های مدیریت ویدئو (VMS)
                <br />
                - مشاهده هشدارها از طریق اپلیکیشن موبایل مبتنی بر P2P
                <br />
                - قابلیت ضبط داخلی با استفاده از حافظه NVMe SSD
                <br />
                - داشبورد ابری (Cloud-based) برای مانیتورینگ و تحلیل پیشرفته
                (اختیاری)
                <br />
                - پشتیبانی از Hybrid AI Boost Mode برای افزایش توان پردازش
                <br />- سازگار با استاندارد NDAA جهت رعایت الزامات امنیتی
                بین‌المللی
              </Typography>

              <CustomButton
                sx={{ mt: 2 }}
                variant="contained"
                size="small"
                color="secondary"
                disableElevation
                component="a"
                href="/catalog.pdf"
                rightIcon={FileDownloadOutlined}
              >
                دانلود کاتالوگ
              </CustomButton>
            </Box>
            <Box
              sx={{
                width: isMdDown ? "100%" : "400px",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                border: "1px solid gray",
                borderRadius: "15px"
              }}
            >
              <SwipeableViews
                index={index}
                onChangeIndex={setIndex}
                enableMouseEvents
                axis="x-reverse"
              >
                <img
                  src="/assets/products/hardware0.png"
                  style={{
                    width: "100%",
                    display: "block",
                    margin: "auto auto",
                  }}
                />
                <img
                  src="/assets/products/hardware02.png"
                  style={{
                    width: "100%",
                    display: "block",
                    margin: "auto auto",
                  }}
                />
                <img
                  src="/assets/products/hardware03.png"
                  style={{
                    width: "100%",
                    display: "block",
                    margin: "auto auto",
                  }}
                />
                <img
                  src="/assets/products/hardware04.png"
                  style={{
                    width: "100%",
                    display: "block",
                    margin: "auto auto",
                  }}
                />
              </SwipeableViews>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 5,
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
            </Box>
          </Card>
        )}


        {id === "1" && (
          <Card
            sx={{
              p: 2,
              display: "flex",
              flexDirection: isMdDown ? "column-reverse" : "row",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              gap: 2,
            }}
          >
            <Box >
              <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
                مدل AIBL-TS2-08
              </Typography>
              <Typography variant="body2">
                ویژگی‌های کلیدی:
                <br />
                - بیش از ۵۰ اپلیکیشن هوش مصنوعی قابل اجرا در محل (On-Premises)
                <br />
                - اجرای چند الگوریتم هوش مصنوعی به‌صورت هم‌زمان روی یک کانال
                <br />
                - تحلیل پیشرفته رفتار انسانی و شناسایی الگوهای حرکتی
                <br />
                - پشتیبانی از حداکثر ۴ کانال ویدئویی مستقل
                <br />
                - طراحی مقاوم با عملکرد پایدار در بازه دمایی گسترده -30°C تا
                ‎+70°C (بدون نیاز به فن)
                <br />
                - سازگار با انواع پروتکل‌ها و سامانه‌های مدیریت ویدئو (VMS)
                <br />
                - مشاهده هشدارها از طریق اپلیکیشن موبایل مبتنی بر P2P
                <br />
                - قابلیت ضبط داخلی با استفاده از حافظه NVMe SSD
                <br />
                - داشبورد ابری (Cloud-based) برای مانیتورینگ و تحلیل پیشرفته
                (اختیاری)
                <br />
                - پشتیبانی از Hybrid AI Boost Mode برای افزایش توان پردازش
                <br />- سازگار با استاندارد NDAA جهت رعایت الزامات امنیتی
                بین‌المللی
              </Typography>

              <CustomButton
                sx={{ mt: 2 }}
                variant="contained"
                size="small"
                color="secondary"
                disableElevation
                component="a"
                href="/catalog.pdf"
                rightIcon={FileDownloadOutlined}
              >
                دانلود کاتالوگ
              </CustomButton>
            </Box>
            <Box
              sx={{
                width: isMdDown ? "100%" : "400px",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                border: "1px solid gray",
                borderRadius: "15px"
              }}
            >
              <SwipeableViews
                index={index}
                onChangeIndex={setIndex}
                enableMouseEvents
                axis="x-reverse"
              >
                <img
                  src="/assets/products/hardware1.png"
                  style={{
                    width: "100%",
                    display: "block",
                    margin: "auto auto",
                  }}
                />
                <img
                  src="/assets/products/hardware13.png"
                  style={{
                    width: "100%",
                    display: "block",
                    margin: "auto auto",
                  }}
                />
                <img
                  src="/assets/products/hardware14.png"
                  style={{
                    width: "100%",
                    display: "block",
                    margin: "auto auto",
                  }}
                />
              </SwipeableViews>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 5,
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
            </Box>
          </Card>
        )}

        {id === "2" && (
          <Card
            sx={{
              p: 2,
              display: "flex",
              flexDirection: isMdDown ? "column-reverse" : "row",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              gap: 2,
            }}
          >
            <Box >
              <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
                مدل AIB-TE1-04
              </Typography>
              <Typography variant="body2">
                ویژگی‌های کلیدی:
                <br />
                - بیش از ۵۰ اپلیکیشن هوش مصنوعی قابل اجرا در محل (On-Premises)
                <br />
                - اجرای چند الگوریتم هوش مصنوعی به‌صورت هم‌زمان روی یک کانال
                <br />
                - تحلیل پیشرفته رفتار انسانی و شناسایی الگوهای حرکتی
                <br />
                - پشتیبانی از حداکثر ۴ کانال ویدئویی مستقل
                <br />
                - طراحی مقاوم با عملکرد پایدار در بازه دمایی گسترده -30°C تا
                ‎+70°C (بدون نیاز به فن)
                <br />
                - سازگار با انواع پروتکل‌ها و سامانه‌های مدیریت ویدئو (VMS)
                <br />
                - مشاهده هشدارها از طریق اپلیکیشن موبایل مبتنی بر P2P
                <br />
                - قابلیت ضبط داخلی با استفاده از حافظه NVMe SSD
                <br />
                - داشبورد ابری (Cloud-based) برای مانیتورینگ و تحلیل پیشرفته
                (اختیاری)
                <br />
                - پشتیبانی از Hybrid AI Boost Mode برای افزایش توان پردازش
                <br />- سازگار با استاندارد NDAA جهت رعایت الزامات امنیتی
                بین‌المللی
              </Typography>

              <CustomButton
                sx={{ mt: 2 }}
                variant="contained"
                size="small"
                color="secondary"
                disableElevation
                component="a"
                href="/catalog.pdf"
                rightIcon={FileDownloadOutlined}
              >
                دانلود کاتالوگ
              </CustomButton>
            </Box>
            <Box
              sx={{
                width: isMdDown ? "100%" : "400px",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                border: "1px solid gray",
                borderRadius: "15px"
              }}
            >
              <SwipeableViews
                index={index}
                onChangeIndex={setIndex}
                enableMouseEvents
                axis="x-reverse"
              >
                <img
                  src="/assets/products/hardware2.png"
                  style={{
                    width: "100%",
                    display: "block",
                    margin: "auto auto",
                  }}
                />
                <img
                  src="/assets/products/hardware23.png"
                  style={{
                    width: "100%",
                    display: "block",
                    margin: "auto auto",
                  }}
                />
                <img
                  src="/assets/products/hardware24.png"
                  style={{
                    width: "100%",
                    display: "block",
                    margin: "auto auto",
                  }}
                />
              </SwipeableViews>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 5,
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
            </Box>
          </Card>
        )}

      </Box>
      <Toolbar variant="dense" />
    </Box>
  );
};

export default ProductDetails;
