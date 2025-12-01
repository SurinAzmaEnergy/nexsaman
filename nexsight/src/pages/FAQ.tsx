import {
  Container,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CustomButton } from "../components";
import diagram from "../assets/diagram.png";

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

const FAQ = () => {
  return (
    <>
      <Toolbar />
      <Container sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3, textAlign: "center", fontWeight: "bold" }}>
          سوالات متداول
        </Typography>
        <Box
          dir="rtl"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {/* Q1 */}
          <Paper sx={glassStyle}>
            <Accordion sx={{ background: "transparent", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon htmlColor="#fff" />}
              >
                <Typography fontWeight={700} color="#fff">
                  تقویت هوش ترکیبی به چه معناست؟
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="#e8e8e8">
                  تقویت هوش ترکیبی با ترکیب پردازش درون‌دستگاهی و سرور کمکی
                  آنلاین، درک بهتر زمینه و تحلیل دقیق‌تر را در محتوای ویدئویی
                  فراهم می‌کند.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>

          {/* Q2 */}
          <Paper sx={glassStyle}>
            <Accordion sx={{ background: "transparent", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon htmlColor="#fff" />}
              >
                <Typography fontWeight={700} color="#fff">
                  چطور با AI Bridge یکپارچه شوم؟
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="#e8e8e8">
                  نمای کلی ساختار یکپارچه‌سازی در فایل پیوست موجود است.
                </Typography>
                <CustomButton sx={{ mt: 2 }}>دریافت فایل</CustomButton>
              </AccordionDetails>
            </Accordion>
          </Paper>

          {/* Q3 */}
          <Paper sx={glassStyle}>
            <Accordion sx={{ background: "transparent", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon htmlColor="#fff" />}
              >
                <Typography fontWeight={700} color="#fff">
                  نمودار معماری سیستم؟
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  component="img"
                  src={diagram}
                  alt="System Architecture Diagram"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.25)",
                    mt: 1,
                  }}
                />
              </AccordionDetails>
            </Accordion>
          </Paper>

          {/* Q4 */}
          <Paper sx={glassStyle}>
            <Accordion sx={{ background: "transparent", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon htmlColor="#fff" />}
              >
                <Typography fontWeight={700} color="#fff">
                  AI Bridge چه نوع محصولی است؟
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="#e8e8e8">
                  AI Bridge در nexsaman یک سیستم تحلیل ویدئویی پیشرفته در لبه
                  است که از بیش از ۵۰ نوع تحلیل هوشمند پشتیبانی می‌کند.
                  <br />
                  از تشخیص نفوذ گرفته تا تحلیل رفتار پیشرفته و شناسایی ویژگی‌های
                  پیچیده.
                  <br />
                  <br />
                  همچنین از رله، صوت، آلارم‌ها، و APIهایی مانند HTTPS، MQTT و
                  ONVIF پشتیبانی می‌کند و آن را به یک دروازه قدرتمند Edge AIoT
                  تبدیل می‌کند.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Box>
      </Container>
      <Toolbar />
    </>
  );
};

export default FAQ;
