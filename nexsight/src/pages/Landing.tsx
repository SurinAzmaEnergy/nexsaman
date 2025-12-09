import type { ReactNode } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import {
  HeroSlider,
  Description0,
  Description1,
  Diagram,
  Contact,
} from "../components";

type Section = {
  component: ReactNode;
};

const sections: Section[] = [
  { component: <HeroSlider /> },
  { component: <Description1 /> },
  { component: <Description0 /> },
  { component: <Diagram /> },
  { component: <Contact /> },
];

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
