import { useState } from "react";
import type { ElementType } from "react";
import { Link } from "react-router";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Container,
  IconButton,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import {
  LocalMallOutlined,
  TipsAndUpdatesOutlined,
  SupportAgentOutlined,
  InfoOutlined,
  // KeyboardArrowDownOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import { CustomButton } from "../../components";
import { hexToRGBA } from "../../utils";
import LogoFull from "../../assets/LogoFull.png";
import LogoCompact from "../../assets/LogoCompact.png";

type HeaderLink = {
  label: string;
  path: string;
  rightIcon: ElementType;
  leftIcon?: ElementType;
};

const headerLinks: HeaderLink[] = [
  {
    label: "محصولات",
    rightIcon: LocalMallOutlined,
    // leftIcon: KeyboardArrowDownOutlined,
    path: "/products/",
  },
  {
    label: "راه‌حل‌ها",
    // leftIcon: KeyboardArrowDownOutlined,
    rightIcon: TipsAndUpdatesOutlined,
    path: "/solutions",
  },
  {
    label: "پشتیبانی",
    rightIcon: SupportAgentOutlined,
    path: "/support",
  },
  {
    label: "درباره‌ما",
    rightIcon: InfoOutlined,
    path: "/about",
  },
];

const Header = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      variant="outlined"
      sx={{
        backgroundColor: hexToRGBA(theme.palette.custom.slateNavy.shade2, 0.8),
        backdropFilter: "blur(3px)",
        border: "none",
      }}
    >
      <Toolbar>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          {isMdDown ? (
            <>
              <IconButton
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuOutlined />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
                elevation={0}
                sx={{
                  backgroundColor: "rgba(0, 32, 38, 0.2)",
                  backdropFilter: "blur(2px)",
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: "rgba(0, 32, 38, 0.8)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid lightgray",
                    mt: 2,
                    px: 2,
                    py: 1,
                  },
                }}
              >
                {headerLinks.map((item, i) => {
                  const Icon = item.rightIcon;
                  return (
                    <MenuItem
                      key={i}
                      component={Link}
                      to={item.path}
                      onClick={handleClose}
                    >
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      <ListItemText>{item.label}</ListItemText>
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {headerLinks.map((item, i) => (
                <CustomButton
                  key={i}
                  rightIcon={item.rightIcon}
                  leftIcon={item.leftIcon}
                  sx={{ fontWeight: "bold" }}
                  component={Link}
                  to={item.path}
                >
                  {item.label}
                </CustomButton>
              ))}
            </Box>
          )}

          {isMdDown ? (
            <Box component={Link} to="/">
              <img src={LogoCompact} style={{ display: "block", height: 40 }} />
            </Box>
          ) : (
            <Box component={Link} to="/">
              <img src={LogoFull} style={{ display: "block", height: 45 }} />
            </Box>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
