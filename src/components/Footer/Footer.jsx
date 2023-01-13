import React from 'react'
import {
    Grid,
    Box,
    List,
    ListItemText,
    Typography,
    Link,
    ThemeProvider
  } from "@mui/material";
import { Colors } from "../../styles/theme";
import theme from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{
        background: Colors.palette.background.dark,
        display:'flex',
        justifyContent: 'center',
        color: Colors.white,
        
        p: { xs: 2, md: 10 },
        pt: 12,
        pb: 3,
      }}>
        
        <Grid container spacing={2} sx={{justifyContent: "center", maxWidth: {xs: "100%", lg: "70%"}}} >
            <Grid item md={4} xs={12}>
                <Typography sx={{fontSize: { xs: '16px', md: '20px' }, color: Colors.palette.secondary.contrastText, fontFamily: "Yantramanav", fontWeight: "500"}}>
                    INFO
                </Typography>
                <List>
                    <ListItemText>
                        <Link lineHeight={2} href="#" underline="none" variant="footer">
                            Ekipa 
                        </Link>
                    </ListItemText>
                    <ListItemText>
                        <Link lineHeight={2} href="https://hktriglav.si/" underline="none" variant="footer">
                            Klub 
                        </Link>
                    </ListItemText>
                    <ListItemText>
                        <Link lineHeight={2} href="#" underline="none" variant="footer">
                            Vpis
                        </Link>
                    </ListItemText>
                </List>
            </Grid>
            <Grid item md={5} xs={12}>
                <Typography sx={{fontSize: { xs: '16px', md: '20px' }, color: Colors.palette.secondary.contrastText, fontFamily: "Yantramanav", fontWeight: "500"}}>
                    KONTAKT
                </Typography>
                <List>
                    <ListItemText>
                        <Link lineHeight={2} href="#" variant="footer" underline="none" >
                            Naslov: Partizanska c. 13, Kranj
                        </Link>
                    </ListItemText>
                    <ListItemText>
                        <Link lineHeight={2} href="#" variant="footer" underline="none">
                            Email: clanicehktriglav@gmail.com
                        </Link>
                    </ListItemText>
                    <ListItemText>
                        <Link lineHeight={2} href="#" variant="footer" underline="none">
                            Tel.: 040 533 676
                        </Link>
                    </ListItemText>
                </List>
            </Grid>
            <Grid item md={2} xs={12}>
                <Typography sx={{fontSize: { xs: '16px', md: '20px' }, color: Colors.palette.secondary.contrastText, fontFamily: "Yantramanav", fontWeight: "500"}}>
                    FOLLOW US
                </Typography>
                <Box sx={{
                    mt: 3,
                    color: Colors.secondary,
                    flexDirection: 'row',
                    }}>
                    <Link lineHeight={2} href="#" variant="footer" ><FacebookIcon sx={{ mr: 2 }} /></Link>
                    <Link lineHeight={2} href="#" variant="footer" ><InstagramIcon /></Link>
                </Box>
                
            </Grid>
            
        </Grid>
        
    </Box>
    </ThemeProvider>
  )
}

export default Footer;