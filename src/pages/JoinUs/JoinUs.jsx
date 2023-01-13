import React from 'react';
import {Box, Grid, List, ListItem, ListItemIcon, Typography} from '@mui/material'
import ContactForm from '../../components/ContactForm/ContactForm';
import { Title, Label, Content, Colors } from '../../styles/theme';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const styles = {
  gridItem: {
    textAlign: "center",
    position: "relative",
    p: 0,
    m: 0,
  },
  cardBox: {
    p: 1,
    textAlign: "center",
  }
}

const JoinUs = () => {
  return (
    <Box >
      <Box sx={{backgroundColor: Colors.palette.background.default}}>
        <Grid container spacing={2} sx={{ m: "auto", pt: 6, alignItems: "center", maxWidth: {xs: "100%", lg: "70%"}}}>
          <Grid item xs={12} md={6}>
            <Typography component="div" style={{padding: "1rem"}}>
              <Box><Label>VPIS NOVIH ČLANIC</Label></Box>
              <Box><Title variant='title-dark'>POSTANI ORLICA</Title></Box>
              <Box><Content>Pridruži se nam in postani del ekipe HK Triglav članic. Vpisujemo nove kandidatke za hiter, komunikativen, ekipno povezujoč in energičen šport!</Content></Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} >
            <div style={styles.gridItem}>
              <Box component="img" src="/images/locker.jpg" sx={{width:"100%", pr:2, pb:2}} alt="test"></Box>    
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{backgroundColor: Colors.palette.secondary.contrastText}}>
        <Grid container spacing={2} sx={{ m: "auto", pt: 6, alignItems: "center", maxWidth: {xs: "100%", lg: "70%"}}}>
          <Grid item xs={12} md={6} >
            <div style={styles.gridItem}>
              <Box component="img" src="/images/helmet.png" sx={{width:"100%", pr:2, opacity:"15%"}} alt="test"></Box>    
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
            <List>
              <ListItem sx={{mb:4}}>
                <ListItemIcon sx={{mr:-2}}><AddCircleIcon/></ListItemIcon>
                <Label>OPREMO ZA ZAČETEK PRISKRBIMO MI</Label>
              </ListItem>
              <ListItem sx={{mb:4}}>
                <ListItemIcon sx={{mr:-2}}><AddCircleIcon/></ListItemIcon>
                <Label>KONTAKT PRI ŽENSKEM HOKEJU NI DOVOLJEN</Label>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{mr:-2}}><AddCircleIcon/></ListItemIcon>
                <Label>1 MESEC BREZPLAČNIH TRENINGOV</Label>
              </ListItem>
            </List>
          </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{pb: 6, backgroundColor: Colors.palette.background.medium}}>
        <Grid container spacing={2} sx={{ m: "auto", pt: 6, alignItems: "top", maxWidth: {xs: "100%", lg: "70%"}}}>
          <Grid item xs={12} md={7}>
            <Typography component="div" style={{padding: "1rem", textAlign: "top"}}>
              <Box><Title variant='title-dark'>POSTANI ORLICA</Title></Box>
              <Box sx={{mb: "0.7rem", mt: "1rem"}}><Label>KAKO SE VPIŠEM?</Label></Box>
              <Box><Content>Kontaktiraj nas preko obrazca in posreduj osnovne podatke ali nas pokliči. Če še nimaš opreme ti jo za začetek priskrbimo mi, poleg tega pa lahko prvi mesec treninge obiskuješ brezplačno.</Content></Box>
              <Box sx={{mb: "0.7rem", mt: "1rem"}}><Label>VADNINA</Label></Box>
              <Box><Content>Če se boš po preizkusni dobi odločila pridružiti naši ekipi, mesečna vadnina za članice znaša 30€. Dodatno se enkrat letno plača še članarina v višini 24€.</Content></Box>
              <Box sx={{mb: "0.7rem", mt: "1rem"}}><Label>TRENINGI IN TEKMOVANJA</Label></Box>
              <Box><Content>Treningi potekajo od enkrat do trikrat na teden, tekme državnega in mednarodnega prvenstva pa se običajno igrajo ob nedeljah.</Content></Box>
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

export default JoinUs;