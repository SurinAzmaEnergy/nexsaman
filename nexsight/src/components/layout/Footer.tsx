import {
  Box,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  Container,
  IconButton,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import {
  RssFeedOutlined,
  QuizOutlined,
  EmailOutlined,
  PlayCircleOutlined,
} from "@mui/icons-material";
import { hexToRGBA } from "../../utils";
import type { ElementType } from "react";
import telegramIcon from "../../assets/telegram.png";
import linkedinIcon from "../../assets/linkedin.png";
import instagramIcon from "../../assets/instagram.png";
import aparatIcon from "../../assets/aparat.png";
import { CustomButton } from "../index";
import { Link } from "react-router";

type FooterLink = {
  label: string;
  path: string;
  rightIcon: ElementType;
};

type SocialLink = {
  src: string;
  alt: string;
  height: number;
  href: string;
};

const footerLinks: FooterLink[] = [
  { label: "اخبار", rightIcon: RssFeedOutlined, path: "/" },
  { label: "مدیا", rightIcon: PlayCircleOutlined, path: "/" },
  { label: "سوالات", rightIcon: QuizOutlined, path: "/faq" },
  { label: "تماس", rightIcon: EmailOutlined, path: "/" },
];

const socialLinks: SocialLink[] = [
  { alt: "linkedin", src: linkedinIcon, height: 30, href: "" },
  { alt: "instagram", src: instagramIcon, height: 20, href: "" },
  { alt: "telegram", src: telegramIcon, height: 20, href: "" },
  {
    alt: "aparat",
    src: aparatIcon,
    height: 25,
    href: "https://www.aparat.com/Nexsaman",
  },
];

const Footer = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box component="footer">
      {isMdDown ? (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <BottomNavigation
            showLabels
            sx={{
              backgroundColor: hexToRGBA(
                theme.palette.custom.slateNavy.shade2,
                0.8,
              ),
              backdropFilter: "blur(3px)",
            }}
          >
            {footerLinks.map((item, i) => {
              const Icon = item.rightIcon;
              return (
                <BottomNavigationAction
                  key={i}
                  label={item.label}
                  icon={<Icon />}
                  component={Link}
                  to={item.path}
                />
              );
            })}
          </BottomNavigation>
        </Box>
      ) : (
        <AppBar
          variant="outlined"
          sx={{
            backgroundColor: hexToRGBA(
              theme.palette.custom.slateNavy.shade2,
              0.8,
            ),
            backdropFilter: "blur(3px)",
            border: "none",
            top: "auto",
            bottom: 0,
          }}
        >
          <Toolbar variant="dense">
            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                {footerLinks.map((item, i) => (
                  <CustomButton
                    key={i}
                    rightIcon={item.rightIcon}
                    component={Link}
                    to={item.path}
                  >
                    {item.label}
                  </CustomButton>
                ))}
              </Box>
              <Box>
                {socialLinks.map((item, i) => (
                  <IconButton
                    key={i}
                    size="small"
                    sx={{ mr: 1 }}
                    component="a"
                    href={item.href}
                  >
                    <img src={item.src} height={item.height} />
                  </IconButton>
                ))}
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
};

export default Footer;
