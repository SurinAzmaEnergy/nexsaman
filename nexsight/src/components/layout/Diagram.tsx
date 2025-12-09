import {
  Container,
  Toolbar,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { CustomButton } from "../index";
import { Link } from "react-router";

const Diagram = () => {
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
        {/* Slide 2: Diagram + Button */}
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 3,
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
      </Box>
      <Toolbar variant="dense" />
    </Container>
  );
};

export default Diagram;
