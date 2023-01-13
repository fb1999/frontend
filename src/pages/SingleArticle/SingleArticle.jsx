import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Colors, Content, Label, Title} from '../../styles/theme';
import {Box, Typography, Button, ThemeProvider} from '@mui/material/';
import theme from '../../styles/theme';

const SingleArticle = () => {
  const {id} = useParams();

  const [article, setArticle] = useState({
    title: "",
    content: "",
    image: "",
    date: "",
  });

  const datePosted = new Date(article.date).toDateString();
  let displayMonth = datePosted.substring(4, 10);
  let displayYear = datePosted.substring(10);
  let displayDate = `${displayMonth},${displayYear}`;

  useEffect(() => {
    const getArticle = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/articles/${id}`);
        setArticle(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getArticle();
  }, [id]);

  return (
    <ThemeProvider theme={theme}>
    <div style={{backgroundColor: Colors.palette.background.light}}>
      <Box sx={{ m: "auto", pt: 6, pl: {xs:"2.5rem", lg:"1.5rem"},  pr: {xs:"2.5rem", lg:"1.5rem"}, pb: "4rem", alignItems: "center", maxWidth: {xs: "100%", lg: "65%"}}}>
          <Box component="img" src={article.image.url} alt={article.title}></Box>
          <Typography component="div">
              <Box sx={{mb: "2rem", mt: "2.5rem"}}>
                <Title variant='title-dark'>{article.title}</Title>
              </Box>
              <Box sx={{mb: "1.5rem"}}>
                <Label>{displayDate}</Label>
              </Box>
              <Box>
              <Content
								dangerouslySetInnerHTML={{
								__html: (article.content)
								}}
							/>
              </Box>
          </Typography>
          <Button variant='filled' color='secondary'sx={{mt: "2rem"}}>NAZAJ NA NOVICE</Button>
      </Box>
    </div>
    </ThemeProvider>
  )
};

export default SingleArticle;