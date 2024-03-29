import { Avatar, Box, Chip } from "@mui/material";
import CartIcon from "./CartIcon";
import "./Navbar.css";
import BtnBg from "./BtnBg";
import BtnTransBg from "./BtnTransBg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const routes = [
  { name: "Home", path: "" },
  { name: "Books", path: "" },
  { name: "Magazine", path: "" },
  { name: "Textbooks", path: "" },
  { name: "Audiobooks", path: "" },
  { name: "Recomonded", path: "" },
];
const logo = "Books";
function Navbar() {
  const navigate = useNavigate();
  //demo
  const isLogin = false;
  let favCount = 10;
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
            <div className="offcanvas-body align-items-center">
              {/* Routes */}
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                {routes.map((route) => (
                  <li className="nav-item" key={route.name}>
                    <Link className="nav-link" to={route.path}>
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Box>
                {isLogin ? (
                  <Chip
                    avatar={
                      <Avatar
                        alt="Mohamed"
                        src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/89740896_2528669554072512_8339425380305731584_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFVE92s4CHVJh0PAFW5__UtdDuAuQj5zOd0O4C5CPnM55q9zzZ7RYPj9TdwA2aEyS9qETmZHpWXn3I78OgHD7ms&_nc_ohc=I8A1pmIM-WYAX83oVHk&_nc_ht=scontent-lhr8-1.xx&oh=00_AfASPEhMRvfv8p_O-vuOF3xDMXgwdzRCw7ZLuKJfG0ADbQ&oe=6627DE38"
                      />
                    }
                    label="Mohamed"
                    variant="outlined"
                    sx={{
                      borderColor: "#8d27ae",
                      color: "#8d27ae",
                    }}
                  />
                ) : (
                  <>
                    <BtnTransBg
                      label={"Login"}
                      mr={"8px"}
                      onClick={() => {
                        navigate("/login");
                      }}
                    />
                    <BtnBg
                      onClick={() => {
                        navigate("/register");
                      }}
                      label={"Sign up"}
                      navigate={"/login"}
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
              display: isLogin ? "block" : "none",
            }}
          >
            <CartIcon count={favCount} />
          </Box>
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
