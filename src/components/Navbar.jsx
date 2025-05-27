import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  IconButton,
  InputBase,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";

const StyledAppBar = styled(AppBar)(() => ({
  background: "#000",
  boxShadow: "#ffffff",
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  "& .MuiTab-root": {
    color: "#fff",
    opacity: 0.7,
    fontWeight: 500,
    fontSize: "1rem",
    textTransform: "none",
    minWidth: 90,
  },
  "& .Mui-selected": {
    color: "#fff",
    opacity: 1,
    fontWeight: 600,
    background: "#fff2",
    borderRadius: 8,
  },
}));

const SearchBox = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 24,
  backgroundColor: "#fff",
  marginLeft: theme.spacing(5),
  width: 350,
  display: "flex",
  alignItems: "center",
  padding: "2px 12px",
  // Responsive width adjustment: full width on small screens
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginLeft: 0,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

export default function NavBar({ tab, onTabChange }) {
  const navigate = useNavigate();
  const theme = useTheme();

  // Detect if screen width is small (sm breakpoint or below)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // State to control drawer (hamburger menu) open/close on mobile
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Handle tab changes and navigate routes accordingly
  const handleTabChange = (event, newValue) => {
    onTabChange && onTabChange(event, newValue);
    if (newValue === 0) navigate("/womenclothing");
    else if (newValue === 1) navigate("/menclothing");
    else if (newValue === 2) navigate("/kidsclothing");
  };

  // Toggle drawer open or close
  const toggleDrawer = (open) => (event) => {
    // Prevent drawer toggle when using keyboard Tab/Shift keys
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Drawer content for mobile menu, listing the tabs vertically
  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)} // Close drawer when clicking any item
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Women", "Men", "Kids"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              selected={tab === index}
              onClick={() => {
                handleTabChange(null, index);
                setDrawerOpen(false); // Close drawer on selection
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ minHeight: 64, px: { xs: 1, sm: 2 } }}>
        {/* 
          On mobile: Show hamburger menu icon to open drawer 
          On desktop: Hamburger menu hidden 
        */}
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* EVOO logo, clickable to navigate home */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#fff", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          EVOO
        </Typography>

        {/* 
          Tabs visible only on desktop (hidden on mobile) 
          This hides the tab bar on small screens for cleaner UI 
        */}
        {!isMobile && (
          <StyledTabs
            value={tab}
            onChange={handleTabChange}
            textColor="inherit"
            TabIndicatorProps={{ style: { display: "none" } }}
          >
            <Tab label="Women" />
            <Tab label="Men" />
            <Tab label="Kids" />
          </StyledTabs>
        )}

        {/* 
          Flex grow pushes remaining content (search and icons) to the right 
          Adjust flex grow based on screen size for proper spacing 
        */}
        <Box sx={{ flexGrow: 1 }} />

        {/* 
          Search box 
          On mobile: full width and flexible 
          On desktop: fixed width (350px) 
        */}
        <Box sx={{ flexGrow: isMobile ? 1 : 0, maxWidth: isMobile ? "100%" : 350 }}>
          <SearchBox sx={{ width: "100%", marginLeft: isMobile ? 0 : 5 }}>
            <SearchIcon color="action" />
            <StyledInputBase placeholder="Search for product, categories or styles" />
          </SearchBox>
        </Box>

        {/* Another flex grow to push icons to the far right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Action icons (favorites, shopping bag, profile) */}
        <IconButton>
          <FavoriteBorderIcon sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton>
          <Badge badgeContent={2} color="error">
            <ShoppingBagOutlinedIcon sx={{ color: "#fff" }} />
          </Badge>
        </IconButton>
        <IconButton>
          <PersonOutlineIcon sx={{ color: "#fff" }} />
        </IconButton>

        {/* Drawer component for mobile menu */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerList}
        </Drawer>
      </Toolbar>
    </StyledAppBar>
  );
}
