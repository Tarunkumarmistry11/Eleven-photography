import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const drawerWidth = 240;
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery"},
  { name: "Videos", path: "/videos" },
  { name: "Prints", path: "/prints" },
  { name: "Presets", path: "/presets" },
  { name: "Contact", path: "/contact" }
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

 
  const selectedItem=location.pathname

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, letterSpacing: "10px" }}>
        EL3V3N
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText 
              primary={
                <Link 
                  to={item.path} 
                  style={{ 
                    display: 'flex',
                    justifyContent: 'center', 
                    textDecoration: 'none', 
                    color: selectedItem === item.path ? 'grey' : 'inherit' // Change color based on selection
                  }}
                >
                  {item.name}
                </Link>
              } 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              color: '#000',
              display: { xs: 'block', sm: 'none' }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'block',
              textAlign: { xs: 'center', sm: 'left' },
              color: "#000",
              letterSpacing: "10px",
              mt: { xs: 0, sm: 0 }
            }}
          >
            EL3V3N
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, color: "#000", letterSpacing: "10px" }}>
            {navItems.map((item, index) => (
              <Button 
                key={index} 
                component={Link} 
                to={item.path} 
                sx={{ 
                  color: selectedItem === item.path ? 'grey' : '#000' // Change color based on selection
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, background: "blur" }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
