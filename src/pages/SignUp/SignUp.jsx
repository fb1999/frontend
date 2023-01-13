import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { Box, Button, Grid, TextField, Typography, Link } from '@mui/material/';

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("") ;

  const {getLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault()  
    try {
      const registerData = {
        lname,
        fname,
        email,
        password,
        passwordVerify,
      };
      await axios.post("http://localhost:5000/auth/register", registerData);
      getLoggedIn();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{height: '100vh', backgroundColor: "#84B2D0", paddingTop: "10rem"}}>
        <Box component="form" noValidate onSubmit={register} display="flex" flexDirection="column" maxWidth={400} alignItems="center" justifyContent="center"  margin="auto" padding={5} borderRadius={5} sx={{backgroundColor: 'white', ":hover": {boxShadow: "5px 5px 10px #698ea6"}}}>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }} marginBottom={3} padding={2}>Signup</Typography>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  id="firstName"
                  onChange={(e) => setFname(e.target.value)}
                  value={fname}
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  onChange={(e) => setLname(e.target.value)}
                  value={lname}
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  label="Email Address"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Verify password"
                  type="password"
                  id="password-verify"
                  onChange={(e) => setPasswordVerify(e.target.value)}
                  value={passwordVerify}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Box sx={{ mt: 3 }}>
                <Link href="#" variant="body2">
                Login
              </Link>
            </Box>
        </Box>
    </div>
  );
}