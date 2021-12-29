import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  MenuItem,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({ routes }) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routes.map(({ path, exact, name }) => (
              <MenuItem component={NavLink} to={path} exact={exact}>
                {name}
              </MenuItem>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Phi Nguyen" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
                ))}
              </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
