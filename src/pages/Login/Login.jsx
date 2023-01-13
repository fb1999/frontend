import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { Box, Button, Grid, TextField, Typography, Link } from '@mui/material/';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {getLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    try {
    const loginData = {
      email,
      password,
    };
    await axios.post("http://localhost:5000/auth/login", loginData);
    getLoggedIn();
    
    navigate("/articles");
    } catch (err) {
      console.error(err);
    }
  };
    
  return (
    <div style={{height: '100vh', backgroundColor: "#84B2D0", paddingTop: "10rem"}}>
        <Box component="form" noValidate onSubmit={login} display="flex" flexDirection="column" maxWidth={400} alignItems="center" justifyContent="center"  margin="auto" padding={5} borderRadius={5} sx={{backgroundColor: 'white', ":hover": {boxShadow: "5px 5px 10px #698ea6"}}}>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }} marginBottom={3} padding={2}>Login</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container sx={{ mt: 4 }}>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
    </div>
  )
}

export default Login;