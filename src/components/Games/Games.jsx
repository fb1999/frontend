import React from 'react'
import {Box, ThemeProvider, Grid, Paper} from "@mui/material";
import { Colors, TeamLogo, TeamTitle, Title} from "../../styles/theme";
import games from "../../assets/images/games.svg"
import theme from "../../styles/theme";
import gamesShedule from "../../data/games";


const styles = {
    paperContainer: {
        display:'flex',
        justifyContent: 'center',
        flexDirection: "column",
        backgroundImage: `url(${games})`,
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

const Games = () => {
    const today = new Date();
    const checkDate = gamesShedule.filter((items) => {
        return items.date > today;
    });

    const sortedData = checkDate.sort(
        (a, b) => Number(a.date) - Number(b.date)
    );

    const upcomingGame = sortedData[0];

  return (
    <ThemeProvider theme={theme}>
        <div id="orl__games" style={{background: Colors.palette.background.light}}>
            <Box style={styles.paperContainer}>
                <Grid container spacing={3} sx={{m:"auto", alignItems: "center", maxWidth: {xs: "100%", lg: "70%"}}}>
                    <Grid item xs={12} >
                        <Title variant="title-dark" >PRIHAJAJOČE TEKME</Title>
                    </Grid>
                    <Grid item xs={5} sx ={{p: "0.5rem"}}>
                        <Paper elevation={0} sx={{p: "1rem", width: "220px", m: "auto"}}>
                            <TeamLogo src={upcomingGame.imageHome} alt={upcomingGame.homeTeam} />
                            <TeamTitle>{upcomingGame.homeTeam}</TeamTitle>
                        </Paper>
                    </Grid>
                    <Grid item xs={2} sx ={{m: "auto"}}>
                        <Title sx ={{m: "1rem"}} variant="title-dark" >:</Title>
                    </Grid>
                    <Grid item xs={5} sx ={{p: "0.5rem"}}>
                        <Paper elevation={0} sx={{p: "1rem", width: "220px", m: "auto"}}>
                            <TeamLogo src={upcomingGame.imageAway} alt={upcomingGame.awayTeam} />
                            <TeamTitle>{upcomingGame.awayTeam}</TeamTitle>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <h6>{new Date(upcomingGame.date).toLocaleDateString()}</h6>
                            <p>{upcomingGame.location}</p>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    </ThemeProvider>
  )
}

export default Games;