import React from 'react';
import {Box, Card, CardMedia} from '@mui/material';
import { Colors} from "../../styles/theme";
import quotesData from "../../data/quotes";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./quotes.css"

const styles = {
    overlay: {
       position: 'absolute',
       top: '8rem',
       left: '16rem',
       transform: "translateX(-50%)",
       color: 'white',
       backgroundColor: 'black'
    }
 }


const Quotes = () => {

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
    <div style={{padding: "2rem 0", backgroundColor: Colors.palette.secondary.black}}>
        <Box sx={{ m: "auto", alignItems: "center", maxWidth: {xs: "100%", lg: "70%"}}}>
            <Slider {...settings}>
            {quotesData.map((quote, index) => (
                <Card key={index}>
                    <div style={{ position: "relative" }}>
                        <CardMedia component="img" image={quote.imageUrl}/>
                        <div style={styles.overlay}>{quote.content}</div>
                    </div>
                </Card>
            ))}
            </Slider>
        </Box>
    </div>
  )
};

export default Quotes;