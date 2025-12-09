import {
  Container,
  Toolbar,
  Box,
  Card,
  TextField,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { CustomButton } from "../index";

const Contact = () => {
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

      <Box sx={{ display: "flex", gap: 3, flexDirection: isMdDown ? "column-reverse" : "row" }}>
        <Box>
          <Card
            sx={{
              p: 1,
              bgcolor: "rgba(20,20,20,.3)",
              backdropFilter: "blur(5px)",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              فرم تماس
            </Typography>
            <TextField variant="filled" label="نام و نام‌خانوادگی" />
            <TextField variant="filled" label="ایمیل یا شماره تلفن" />
            <TextField
              variant="filled"
              multiline
              rows={6}
              label="متن پیغام..."
            />
            <CustomButton
              variant="contained"
              color="secondary"
              disableElevation
            >
              ارسال
            </CustomButton>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography> تلفن تماس: ٠٢١٢٢٨٦٦٣٦٠</Typography>

            <Typography>ایمیل: nexsamangroup@gmail.com</Typography>

            <Typography>
              آدرس: تهران، خیابان شريعتي، خیابان خواجه عبدالله انصاري، پلاک ١٧٢،
              واحد ١٨
            </Typography>
          </Box>
          <img
            src="/assets/map.png"
            style={{ width: isMdDown ? "100%" : "500px", margin: "0 auto" }}
          />
        </Box>
      </Box>
      <Toolbar variant="dense" />
    </Container>
  );
};

export default Contact;
