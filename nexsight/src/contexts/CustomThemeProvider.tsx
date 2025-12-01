import Particles, { initParticlesEngine } from "@tsparticles/react";
import createCache from "@emotion/cache";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  type Theme,
} from "@mui/material";
import { loadSlim } from "@tsparticles/slim";
import { prefixer } from "stylis";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { useEffect, useMemo, useState, type ReactNode } from "react";

import { colorPalette } from "./colorPalette";

interface CustomeThemeProviderProps {
  children: ReactNode;
}

// Extend the MUI Theme's Palette to include custom colors
declare module "@mui/material/styles" {
  interface Palette {
    custom: typeof colorPalette;
  }
  interface PaletteOptions {
    custom: typeof colorPalette;
  }
}

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const ParticlesBackground = ({ theme }: { theme: Theme }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container)
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: theme.palette.custom.slateNavy.shade1 } },

      fullScreen: { enable: true, zIndex: -1 },
      fpsLimit: 200,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: false, mode: "push" },
          onHover: {
            enable: false,
            mode: "grab",
            parallax: { enable: false, force: 100, smooth: 10 },
          },
          resize: { enable: false, delay: 0.5 },
        },
      },
      particles: {
        size: {
          value: 3,
          random: true,
        },
        color: { value: theme.palette.custom.electricBlue.shade1 },
        opacity: { value: 0.3 },
        move: { enable: false, speed: 0.1 },
        links: {
          enable: true,
          color: theme.palette.custom.electricBlue.shade2,
          opacity: 0.1,
        },
        number: { value: 1000, density: { enable: true, area: 1000 } },
      },
      detectRetina: true,
    }),
    [
      theme.palette.custom.slateNavy.shade1,
      theme.palette.custom.cyberLime.shade2,
      theme.palette.custom.cyberLime.shade1,
    ],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      particlesLoaded={particlesLoaded}
    />
  );
};

const CustomThemeProvider = ({ children }: CustomeThemeProviderProps) => {
  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          custom: colorPalette,
          background: {
            default: colorPalette.slateNavy.shade1,
          },
          primary: {
            main: colorPalette.electricBlue.main,
          },
          secondary: {
            main: colorPalette.cyberLime.main,
          },
        },
        typography: {
          fontFamily: "Dana",
          fontWeightRegular: 400,
          fontWeightBold: 700,
        },
        direction: "rtl",
      }),
    [],
  );

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ParticlesBackground theme={theme} />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default CustomThemeProvider;
