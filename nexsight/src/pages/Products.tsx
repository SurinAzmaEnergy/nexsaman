import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Toolbar,
  // useTheme,
  // useMediaQuery,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Container,
} from "@mui/material";
import { FileDownloadOutlined } from "@mui/icons-material";
import { Link } from "react-router";
import { CustomButton } from "../components";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type Product = {
  label_en?: string;
  label: string;
  description: string;
  link?: string;
  image: string;
};

const hardwares: Product[] = [
  {
    label: "مدل AIB-TS2-08",
    description: "دستگاه تحلیل ویدیو، ۸ کانال با قابلیت ارتقا به ۱۶ کانال.",
    image: "/assets/products/hardware0.png",
    link: "/product/0",
  },
  {
    label: "مدل AIBL-TS2-08",
    description: "دستگاه تحلیل ویدیو، ۸ کانال با قابلیت ارتقا به ۱۶ کانال.",
    image: "/assets/products/hardware1.png",
    link: "/product/1",
  },
  {
    label: "مدل AIB-TE1-04",
    description: "دستگاه تحلیل ویدیو، ۴ کانال.",
    image: "/assets/products/hardware2.png",
    link: "/product/2",
  },
];

const softwares: Product[] = [
  {
    label_en: "Dynamic Privacy Masking",
    label: "ماسک‌گذاری حریم خصوصی پویا",
    description: "پایه",
    image: "/assets/products/Dynamic Privacy Masking.png",
  },
  {
    label_en: "Dynamic Face Masking",
    label: "ماسک‌گذاری چهره‌ی پویا",
    description: "پایه",
    image: "/assets/products/Dynamic Face Masking.png",
  },
  {
    label_en: "LP Masking",
    label: "ماسک‌گذاری پلاک خودرو",
    description: "پایه",
    image: "/assets/products/LP Masking.png",
  },
  {
    label_en: "Basic Attribute",
    label: "ویژگی‌های ظاهری پایه",
    description: "پایه",
    image: "/assets/products/Basic Attribute.png",
  },
  {
    label_en: "Queue Management",
    label: "مدیریت صف",
    description: "پایه",
    image: "/assets/products/Queue Management.png",
  },
  {
    label_en: "Heatmap",
    label: "نقشه حرارتی",
    description: "پایه",
    image: "/assets/products/Heatmap.png",
  },
  {
    label_en: "Intrusion Detection",
    label: "تشخیص نفوذ",
    description: "پایه",
    image: "/assets/products/Intrusion Detection.png",
  },
  {
    label_en: "Loitering Detection",
    label: "تشخیص پرسه‌زنی",
    description: "پایه",
    image: "/assets/products/Loitering Detection.png",
  },
  {
    label_en: "People Counting",
    label: "شمارش افراد",
    description: "پایه",
    image: "/assets/products/People Counting.png",
  },
  {
    label_en: "Vehicle Counting",
    label: "شمارش خودرو",
    description: "پایه",
    image: "/assets/products/Vehicle Counting.png",
  },
  {
    label_en: "Zone Counting",
    label: "شمارش ناحیه‌ای",
    description: "پایه",
    image: "/assets/products/Zone Counting.png",
  },
  {
    label_en: "Multi Zone Counting",
    label: "شمارش چند ناحیه‌ای",
    description: "پیشرفته",
    image: "/assets/products/Multi Zone Counting.png",
  },
  {
    label_en: "Virtual Fence",
    label: "حصار مجازی",
    description: "پایه",
    image: "/assets/products/Virtual Fence.png",
  },
  {
    label_en: "Stopping Detection",
    label: "تشخیص توقف",
    description: "پایه",
    image: "/assets/products/Stopping Detection.png",
  },
  {
    label_en: "Stay & Go",
    label: "تشخیص ماندن و رفتن",
    description: "پایه",
    image: "/assets/products/Stay & Go.png",
  },
  {
    label_en: "Enter/Exit Detection",
    label: "تشخیص ورود/خروج",
    description: "پایه",
    image: "/assets/products/Enter-Exit Detection.png",
  },
  {
    label_en: "Speed Anomaly Detection",
    label: "تشخیص سرعت غیرعادی",
    description: "پیشرفته",
    image: "/assets/products/Speed Anomaly Detection.png",
  },
  {
    label_en: "Occupancy Car Counting",
    label: "شمارش اشغال خودرو",
    description: "پیشرفته",
    image: "/assets/products/Occupancy Car Counting.png",
  },
  {
    label_en: "Occupancy Counting",
    label: "شمارش اشغال فضا",
    description: "پایه",
    image: "/assets/products/Occupancy Counting.png",
  },
  {
    label_en: "Crowd Detection",
    label: "تشخیص ازدحام",
    description: "پیشرفته",
    image: "/assets/products/Crowd Detection.png",
  },
  {
    label_en: "Advanced Visitor Analysis",
    label: "تحلیل پیشرفته بازدیدکنندگان",
    description: "پیشرفته",
    image: "/assets/products/Advanced Visitor Analysis.png",
  },
  {
    label_en: "Hand & Foot Intrusion",
    label: "تشخیص نفوذ دست و پا",
    description: "پیشرفته",
    image: "/assets/products/Hand & Foot Intrusion.png",
  },
  {
    label_en: "Intentional Body Gaze Detector",
    label: "تشخیص نگاه عمدی بدن",
    description: "پیشرفته",
    image: "/assets/products/Intentional Body Gaze Detector.png",
  },
  {
    label_en: "Imminent Threat",
    label: "تهدید قریب‌الوقوع",
    description: "پیشرفته",
    image: "/assets/products/Imminent Threat.png",
  },
  {
    label_en: "Fallen Person Detection",
    label: "تشخیص سقوط فرد",
    description: "پایه",
    image: "/assets/products/Fallen Person Detection.png",
  },
  {
    label_en: "Animal Detection",
    label: "تشخیص حیوان",
    description: "پایه",
    image: "/assets/products/Animal Detection.png",
  },
  {
    label_en: "Fire & Smoke Detection",
    label: "تشخیص دود و آتش",
    description: "پایه",
    image: "/assets/products/Fire & Smoke Detection.png",
  },
  {
    label_en: "Vehicle Type Counting",
    label: "شمارش نوع خودرو",
    description: "پیشرفته",
    image: "/assets/products/Vehicle Type Counting.png",
  },
  {
    label_en: "Vehicle Type Detection",
    label: "تشخیص نوع خودرو",
    description: "پیشرفته",
    image: "/assets/products/Vehicle Type Detection.png",
  },
  {
    label_en: "Thermal Intrusion Detection",
    label: "تشخیص نفوذ حرارتی",
    description: "پیشرفته",
    image: "/assets/products/Thermal Intrusion Detection.png",
  },
  {
    label_en: "Advanced Attribute",
    label: "ویژگی‌های ظاهری پیشرفته",
    description: "پیشرفته",
    image: "/assets/products/Advanced Attribute.png",
  },
  {
    label_en: "Tailgating",
    label: "تشخیص دنباله‌روی غیرمجاز",
    description: "پیشرفته",
    image: "/assets/products/Tailgating.jpg",
  },
  {
    label_en: "Dust-Proof Clothing Detection",
    label: "تشخیص لباس ضدگردوغبار",
    description: "پیشرفته",
    image: "/assets/products/Dust-Proof Clothing Detection.jpg",
  },
  {
    label_en: "LPR – Europe, US, JP, KR",
    label: "تشخیص پلاک خودرو",
    description: "پیشرفته",
    image: "/assets/products/LPR-Europe, US, JP, KR.png",
  },
  {
    label_en: "Advanced Heatmap",
    label: "نقشه حرارتی پیشرفته",
    description: "پیشرفته",
    image: "/assets/products/Advanced Heatmap.png",
  },
  {
    label_en: "Vehicle Queue Management",
    label: "مدیریت صف خودرو",
    description: "پیشرفته",
    image: "/assets/products/Vehicle Queue Management.png",
  },
  {
    label_en: "No PPE",
    label: "عدم استفاده از تجهیزات ایمنی",
    description: "پایه",
    image: "/assets/products/No PPE.png",
  },
  {
    label_en: "Illegal Dumping",
    label: "رهاسازی غیرمجاز زباله",
    description: "پایه",
    image: "/assets/products/Illegal Dumping.png",
  },
  {
    label_en: "Aggressive Detection",
    label: "تشخیص رفتار پرخاشگرانه",
    description: "پیشرفته",
    image: "/assets/products/Aggressive Detection.png",
  },
  {
    label_en: "PTZ Tracking",
    label: "ردیابی PTZ",
    description: "پیشرفته",
    image: "/assets/products/PTZ Tracking.png",
  },
  {
    label_en: "Human Prolonged Stay",
    label: "تشخیص توقف غیرعادی انسان",
    description: "پیشرفته",
    image: "/assets/products/Human Prolonged Stay.png",
  },
  {
    label_en: "Bullying Detection",
    label: "تشخیص آزار و اذیت",
    description: "پیشرفته",
    image: "/assets/products/Bullying Detection.png",
  },
  {
    label_en: "Forklift No Helmet",
    label: "تشخیص عدم استفاده از کلاه ایمنی روی لیفتراک",
    description: "پیشرفته",
    image: "/assets/products/Forklift No Helmet.png",
  },
  {
    label_en: "Forklift Detection",
    label: "تشخیص لیفتراک",
    description: "پایه",
    image: "/assets/products/Forklift Detection.png",
  },
  {
    label_en: "Forklift Non-Driver Detection",
    label: "تشخیص فرد بدون راننده روی لیفتراک",
    description: "پیشرفته",
    image: "/assets/products/Forklift Non-Driver Detection.png",
  },
  {
    label_en: "Staff Exclusion People Counting",
    label: "شمارش افراد با حذف کارکنان",
    description: "پیشرفته",
    image: "/assets/products/Staff Exclusion People Counting.png",
  },
  {
    label_en: "Covered Face Detection",
    label: "تشخیص چهره پوشیده",
    description: "پایه",
    image: "/assets/products/Covered Face Detection.png",
  },
  {
    label_en: "No Mask",
    label: "تشخیص عدم استفاده از ماسک",
    description: "پایه",
    image: "/assets/products/No Mask.png",
  },
  {
    label_en: "Reverse Movement Detection",
    label: "تشخیص حرکت معکوس",
    description: "پیشرفته",
    image: "/assets/products/Reverse Movement Detection.png",
  },
  {
    label_en: "Vehicle Zone Presence",
    label: "تشخیص حضور خودرو در ناحیه",
    description: "پایه",
    image: "/assets/products/Vehicle Zone Presence.png",
  },
  {
    label_en: "Work Vehicle Hazard Detection",
    label: "تشخیص خطر وسایل نقلیه کاری",
    description: "پیشرفته",
    image: "/assets/products/Work Vehicle Hazard Detection.png",
  },
  {
    label_en: "Road Pedestrian Detection",
    label: "تشخیص عابر پیاده در مسیر",
    description: "پایه",
    image: "/assets/products/Road Pedestrian Detection.png",
  },
  {
    label_en: "Object Location Tracking",
    label: "ردیابی موقعیت اشیا",
    description: "پیشرفته",
    image: "/assets/products/Object Location Tracking.png",
  },
  {
    label_en: "Gun Detection",
    label: "تشخیص سلاح گرم",
    description: "پیشرفته",
    image: "/assets/products/Gun Detection.jpg",
  },
  {
    label_en: "Illegal Dumping+",
    label: "رهاسازی غیرمجاز زباله+",
    description: "پیشرفته",
    image: "/assets/products/Illegal Dumping+.jpg",
  },
  {
    label_en: "Bear Detection",
    label: "تشخیص خرس",
    description: "پیشرفته",
    image: "/assets/products/Bear Detection.png",
  },
  {
    label_en: "Helmet Not Wearing",
    label: "تشخیص عدم استفاده از کلاه ایمنی",
    description: "پایه",
    image: "/assets/products/Helmet Not Wearing.png",
  },
  {
    label_en: "Under-Age Detection",
    label: "تشخیص افراد زیر سن مجاز",
    description: "پیشرفته",
    image: "/assets/products/Under-Age Detection.png",
  },
  {
    label_en: "Phone-Walking Detection",
    label: "تشخیص راه‌رفتن با موبایل",
    description: "پایه",
    image: "/assets/products/Phone-Walking Detection.png",
  },
  {
    label_en: "Unsafe Lifting",
    label: "تشخیص بلندکردن ناایمن",
    description: "پیشرفته",
    image: "/assets/products/Unsafe Lifting.png",
  },
  {
    label_en: "Fire & Smoke Detection+",
    label: "تشخیص پیشرفته دود و آتش",
    description: "پیشرفته",
    image: "/assets/products/Fire & Smoke Detection+.png",
  },
  {
    label_en: "Fallen Person Detection+",
    label: "تشخیص پیشرفته سقوط فرد",
    description: "پیشرفته",
    image: "/assets/products/Fallen Person Detection+.png",
  },
  {
    label_en: "Aggressive Detection+",
    label: "تشخیص رفتار پرخاشگرانه+",
    description: "پیشرفته",
    image: "/assets/products/Aggressive Detection+.png",
  },
  {
    label_en: "Animal Detection+",
    label: "تشخیص حیوان+",
    description: "پیشرفته",
    image: "/assets/products/Animal Detection+.png",
  },
  {
    label_en: "Spill Detection",
    label: "تشخیص ریزش و نشت مایعات",
    description: "پایه",
    image: "/assets/products/Spill Detection.png",
  },
  {
    label_en: "Imminent Threat+",
    label: "تهدید قریب‌الوقوع+",
    description: "پیشرفته",
    image: "/assets/products/Imminent Threat+.png",
  },
  {
    label_en: "Out of Uniform",
    label: "عدم تطابق یونیفرم",
    description: "پایه",
    image: "/assets/products/Out of Uniform.png",
  },
  {
    label_en: "CloseCam Covered Face",
    label: "تشخیص چهره پوشیده از نمای نزدیک",
    description: "پیشرفته",
    image: "/assets/products/CloseCam Covered Face.png",
  },
];

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const ProductList = () => {
  // const theme = useTheme();
  // const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container>
      <Toolbar />
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="basic tabs"
        centered
      >
        <Tab label="تجهیزات تحلیل ویدیو Edge AI" {...a11yProps(0)} />
        <Tab label="نرم‌افزار تحلیل ویدیو Edge AI" {...a11yProps(1)} />
      </Tabs>
      <CustomTabPanel value={tabValue} index={0}>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {hardwares.map((item, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                variant="outlined"
                sx={{
                  bgcolor: "darkgray",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardMedia component="img" height="200" image={item.image} />
                <Box
                  sx={{
                    height: "250",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" color="black" gutterBottom>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" color="#222">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <CustomButton
                      variant="contained"
                      size="small"
                      color="secondary"
                      disableElevation
                      component={Link}
                      to={item.link}
                    >
                      مشاهده محصول
                    </CustomButton>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={1}>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {softwares.map((item, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                variant="outlined"
                sx={{
                  bgcolor: "darkgray",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardMedia component="img" height="200" image={item.image} />
                <Box
                  sx={{
                    height: "250",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <CardContent>
                    <Typography variant="body2" color="black" gutterBottom>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" color="#222">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
          <CustomButton
            variant="contained"
            color="secondary"
            rightIcon={FileDownloadOutlined}
          >
            دریافت کاتالوگ
          </CustomButton>
        </Grid>
      </CustomTabPanel>
      <Toolbar variant="dense" />
    </Container>
  );
};

export default ProductList;
