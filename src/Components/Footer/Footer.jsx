import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";

import "./Footer.css";
import FooterIcons from "./FooterIcons";
import { grey } from "@mui/material/colors";
function Footer() {
  const theme = useTheme();
  let items1 = ["About us", "Contact us", "Products", "Login", "Sign up"];
  let items2 = [
    "My Account",
    "Orders",
    "Tracking List",
    "Terms",
    "Privecy Policy",
    "FAQ",
  ];

  return (
    <>
      <Box
        className="shadow-lg"
        sx={{ mt: 5, pt: 5, pb: 4, bgcolor: theme.colors.bg.light }}
        component={"footer"}
      >
        <div className="container">
          <Grid container>
            <Grid item md={6} lg={4}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.8rem",
                  color: theme.colors.text.main,
                  "&>span": {
                    color: grey[800],
                    fontSize: "1.2rem",
                  },
                }}
              >
                Book
                <span>Shelf</span>
              </Typography>

              <Typography variant="body2" component="h2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                voluptate qui aliquam esse laboriosam vel accusamus, deleniti,
                cupiditate nesciunt iusto ea harum corporis aspernatur!
                Excepturi
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, my: 2 }}
                component="h2"
              >
                Follow Us
              </Typography>
              <FooterIcons />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              sx={{ px: { lg: 3, xs: 0 }, pt: 5 }}
            >
              {/* Links grid */}
              <Grid container>
                <Grid item xs={6}>
                  <Stack spacing={0}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700 }}
                      component="h2"
                    >
                      Follow Us
                    </Typography>
                    {items1.map((item) => (
                      <Typography
                        key={item}
                        variant="subtitle2"
                        sx={{ mb: "4px" }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700 }}
                      component="h2"
                    >
                      Customer Area
                    </Typography>
                    {items2.map((item) => (
                      <Typography
                        key={item}
                        variant="subtitle2"
                        sx={{ mb: "4px" }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} lg={4}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mt: 5, mb: 2 }}>
                  Don't miss the newest books
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias voluptate qui aliquam esse laboriosam vel accusamus,
                  deleniti, cupiditate nesciunt iusto ea harum corporis
                  aspernatur! Excepturi
                </Typography>
              </Box>

              <Stack direction={"row"} sx={{ mt: 2 }}>
                <input
                  type="text"
                  placeholder="Enter your email here"
                  className="subscription-input"
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#8d27ae",
                    p: "14px",
                    borderRadius: "12px",
                    "&:hover": { backgroundColor: "#8d27ae" },
                    "&:active": { backgroundColor: "#651c7d" },
                    [theme.breakpoints.down("sm")]: {
                      padding: "12px 11px",
                      borderRadius: " 12px",

                      fontSize: "0.8rem",
                    },
                  }}
                  disableElevation
                  disableRipple
                >
                  Subscribe
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}

export default Footer;
