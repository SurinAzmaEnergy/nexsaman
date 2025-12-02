import { useState } from "react";
import {
  Container,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Grid,
  Card,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
} from "@mui/material";
import { CustomButton } from "../components";

import {
  FileDownloadOutlined,
  ExpandMore,
  Description,
  DescriptionOutlined,
  Security,
  Assignment,
  VideocamOutlined,
  GppGoodOutlined,
  InsertLinkOutlined,
} from "@mui/icons-material";

const datasheets = [
  {
    title: "راهکار تحلیل ویدئو چندکاناله",
    link: "",
    icon: <VideocamOutlined />,
  },
  {
    title: "گواهینامه‌های حوزه ایمنی",
    link: "",
    icon: <GppGoodOutlined />,
  },
  {
    title: "گواهینامه دوربین هوشمند",
    link: "",
    icon: <GppGoodOutlined />,
  },
  {
    title: "راهنمای یکپارچه‌سازی",
    link: "",
    icon: <InsertLinkOutlined />,
  },
  {
    title: "دیتاشیت AIB(L)-TS2-08",
    link: "",
    icon: <DescriptionOutlined />,
  },
  {
    title: "دیتاشیت AIB-TE1-04",
    link: "",
    icon: <DescriptionOutlined />,
  },
  {
    title: "الزامات امنیت سایبری",
    link: "/assets/datasheets/Cyber_Security_Assessment_Report_EdgeDX_CO_,LTD-1.pdf",
    icon: <DescriptionOutlined />,
  },
  {
    title: "ارزیابی امنیت سایبری",
    link: "/assets/datasheets/Statement_of_Compliance_with_Cybersecurity_Requirements-1.pdf",
    icon: <DescriptionOutlined />,
  },
];

