import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../imgs/sanmax.jpeg";
// import "../Form.css";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPass, setPass] = useState("");
  const [userCp, setCp] = useState("");
  // ----------------------------------------------------------------
  const changeUserName = (event) => setUserName(event.target.value);
  const changeEmail = (event) => setEmail(event.target.value);
  const changePass = (event) => setPass(event.target.value);
  const changeCp = (event) => setCp(event.target.value);
  // -------------------------------------------------
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: "350px",
    margin: "10px auto",
  };
  const space = {
    padding: 10,
  };
  const space1 = {
    padding: 50,
  };

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <img src={logo} alt="" srcset="" />
          </Grid>
          <form>
            <TextField
              label="Username"
              placeholder="Username"
              fullWidth
              required
              variant="standard"
              style={space}
              value={userName}
              onChange={changeUserName}
            />
            <TextField
              label="Email"
              placeholder="Email"
              fullWidth
              required
              variant="standard"
              style={space}
              value={userEmail}
              onChange={changeEmail}
            />
            <TextField
              label="Password"
              placeholder="Password"
              fullWidth
              required
              variant="standard"
              style={space}
              value={userPass}
              onChange={changePass}
            />
            <TextField
              label="Confirm Password"
              placeholder="Confirm Password"
              fullWidth
              required
              variant="standard"
              style={space}
              value={userCp}
              onChange={changeCp}
            />
            <Grid align="center" style={space1}>
              <Button
                variant="contained"
                sx={{ bgcolor: "#0077b5" }}
                type="submit"
              >
                Signup
              </Button>
              <p>
                Have an account? <Link to="/signin">Login</Link>
              </p>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  );
};
export default SignUp;
