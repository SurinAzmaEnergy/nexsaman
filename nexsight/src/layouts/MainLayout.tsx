import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Header, Footer } from "../components";

const MainLayout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;
