import {
  Avatar,
  Box,
  Button,
  Chip,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import CartIcon from "./CartIcon";
import "./Navbar.css";
import BtnBg from "../Generic-components/BtnBg";

import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useApp } from "../../Contexts/appContext";
import api from "../../Interceptors/Auth";
import { useEffect, useState } from "react";

const routes = [
  { name: "Home", path: "" },
  { name: "Books", path: "/allBooks" },
];
const logo = "BookShelf";
function Navbar() {
  const { logout } = useApp();
  const navigate = useNavigate();
  const theme = useTheme();
  const [user, setUser] = useState(null);

  let favCount = 10;
  const getToken = () => {
    return localStorage.getItem("token");
  };
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await api.get("http://localhost:3000/user/profile");
      setUser(data);
      console.log(data);
    };
    fetchUser();
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top py-3">
        <div className="container-lg">
          <a className="navbar-brand color-main fw-semibold" href="#">
            {logo}
          </a>

          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title color-main"
                id="offcanvasNavbarLabel"
              >
                {logo}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body align-items-center ">
              {/* Routes */}
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                {routes.map((route) => (
                  <li className="nav-item" key={route.name}>
                    <Link className="nav-link" to={route.path}>
                      {route.name}
                    </Link>
                  </li>
                ))}
                {getToken() && (
                  <li className="nav-item d-lg-none ">
                    <Link className="nav-link" to={"/"}>
                      Log out
                    </Link>
                  </li>
                )}
              </ul>
              <Box>
                {getToken() ? (
                  <>
                    {user && (
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                      >
                        <Avatar
                          alt="Mohamed"
                          src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/89740896_2528669554072512_8339425380305731584_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFVE92s4CHVJh0PAFW5__UtdDuAuQj5zOd0O4C5CPnM55q9zzZ7RYPj9TdwA2aEyS9qETmZHpWXn3I78OgHD7ms&_nc_ohc=I8A1pmIM-WYAX83oVHk&_nc_ht=scontent-lhr8-1.xx&oh=00_AfASPEhMRvfv8p_O-vuOF3xDMXgwdzRCw7ZLuKJfG0ADbQ&oe=6627DE38"
                        />
                        <Typography
                          sx={{
                            color: theme.colors.text.main,
                            fontWeight: 700,
                          }}
                        >
                          {user?.name || "Un known"}
                          {/* {user.name} */}
                        </Typography>
                      </Stack>
                    )}
                  </>
                ) : (
                  <>
                    <BtnBg
                      onClick={() => {
                        navigate("/login");
                      }}
                      label={"Sign in"}
                    />
                  </>
                )}
              </Box>
            </div>
          </div>
          <Box
            sx={{
              ml: "auto ",
              mr: { xs: 1, sm: 2, md: 3 },
            }}
          >
            <CartIcon count={favCount} />
          </Box>
          <Button
            variant="contained"
            onClick={() => {
              logout();
              navigate("/");
            }}
            sx={{
              bgcolor: theme.palette.button.main,
              p: `5px 11px
          `,
              mr: 1,
              borderRadius: "7px",
              "&:hover": { backgroundColor: "#8d27ae" },
              "&:active": { backgroundColor: "#651c7d" },

              [theme.breakpoints.down("sm")]: {
                padding: "12px 11px",
                borderRadius: "7px",

                fontSize: "0.8rem",
              },
            }}
            disableElevation
            disableRipple
          >
            Log out
          </Button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
