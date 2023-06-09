import React from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import logo from "../imgs/sanmax.jpeg";
import { Link } from "react-router-dom";

const SignIn = () => {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: "350px",
    margin: "70px auto",
  };
  const space = {
    padding: 10,
  };
  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <img src={logo} alt="" srcset="" />
          </Grid>
          <TextField
            label="Username"
            placeholder="Username"
            fullWidth
            required
            variant="standard"
            style={space}
          />
          <TextField
            label="Password"
            placeholder="Password"
            fullWidth
            required
            variant="standard"
            style={space}
          />
        </Paper>
        <Grid align="center">
          <Button variant="contained">Login</Button>
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default SignIn;
