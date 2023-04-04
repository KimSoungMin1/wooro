import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Toolbar,
  Box,
  AppBar,
  IconButton,
  Container,
  Typography,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const Nav = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        backgroundColor: "white",
        borderBottom: "1px solid #e5e7eb",
        padding: "8px 0",
      }}
    >
      <Container maxWidth="xl" className="nav-container">
        <Toolbar disableGutters>
          <img
            src={process.env.PUBLIC_URL + "/imgs/logo.png"}
            alt="logo"
            style={{ cursor: "pointer", height: "20px" }}
            onClick={() => navigate("/")}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              marginThreshold={0}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Typography
                onClick={handleCloseNavMenu}
                sx={{
                  display: "flex",
                  cursor: "pointer",
                  padding: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "100px",
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/imgs/logo.png"}
                  alt="logo"
                  style={{ cursor: "pointer", height: "20px" }}
                  onClick={() => navigate("/")}
                />
                <CloseIcon fontSize="large" />
              </Typography>
              <MenuItem>
                <Typography
                  onClick={() => navigate("/team")}
                  style={{
                    fontFamily: " Open Sans",
                    fontSize: "24px",
                    fontWeight: "500",
                    padding: "10px 0",
                  }}
                >
                  회사소개
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography
                  onClick={() => navigate("/contact")}
                  style={{
                    fontFamily: " Open Sans",
                    fontSize: "24px",
                    fontWeight: "500",
                    padding: "10px 0",
                  }}
                >
                  문의하기
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography
                  onClick={() => navigate("/service")}
                  style={{
                    fontFamily: " Open Sans",
                    fontSize: "24px",
                    fontWeight: "500",
                    padding: "10px 0",
                  }}
                >
                  서비스
                </Typography>
              </MenuItem>
              <MenuItem>
                <Link
                  href="https://blog.naver.com/woorotest"
                  target="_blank"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontFamily: " Open Sans",
                    fontSize: "24px",
                    fontWeight: "500",
                    padding: "10px 0",
                  }}
                >
                  블로그
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              color: "black",
            }}
          >
            <Button
              onClick={() => navigate("/team")}
              sx={{
                color: "black",
                padding: "0 40px",
                fontSize: "15px",
                fontFamily: " Open Sans",
              }}
            >
              회사소개
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              sx={{
                color: "black",
                padding: "0 40px",
                fontSize: "15px",
                fontFamily: " Open Sans",
              }}
            >
              문의하기
            </Button>
            <Button
              onClick={() => navigate("/service")}
              sx={{
                color: "black",
                padding: "0 40px",
                fontSize: "15px",
                fontFamily: " Open Sans",
              }}
            >
              서비스
            </Button>
            <Button>
              <Link
                href="https://blog.naver.com/woorotest"
                target="_blank"
                style={{
                  color: "black",
                  textDecoration: "none",
                  padding: "0 40px",
                  fontSize: "15px",
                  fontFamily: " Open Sans",
                }}
              >
                블로그
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