const licenseAccordions = [
  {
    title: "۰۱) هدف و دامنه",
    content:
      "این توافق‌نامه شرایط فروش، اشتراک و اعطای مجوز نرم‌افزارهای تعبیه‌شده در دستگاه‌ها را تعیین می‌کند و فقط برای معاملات سازمانی (B2B) معتبر است.",
  },
  {
    title: "۰۲) تعاریف",
    content:
      "«دستگاه»: سخت‌افزار تعیین‌شده. «نرم‌افزار مجوزدار»: نرم‌افزار نصب‌شده یا مرتبط. «دوره ضمانت»: بازه‌ای که تعمیر رایگان نقص‌های عادی تضمین می‌شود.",
  },
  {
    title: "۰۳) اعتبار و تغییرات",
    content:
      "شرایط در وب‌سایت نمایش داده می‌شود و ممکن است طبق قانون اصلاح شود. تغییرات نامطلوب حداقل ۳۰ روز پیش اطلاع‌رسانی می‌شود و عدم اعلام مخالفت به‌معنی پذیرش است.",
  },
  {
    title: "۰۴) شرایط تکمیلی و اولویت",
    content:
      "برای برخی خدمات ممکن است مقررات جداگانه وضع شود که در صورت تعارض، نسبت به این توافق‌نامه اولویت دارد. سایر موارد تابع قوانین و رویه‌های تجاری است.",
  },
  {
    title: "۰۵) دامنه مجوز (وابسته به دستگاه)",
    content:
      "مجوز نرم‌افزار فقط به دستگاه مشخص‌شده تعلق دارد. انتقال یا واگذاری بدون رضایت کتبی ممنوع است. در دوره ضمانت، ممکن است برای دستگاه جایگزین مجوز جدید صادر شود.",
  },
  {
    title: "۰۶) مدل اشتراک و دوره استفاده",
    content:
      "استفاده از نرم‌افزار می‌تواند خرید دائمی یا اشتراکی باشد. اشتراک معمولاً یک‌ساله یا چندساله است و با پایان آن دسترسی و امکانات متوقف می‌شود مگر تمدید گردد.",
  },
  {
    title: "۰۷) خدمات وابسته به سرویس‌های خارجی",
    content:
      "برخی قابلیت‌ها به سرویس‌های ابری یا شخص ثالث وابسته‌اند. شرکت مسئول تغییرات، افزایش هزینه یا اختلالات خارج از کنترل خود نیست و ممکن است برخی امکانات تغییر یا حذف شوند.",
  },
  {
    title: "۰۸) قیمت‌گذاری، پرداخت و بازپرداخت",
    content:
      "پرداخت ظرف دو روز کاری لازم است. بازپرداخت فقط در صورت نقص جدی سخت‌افزاری در دوره ضمانت و عدم امکان تعمیر/جایگزینی انجام می‌شود و به‌صورت prorate محاسبه می‌گردد.",
  },
  {
    title: "۰۹) ضمانت",
    content:
      "ضمانت سخت‌افزار طبق اسناد جداگانه است. نرم‌افزار به‌صورت «همان‌گونه که هست» ارائه می‌شود و هیچ ضمانت صریح یا ضمنی درباره کارایی و تناسب وجود ندارد.",
  },
  {
    title: "۱۰) محدودیت مسئولیت",
    content:
      "حداکثر مسئولیت شرکت برابر مبلغ پرداختی برای دستگاه است، مگر در موارد تقصیر عمدی یا بی‌احتیاطی فاحش. خسارات غیرمستقیم و سود از دست‌رفته غیرقابل مطالبه است.",
  },
  {
    title: "۱۱) منع استفاده در صنایع پرخطر",
    content:
      "نرم‌افزار برای صنایع حساس مانند هسته‌ای، هواپیمایی، نظامی یا تجهیزات حیاتی طراحی نشده و استفاده در این حوزه‌ها ممنوع است.",
  },
  {
    title: "۱۲) نرم‌افزارهای رایگان و محدودیت‌های آن",
    content:
      "ابزارهای رایگان صرفاً برای راحتی ارائه می‌شوند و ممکن است محدودیت یا اختلال داشته باشند. شرکت هیچ مسئولیتی در قبال داده، محیط شبکه یا مشکلات ناشی از سرویس‌های خارجی ندارد.",
  },
  {
    title: "۱۳) مالکیت فکری و محدودیت استفاده",
    content:
      "تمام حقوق مالکیت فکری متعلق به شرکت است. هرگونه تکثیر، انتشار، پخش یا استفاده تجاری بدون اجازه کتبی ممنوع است.",
  },
  {
    title: "۱۴) سلب مسئولیت در استفاده نادرست",
    content:
      "در صورت استفاده غیرقانونی یا غیرمجاز مشتری از دستگاه یا نرم‌افزار و بروز اختلاف با اشخاص ثالث، تمامی مسئولیت و خسارات بر عهده مشتری است.",
  },
  {
    title: "۱۵) تفکیک‌پذیری",
    content:
      "اگر بخشی از توافق‌نامه طبق قانون نامعتبر شود، سایر بخش‌ها همچنان معتبر بوده و هدف اصلی قرارداد حفظ می‌شود.",
  },
  {
    title: "۱۶) قانون حاکم و حل اختلاف",
    content:
      "قانون کره جنوبی بر قرارداد حاکم است و دادگاه صلاحیت‌دار اولیه، دادگاه منطقه‌ای مرکزی سئول خواهد بود.",
  },
];

