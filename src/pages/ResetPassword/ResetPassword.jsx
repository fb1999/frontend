import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Box, Button, TextField, Typography, Link } from '@mui/material/';

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const {data} = {email};
        await axios.post("http://localhost:5000/forgot-password", data);
        setEmail("");
        navigate("/login");
        } catch (err) {
          console.error(err);
        }
      };

  return (
    <div style={{height: '100vh', backgroundColor: "#84B2D0", paddingTop: "10rem"}}>
        <Box component="form" noValidate onSubmit={handleSubmit} display="flex" flexDirection="column" maxWidth={400} alignItems="center" justifyContent="center"  margin="auto" padding={5} borderRadius={5} sx={{backgroundColor: 'white', ":hover": {boxShadow: "5px 5px 10px #698ea6"}}}>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }} marginBottom={3} padding={2}>Password reset</Typography>
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
          <Button type='submit'>SUBMIT</Button>
          <p><Link to='/register'>SignUp</Link></p>
        </Box>
    </div>
  )
}

export default ResetPassword;