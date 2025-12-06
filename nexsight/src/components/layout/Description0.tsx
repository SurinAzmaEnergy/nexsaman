import {
  Container,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Toolbar,
} from "@mui/material";

const Description0 = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const features = [
    "بیش از 50 برنامه هوش مصنوعی نظارتی (قابل اجرا به‌صورت On-premises)",
    "اجرای چندین الگوریتم هوش مصنوعی به‌صورت هم‌زمان روی یک کانال",
    "تحلیل پیشرفته رفتار انسان",
    "پشتیبانی از پروتکل‌ها و سیستم‌های مدیریت ویدیو (VMS) مختلف",
    "نمایشگر هشدار موبایلی مبتنی بر P2P",
    "پشتیبانی از LTE و GPS (اختیاری)",
    "ضبط داخلی با حافظه M.2 NVMe SSD (اختیاری)",
    "محدوده دمایی گسترده بدون نیاز به فن: از ‎-30℃‎ تا ‎70℃‎",
    "داشبورد مبتنی بر فضای ابری (اختیاری)",
    "پشتیبانی از حالت تقویت هیبریدی هوش مصنوعی (Hybrid AI Boost Mode) (اختیاری)",
  ];

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: isMdDown ? "auto" : "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: isMdDown ? 4 : 0,
        px: 2,
        backgroundColor: "transparent",
      }}
    >
      <Toolbar />
      <Box
        sx={{
          maxWidth: "900px",
          width: "100%",
          bgcolor: "rgba(20,20,20,0.1)", // glassy dark background
          backdropFilter: "blur(5px)",
          borderRadius: 3,
          p: { xs: 2, sm: 3, md: 5 },
          color: "#fff",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: {
              xs: "1.2rem",
              sm: "1.3rem",
              md: "1.4rem",
              lg: "1.5rem",
            },
            lineHeight: 1.6,
          }}
        >
          ویژگی‌های اصلی
        </Typography>

        {features.map((feature, i) => (
          <Typography
            key={i}
            sx={{
              fontSize: {
                xs: "0.85rem",
                sm: "0.9rem",
                md: "1rem",
                lg: "1.05rem",
              },
              lineHeight: 1.7,
              mb: 1.5,
              pl: 2,
              position: "relative",
              "&::before": {
                content: '"•"',
                position: "absolute",
                left: 0,
                color: "#fff",
                fontWeight: 700,
              },
            }}
          >
            {feature}
          </Typography>
        ))}
      </Box>
      <Toolbar variant="dense" />
    </Container>
  );
};

export default Description0;
