import React, { useState } from 'react';
import {Box, Card, CardMedia, CardContent, ThemeProvider, Typography} from "@mui/material";
import { Colors, Title} from "../../styles/theme";
import theme from "../../styles/theme";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlayersData from '../../data/players';
import players from "../../assets/images/players.svg"
import { styled } from '@mui/material/styles';

const styles = {
  paperContainer: {
      display:'flex',
      justifyContent: 'center',
      flexDirection: "column",
      backgroundImage: `url(${players})`,
      backgroundSize: 'contain',
      backgroundRepeat: "no-repeat",
      backgroundPositionX: 'center',
      backgroundPositionY: 'top',
      width: "100%",
      textAlign: "center",
      p: 2,
      mt: 2,
  },
  gridItem: {
      p: 1,
      textAlign: "center",
  }
};


const CardInfo = styled(CardContent)(({theme}) => ({
  '&:last-child': {
      paddingBottom: theme.spacing(2),
    }
}));

const SimpleSlider = () => {
    const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: "/images/default-avatar",
    }));
  };
  return (
    <ThemeProvider theme={theme}>
    <div id="orl__players-slider" style={{background: Colors.palette.background.light}}>
      <Box style={styles.paperContainer}>
          <Box sx={{ m: "auto", alignItems: "center", maxWidth: {xs: "100%", lg: "70%"}}}>
              <div>
                <Title variant="title-dark" >IGRALKE</Title>
              </div>
              <Slider {...settings}>
                {PlayersData.map((player, index) => (
                  <Card key={index} sx={{ maxWidth: 250, position: "relative" }}>
                    <Box sx={{ position: 'relative'}}>
                      <CardMedia
                        component="img"
                        height="350"
                        image={
                          defaultImage[player.name] === player.name
                            ? defaultImage.linkDefault
                            : player.imageUrl
                        }   
                        alt={player.name}
                        onError={handleErrorImage}
                        />
                    </Box>
                    <CardInfo>
                        <Typography variant="h6" gutterBottom component="div">
                            #{player.number}
                        </Typography>

                        <Typography mb={0} variant="subtitle1" gutterBottom component="div">
                        {player.name}
                        </Typography>
                        <Typography mb={0} variant="subtitle1" gutterBottom component="div">
                        {player.position}
                        </Typography>
                    </CardInfo>
                  </Card>
                ))}
              </Slider>
          </Box>
        </Box>
        </div>
      </ThemeProvider>
  )
}

export default SimpleSlider;