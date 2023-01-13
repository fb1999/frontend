import React from 'react'
import heroData from "../../data/hero";
import { Typography, Box, Grid } from '@mui/material';
import { Title, Label, Content, Colors } from '../../styles/theme';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const styles = {
    paperContainer: {
        display:'flex',
        justifyContent: 'center',
        flexDirection: "row",
        width: "100%",
        textAlign: "left",
    }
}

const Hero = () => {

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

  return (
    <div style={{padding: "2rem 0", backgroundColor: Colors.palette.background.default}}>
        <Slider {...settings}>
            {heroData.map((hero, index) => (
            <Box style={styles.paperContainer}>
                <Grid container key={index} spacing={3} sx={{m:"auto", alignItems: "center", maxWidth: {xs: "100%", lg: "70%"}}}>
                    <Grid xs={6} >
                        <Typography component="div" style={{padding: "1rem"}}>
                            <Box><Label>{hero.label}</Label></Box>
                            <Box><Title variant='title-dark'>{hero.title}</Title></Box>
                            <Box><Content>{hero.content}</Content></Box>
                        </Typography>
                    </Grid>
                    <Grid xs={6}>
                        <Box component="img" src={hero.image} alt={hero.title} sx={{padding: 3}}></Box>
                    </Grid>
                </Grid>
                </Box>
            ))}
        </Slider>
    </div>
  )
}

export default Hero;