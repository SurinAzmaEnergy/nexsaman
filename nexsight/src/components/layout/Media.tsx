import { useState } from "react";
import {
  Container,
  Toolbar,
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  useTheme,
  useMediaQuery,
} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Media = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

      <Card
        sx={{
          display: "flex",
          flexDirection: isMdDown ? "column" : "row",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(20, 20, 20, 0.2)",
        }}
      >
        <Tabs
          orientation={isMdDown ? "horizontal" : "vertical"}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderColor: "divider",
            borderRight: isMdDown ? 0 : 1,
            borderBottom: isMdDown ? 1 : 0,
          }}
        >
          <Tab label="معرفی AI bridge EdgeDx" {...a11yProps(0)} />
          <Tab label="ویدیو دوم" {...a11yProps(1)} />
          <Tab label="ویدیو سوم" {...a11yProps(2)} />
        </Tabs>
        <Box
          sx={{
            width: isMdDown ? "100%" : "500px",
            height: isMdDown ? "auto" : "300px",
          }}
        >
          <TabPanel value={value} index={0}>
            <video
              src="/assets/video.webm"
              controls
              muted
              style={{ width: "100%" }}
            />
          </TabPanel>
          <TabPanel value={value} index={1}></TabPanel>
          <TabPanel value={value} index={2}></TabPanel>
        </Box>
      </Card>

      <Toolbar variant="dense" />
    </Container>
  );
};

export default Media;