const securityAccordions = [
  {
    title: "۰۱) مکانیزم گزارش‌دهی",
    content: (
      <>
        در صورت کشف آسیب‌پذیری، لطفاً از طریق ایمیل گزارش دهید:
        <ul>
          <li>ایمیل: support@edgedx.ai</li>
        </ul>
      </>
    ),
  },
  {
    title: "۰۲) تأیید دریافت",
    content:
      "ما تأیید دریافت گزارش آسیب‌پذیری شما را ظرف ۵ روز کاری ارسال خواهیم کرد.",
  },
  {
    title: "۰۳) زمان پاسخ",
    content:
      "ما بررسی اولیه انجام داده و پاسخ از جمله برنامه اقدام برای رفع آسیب‌پذیری را ظرف ۱۰ روز کاری ارائه خواهیم داد.",
  },
  {
    title: "۰۴) مدیریت و حل",
    content: (
      <>
        پس از گزارش آسیب‌پذیری، مراحل زیر انجام می‌شود:
        <ul>
          <li>بررسی: صحت و تأثیر آسیب‌پذیری گزارش‌شده را بررسی کنید.</li>
          <li>تأیید: قابلیت بازتولید آسیب‌پذیری را تأیید کنید.</li>
          <li>کاهش: اقدامات لازم برای رفع یا کاهش آسیب‌پذیری را انجام دهید.</li>
          <li>
            حل: رفع آسیب‌پذیری را مانیتور کنید تا مطمئن شوید کاملاً حل شده است.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "۰۵) دستورالعمل افشا",
    content: (
      <>
        پس از رفع آسیب‌پذیری، با گزارش‌دهنده هماهنگی برای افشا انجام خواهد شد.
        اطلاعات حداکثر تا ۳۰ روز پس از رفع عمومی خواهد شد و از طریق سایت ما
        اطلاع‌رسانی می‌شود.
      </>
    ),
  },
  {
    title: "۰۶) حمایت قانونی",
    content:
      "محققانی که از این سیاست پیروی کنند، از اقدام قانونی EdgeDX در امان خواهند بود.",
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => ({
  id: `tab-${index}`,
  "aria-controls": `tabpanel-${index}`,
});

const Support = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <>
      <Toolbar />

      <Container sx={{ my: 4 }}>
        <Tabs value={tabValue} onChange={(_, v) => setTabValue(v)} centered>
          <Tab icon={<Description />} label="فایل‌ها" {...a11yProps(0)} />
          <Tab icon={<Security />} label="امنیت" {...a11yProps(1)} />
          <Tab icon={<Assignment />} label="مجوز‌ها" {...a11yProps(2)} />
        </Tabs>

        {/* Panel 0 */}
        <CustomTabPanel value={tabValue} index={0}>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            {datasheets.map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  sx={{
                    ...glassStyle,
                    py: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar>{item.icon}</Avatar>

                  <Typography color="#fff" fontWeight="bold">
                    {item.title}
                  </Typography>

                  <CustomButton
                    variant="contained"
                    color="secondary"
                    disableElevation
                    rightIcon={FileDownloadOutlined}
                    component="a"
                    href={item.link}
                  >
                    دریافت فایل
                  </CustomButton>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CustomTabPanel>

        {/* Panel 1 — Security */}
        <CustomTabPanel value={tabValue} index={1}>
          <Box
            dir="rtl"
            sx={{
              maxWidth: 600,
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {securityAccordions.map((item, i) => (
              <Box key={i} sx={{ ...glassStyle, p: 1 }}>
                <Accordion
                  sx={{ background: "transparent", boxShadow: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore htmlColor="#fff" />}
                  >
                    <Typography color="#fff" fontWeight="bold">
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="#e8e8e8">{item.content}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </Box>
        </CustomTabPanel>

        {/* Panel 2 — LICENSE (16 accordions) */}
        <CustomTabPanel value={tabValue} index={2}>
          <Box
            dir="rtl"
            sx={{
              maxWidth: 650,
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {licenseAccordions.map((item, i) => (
              <Box key={i} sx={{ ...glassStyle, p: 1 }}>
                <Accordion
                  sx={{ background: "transparent", boxShadow: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore htmlColor="#fff" />}
                  >
                    <Typography color="#fff" fontWeight="bold">
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="#e8e8e8">{item.content}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </Box>
        </CustomTabPanel>
      </Container>

      <Toolbar />
    </>
  );
};

export default Support;
