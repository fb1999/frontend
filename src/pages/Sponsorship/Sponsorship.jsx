import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import ContactForm from '../../components/ContactForm/ContactForm';
import { Title, Label, Content, Colors } from '../../styles/theme';

const Sponsorship = () => {
  return (
    <Box >
      <Box sx={{backgroundColor: Colors.palette.background.default}}>
        <Grid container spacing={2} sx={{ m: "auto", pt: 3, alignItems: "center", maxWidth: {xs: "100%", lg: "70%"}}}>
          <Grid item xs={12} md={6}>
            <Typography component="div" style={{padding: "1rem"}}>
              <Box><Label>ČLANICE PREDSTAVLJAMO</Label></Box>
              <Box><Title variant='title-dark'>KOLEDAR 2023</Title></Box>
              <Box><Content>Pridruži se nam in postani del ekipe HK Triglav članic. Vpisujemo nove kandidatke za hiter, komunikativen, ekipno povezujoč in energičen šport!</Content></Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} >
            <div style={{position: "relative", padding:0, margin:0}}>
              <Box component="img" src="/images/calendar.jpg" sx={{width:"100%", pr:2, pb:5}} alt="test"></Box>    
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{pb: 6, backgroundColor: Colors.palette.background.medium}}>
        <Grid container spacing={2} sx={{ m: "auto", pt: 6, alignItems: "top", maxWidth: {xs: "100%", lg: "70%"}}}>
          <Grid item xs={12} md={7}>
            <Typography component="div" style={{padding: "1rem", textAlign: "top"}}>
              <Box><Title variant='title-dark'>PODPRI ORLICE</Title></Box>
              <Box sx={{mb: "0.7rem", mt: "1rem"}}><Label>POSTANI SPONZOR ALI DONATOR</Label></Box>
              <Box><Content>Članice vabimo vse podjetnike, da nas podprete in omogočite nadaljni razvoj ženskega hokeja v Kranju. Podporo lahko nudite kot sponzor, kjer se sestavi prilagojena pogodba glede na želje in zmožnosti zainteresiranega podjetja ali kot donator. V slednjem primeru se podpiše le pogodba o enkratni donaciji. S pridobljenimi sredstvi si bomo dekleta krila stroške sezone in opreme.
              <br/>
              <br/>Kontaktirajte nas preko obrazca in nam predstavite vaše želje ali nas pokličite:
              <br/>
              <br/><Label>Tel.: 000 000 000</Label>
                </Content>
                </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <div style={{margin: "1rem"}}>
              <ContactForm/>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Sponsorship