import React, { useState } from "react";
import {Box, TextField, Grid, Button, ThemeProvider} from '@mui/material'
import { Colors } from '../../styles/theme';
import theme from '../../styles/theme';
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //const [thankYouNote, setThankYouNote] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email && message) {
        await axios.post("http://localhost:5000/contact", {
          name,
          email,
          message
        })
      }
      //setThankYouNote(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Box component="form" onSubmit={handleSubmit} noValidate display="flex" flexDirection="column" maxWidth={400} alignItems="center" justifyContent="center"  margin="auto" padding={5} borderRadius={3} sx={{backgroundColor: Colors.palette.background.medium}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="Name"
            required
            fullWidth
            id="Name"
            value={name}
		  			onChange={(e)=> setName(e.target.value)}
            label="Name"
            sx={{backgroundColor: Colors.palette.background.light}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            value={email}
		  			onChange={(e)=> setEmail(e.target.value)}
            label="Email"
            name="email"
            sx={{backgroundColor: Colors.palette.background.light}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="user_message"
            label="Message"
            id="user_message"
            value={message}
		  			onChange={(e)=> setMessage(e.target.value)}
            multiline
            rows={5}
            sx={{backgroundColor: Colors.palette.background.light}}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="filled"
        color='secondary'
        sx={{ mt: 3, mb: 1 }}
      >
        POŠLJI
      </Button>
    </Box>
    </ThemeProvider>
  )
};

export default ContactForm;


        
