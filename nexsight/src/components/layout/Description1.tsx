import {
  Container,
  Toolbar,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Description1 = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

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
          bgcolor: "rgba(20,20,20,0.2)", // glassy dark background
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
              xs: "1.1rem",
              sm: "1.2rem",
              md: "1.3rem",
              lg: "1.4rem",
            },
            lineHeight: 1.6,
          }}
        >
          EdgeDX؛ پیشگام تحول دیجیتال در لبه هوش مصنوعی و امنیت ویدئویی
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: "0.85rem",
              sm: "0.9rem",
              md: "1rem",
              lg: "1.05rem",
            },
            lineHeight: 1.7,
          }}
        >
          شرکت EdgeDX به‌عنوان یکی از پیشگامان جهانی در حوزه‌ی تحلیل ویدئویی
          مبتنی بر هوش مصنوعی لبه (Edge AI) ، با تمرکز بر نوآوری، امنیت و تحول
          دیجیتال، راهکارهایی هوشمند برای حفاظت از دارایی‌های مشتریان، مدیریت
          ایمن داده‌ها و ارتقای بهره‌وری سازمانی ارائه می‌دهد. این شرکت با
          بهره‌گیری از تیمی متخصص و فناوری‌های پیشرفته‌ی سخت‌افزاری و
          نرم‌افزاری، به توسعه، تولید و عرضه‌ی پلتفرم‌های تحلیل ویدئویی نسل جدید
          می‌پردازد که نیازهای متنوع صنایع را — از زیرساخت‌های شهری و حمل‌ونقل
          گرفته تا مراکز صنعتی و اداری، انرژی و خرده‌فروشی — پوشش می‌دهند.
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontSize: {
              xs: "0.85rem",
              sm: "0.9rem",
              md: "1rem",
              lg: "1.05rem",
            },
            lineHeight: 1.7,
          }}
        >
          در میان محصولات شاخص EdgeDX، پلتفرم AI Bridge (AI Box) جایگاه ویژه‌ای
          دارد. این سامانه با اتکا بر الگوریتم‌های پیشرفته‌ی یادگیری ماشین و
          پردازش لبه‌ای، قادر است داده‌های ویدئویی را به‌صورت بلادرنگ
          (Real-Time) و بدون نیاز به ارسال به سرور مرکزی تحلیل و پردازش کند. این
          ویژگی نه‌تنها موجب کاهش تأخیر و افزایش سرعت تصمیم‌گیری می‌شود، بلکه
          امنیت داده‌ها و کارایی عملیاتی را نیز به‌طور چشمگیری بهبود می‌بخشد.
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontSize: {
              xs: "0.85rem",
              sm: "0.9rem",
              md: "1rem",
              lg: "1.05rem",
            },
            lineHeight: 1.7,
          }}
        >
          نام EdgeDX برگرفته از عبارت Digital Transformation from the Edge است؛
          عبارتی که به‌خوبی مأموریت و فلسفه‌ی این برند را بازتاب می‌دهد — تحقق
          تحول دیجیتال از لبه‌ی فناوری. این رویکرد، نمایانگر باور EdgeDX به
          آینده‌ای است که در آن تحلیل هوشمند در محل وقوع داده‌ها، کلید اصلی
          امنیت، کارایی و تصمیم‌گیری مبتنی بر داده به‌شمار می‌رود.
        </Typography>
      </Box>
      <Toolbar variant="dense" />
    </Container>
  );
};

export default Description1;
