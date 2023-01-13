import { Typography, Box, Grid } from '@mui/material';
import React, {useState} from 'react';
import cardData from "../../data/card";
import { Colors} from "../../styles/theme";

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
    },
    overlayBoxShow: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.palette.primary.main,
        width: "100%",
        height: "100%",
        transition: "0.5s ease",
    },
    overlayBox: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.palette.primary.main,
        overflow: "hidden",
        width: 0,
        height: "100%",
        transition: "0.5s ease",
    },
    text: {
        color: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        webkitTransform: "translate(-50%, -50%)",
        msTransform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)",
        whiteSpace: "nowrap"
    }
};

const Cards = () => {

    const [hoveredCard, setHoveredCard] = useState(cardData);

  return (
    <Box display= 'flex' sx={{justifyContent: 'center', background: Colors.palette.primary.main}}>
        <Grid container spacing={0} sx={{m:"auto", alignItems: "center", maxWidth: {xs: "100%", lg: "70%"}}}>
        {cardData.map((card, i) => (
            <Grid xs={12} md={4} key={i} sx={{width: "100%", mt:{xs: 0.7, md: 1.2}, mb:{xs: 0, md: 0.5}}}>
                <div 
                    onMouseLeave={() => {
                    setHoveredCard(-1);
                    }}
                    onMouseEnter={() => {
                      setHoveredCard(i);
                    }}
                    style={styles.gridItem}
                    >
                    <Box component="img" src={card.imageUrl} sx={{width:"100%", p:0}} alt="test"></Box>
                    <div style={
                      hoveredCard === i ? styles.overlayBoxShow : styles.overlayBox
                    }>
                        <Typography component="div">
                            <Box sx={{ fontFamily: 'Heebo', m: 1 }}>{card.label}</Box>
                            <Box sx={{ fontFamily: 'default', m: 1 }}>{card.title}</Box>
                            <Box sx={{ fontFamily: 'default', m: 1 }}>{card.content}</Box>
                        </Typography>
                    </div>
                </div>
            </Grid>
            ))}
        </Grid>
    </Box>
  )
}

export default Cards;
