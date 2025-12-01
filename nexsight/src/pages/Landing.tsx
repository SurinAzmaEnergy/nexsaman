import type { ReactNode } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
// import { Hero, SwiperSection } from "../components";

type Section = {
  component: ReactNode;
};

const sections: Section[] = [{ component: <></> }, { component: <></> }];

const Landing = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        height: isMdDown ? "auto" : "100vh",
        overflowY: isMdDown ? "visible" : "scroll",
        scrollSnapType: isMdDown ? "none" : "y mandatory",
        scrollBehavior: isMdDown ? "auto" : "smooth",
        "&::-webkit-scrollbar": isMdDown ? undefined : { display: "none" },
        scrollbarWidth: isMdDown ? undefined : "none",
      }}
    >
      {sections.map((section, i) => (
        <Box
          key={i}
          sx={{
            height: isMdDown ? "auto" : "100vh",
            scrollSnapAlign: isMdDown ? "none" : "start",
          }}
        >
          {section.component}
        </Box>
      ))}
    </Box>
  );
};

export default Landing;
