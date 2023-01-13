import React, { useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { BannerText, Colors, CardTitle, Label, Content} from '../../styles/theme';
import {styled, Box, Card, CardMedia, CardContent, Grid, Typography} from "@mui/material"
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const News = () => {

  const Banner = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${"/images/ice.jpg"})`,
    height: "370px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  }));

  const {loggedIn} = useContext(AuthContext);
	const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () =>{
      try {
        const {data: res} = await axios.get("http://localhost:5000/articles");
        setArticles(res);
      } catch (error) {
        console.error(error.message);
      }
    }
    getArticles();
  }, []);

  return (
    <div style={{backgroundColor: Colors.palette.background.light}}>
      <Box sx={{ m: "auto", pb:"4rem", alignItems: "center", maxWidth: {xs: "100%", lg: "70%"}}}>
        <Banner>
          <Typography component="div">
            <BannerText variant='title-dark'>NOVICE</BannerText>
          </Typography>
        </Banner>
          <Box sx={{mt: "3rem", p:{xs:"1rem", lg:0}}}>
            {loggedIn === true && (
            <Box sx={{backgroundColor: Colors.palette.background.dark, mb: 2}}>
              <Typography component="div" sx={{p: 2}}>
              <Link style={{textDecoration: "none", color: "white"}} to={{pathname: '/articles'}}><Box><CardTitle>MODIFY ARTICLES</CardTitle></Box></Link>
              </Typography>
            </Box>
            )}
            <Grid container spacing={2}>
						{articles && articles.map((article, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    sx={{ height: 200 }}
                    src={`url(${article.image.url})`}
                    title={article.title}
                  />
                  <CardContent>
                      <Typography component="div">
                          <Link
                            to={{pathname: `/article/${article._id}`}}
                            style={{textDecoration: "none", color: "black"}}>
                              <Box><CardTitle>{article.title}</CardTitle></Box>
                          </Link>
                          <Box><Label>{new Date(article.date).toLocaleDateString()}</Label></Box>
                          <Box>
														<Content
															dangerouslySetInnerHTML={{
																__html: (article.content.length > 40 ? article.content.substring(0, 40) + '...' : article.content)
															}}
														/>
													</Box>
                      </Typography>
                  </CardContent>
                </Card>
              </Grid>
						))}
            </Grid>
          </Box>
      </Box>
    </div>
  )
}

export default News;