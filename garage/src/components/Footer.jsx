import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"Copyright © "}
      <Link color="inherit" href="https://sanmax.vercel.app/">
        Sanmax Mercdo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            background:
              "linear-gradient(to right, rgba(0, 0, 0), rgba(101, 0, 0, 0.9))",
          }}
        >
          <Container maxWidth="sm" color="white">
            <Typography variant="body1" align="center">
              <Copyright align="center" />
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
