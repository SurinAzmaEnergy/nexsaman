import {
  Container,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const glassStyle = {
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.25)",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
  transition: "0.2s ease",
  ":hover": {
    background: "rgba(255, 255, 255, 0.22)",
    boxShadow: "0 6px 24px rgba(0,0,0,0.35)",
  },
};

const createItem = (title: string, desc: string, list: string[]) => (
  <Paper sx={glassStyle}>
    <Accordion sx={{ background: "transparent", boxShadow: "none" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon htmlColor="#fff" />}>
        <Typography sx={{ fontWeight: "bold" }} color="#fff">
          {title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography color="#e8e8e8" sx={{ mb: 1 }}>
          {desc}
        </Typography>

        <List>
          {list.map((t, i) => (
            <ListItem key={i} sx={{ py: 0, color: "#e8e8e8" }}>
              • {t}
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  </Paper>
);

const Solutions = () => {
  return (
    <>
      <Toolbar />
      <Container sx={{ my: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
        >
          راه‌حل‌ها
        </Typography>

        <Box
          dir="rtl"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {createItem(
            "۱) راهکارهای بخشی: امنیت و نظارت",
            "EdgeDX با بهره‌گیری از تحلیل ویدئویی مبتنی بر هوش مصنوعی، ایمنی ساختمان‌ها و زیرساخت‌ها را ارتقا می‌دهد و امکان واکنش پیشگیرانه را برای مدیران فراهم می‌کند.",
            [
              "پایش رخدادهای ورود غیرمجاز و هشدار لحظه‌ای",
              "افزایش درک ریسک و پیشگیری از حادثه",
              "پخش پیام صوتی هشدار از طریق میکروفون",
              "مدیریت مؤثر دارایی‌ها و حفاظت از زیرساخت‌ها",
              "کنترل مرزهای تأسیسات ویژه",
            ],
          )}

          {createItem(
            "۲) راهکارهای بخشی: ایمنی ساخت‌وساز و لجستیک",
            "این راهکار با تحلیل ویدئوی هوشمند، ایمنی کارگران و مدیریت دارایی‌ها را در محیط‌های ساخت‌وساز و لجستیکی ارتقا می‌دهد.",
            [
              "ارتقای ایمنی کارگران با شناسایی رفتارهای پرخطر",
              "کاهش ریسک با مداخلهٔ به‌موقع",
              "پاسخ سریع به حوادث با اعلان فوری",
              "نظارت خودکار بر دارایی‌ها و موجودی",
            ],
          )}

          {createItem(
            "۳) راهکارهای بخشی: مدیریت کارآمد فروشگاه",
            "سیستم هوش مصنوعی EdgeDX با ارائه نقشه‌های حرارتی دقیق، مدیریت فروشگاه را هوشمندتر و کارآمدتر می‌کند.",
            [
              "بهینه‌سازی چیدمان با نقشه‌های حرارتی",
              "تنظیم تراکم مشتریان",
              "تخصیص منابع بهینه بر اساس داده‌ها",
              "افزایش امنیت و جلوگیری از نفوذ غیرمجاز",
            ],
          )}

          {createItem(
            "۴) راهکارهای بخشی: سکونت سالمندان و مراکز خدماتی",
            "DX با تحلیل ویدئوی هوشمند سقوط، پرسه‌زنی و رفتارهای خطرناک را تشخیص می‌دهد تا امنیت مراکز سالمندان تضمین شود.",
            [
              "واکنش آنی به سقوط",
              "تشخیص وضعیت اضطراری و هشدار لحظه‌ای",
              "افزایش امنیت کلی مراکز مراقبتی",
              "ایجاد محیط امن‌تر برای ساکنان",
            ],
          )}

          {createItem(
            "۵) راهکارهای بخشی: مدیریت ایمنی عمومی",
            "این فناوری با مدیریت تراکم، کنترل تردد و تشخیص رفتارهای خطرناک، ایمنی عمومی را در فضاهای شهری افزایش می‌دهد.",
            [
              "مدیریت هوشمند تراکم جمعیت",
              "واکنش سریع در شرایط اضطراری",
              "کاهش ریسک تهدیدات عمومی",
              "ایجاد نواحی امن",
              "کاهش حوادث و آسیب‌ها",
              "جلوگیری از دسترسی غیرمجاز",
              "پایش فعال فضاهای عمومی",
            ],
          )}

          {createItem(
            "۶) راهکارهای بخشی: سیستم‌های حمل‌ونقل هوشمند",
            "این راهکار با ادغام در سیستم‌های ترافیکی، ایمنی تقاطع‌ها و عبور عابران را با تحلیل هوشمند ارتقا می‌دهد.",
            [
              "افزایش ایمنی حمل‌ونقل با پیشگیری از حادثه",
              "مدیریت هوشمند تقاطع‌ها",
              "کنترل بهتر عابران و کودکان",
              "تشخیص بلادرنگ رفتارهای خطرناک",
              "رهگیری هوشمند با دوربین PTZ",
            ],
          )}
        </Box>
      </Container>
      <Toolbar />
    </>
  );
};

export default Solutions;
