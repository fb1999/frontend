import React from 'react'
import {Box, Grid, ThemeProvider, Divider, Button, CardMedia} from "@mui/material";
import { Colors, Title, Content, Label} from "../../styles/theme";
import theme from "../../styles/theme";
import livestream from "../../assets/images/live_stream.png";

const NewsContainer = () => {
  return (
    <ThemeProvider theme={theme}>
        <Box id="orl__news-container" sx={{
        background: Colors.palette.background.medium,
        display:'flex',
        justifyContent: 'center'}}>
            <Grid container spacing={2} sx={{ alignItems: "center", maxWidth: {xs: "100%", lg: "70%"}}}>
                <Grid item xs={12}>
                    <Title variant="title-dark" sx={{textAlign: "center", mb: {xs: 2, md: 4}}}>NOVICE</Title>
                </Grid>
                <Grid item md={4} xs={12} >
                    <div sx={{ background: "none"}}>
                        <CardMedia sx={{m: "auto", width: "auto", maxHeight: "400px"}} component="img" image={livestream}>
                        </CardMedia>
                    </div>
                </Grid>
                <Grid item md={8} xs={12} sx={{textAlign: "right"}}>
                    <div>
                        <Label sx={{mb: {xs: 1, md: 3}}}>WIHL</Label>
                        <Content variant='content'>Spremljaj tekme članic preko Hokej TV-ja! Projekt lastne hokejske televizije je nastal zaradi želje, da bi si tekme slovenskih hokejskih klubov in državnih reprezentanc lahko ogledalo čim več ljubiteljev hokeja. Slednjim želijo v slovenski krovni organizaciji zagotoviti ne le kvalitetne prenose hokejskih tekem, temveč možnost spremljanja le teh skozi celotno sezono. </Content>
                        <Divider/>
                        <Button sx={{mt: 4}} variant ="outlined" color="secondary" href='//https://hokejtv.si/'>PRENOS V ŽIVO</Button> 
                    </div>
                </Grid>
            </Grid>
        </Box>
      </ThemeProvider>
  )
}

export default NewsContainer;