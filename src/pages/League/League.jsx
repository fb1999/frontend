import React from 'react'
import { Colors, Content, Label, Title} from '../../styles/theme';
import {Box, Typography, Button, ThemeProvider} from '@mui/material/';
import Stats from "../../components/Stats/Stats"
import theme from '../../styles/theme';

const League = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{backgroundColor: Colors.palette.background.medium}}>
        <Box sx={{ m: "auto", pt: 6, pl: {xs:"2.5rem", lg:"1.5rem"},  pr: {xs:"2.5rem", lg:"1.5rem"}, pb: "4rem", alignItems: "center", maxWidth: {xs: "100%", lg: "65%"}}}>
          <div style={{position: "relative", p:0, m:0}}>
            <Box component="img" src="/images/wihl.jpg" alt="test" sx={{width:"100%", p:0}}></Box>
          </div>
          <Typography component="div">
            <Box sx={{mb: "2rem", mt: "2.5rem"}}><Title variant='title-dark'>WIHL</Title></Box>
            <Box sx={{mb: "1.5rem"}}><Label>MEDNARODNA ŽENSKA HOKEJSKA LIGA</Label></Box>
            <Box><Content>
              V sklopu enodelnega tekmovanja ekipe igrajo v enotni skupini po 4-krožnem ligaškem sistemu. V štirih krogih vsaka ekipa igra proti vsaki doma in na tujem po dvakrat. Ekipe na vsaki tekmi igrajo do zmage. V primeru neodločenega rezultata po 60 minutah tekme, se igra podaljšek 5 minut oz. do zadetka s po 3 igralkami v polju in vratarko, na kar se izvajajo kazenski streli: prva serija po 5 kazenskih strelov izmenično, nato po potrebi po 1 kazenski strel izmenično do zmage. Za zmago po 60 minutah igre ekipa dobi 3 točke, za zmago v podaljšku oz. po kazenskih strelih 2 točki, za poraz v podaljšku oz. po kazenskih strelih 1 točko, za poraz po 60 minutah igre 0 točk.
              <br/>
              <br/>Tekmovanje WIHL članice je tudi tekmovanje za državno prvenstvo članic v sezoni 2022/23. Naslov državnih prvakinj osvoji najvišje uvrščena slovenska ekipa.
            </Content></Box>
          </Typography>
          <Typography component="div" sx={{mt: 5}}>
            <Box sx={{mb: "1.5rem"}}><Label>STATISTIKA</Label></Box>
            <Box>
              <Stats/>
            </Box>
          </Typography>
          <a style={{textDecoration: "none"}} href='https://hokej.si/stat/?stat_c=151'><Button variant='filled' color='secondary'sx={{mt: "3rem"}}>OGLED CELOTNE STATISTIKE</Button></a>
        </Box>
      </div>
    </ThemeProvider>
  )
};

export default League;