import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, List, ListItem, ListItemText, Typography, styled, ListItemAvatar, IconButton, Avatar, Snackbar, Alert } from '@mui/material';
import { Description, Delete, BorderColor } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Colors, Title } from '../../styles/theme';

const Articles = () => {

    const ArticlesList = styled('div')(({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      borderRadius: 10,
    }));

    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState(false);

    useEffect(() => {
      const getPost = async() => {
        const response = await axios.get("http://localhost:5000/articles");
        setPosts(response.data);
      };
      getPost()
      .catch(console.error);
    }, []);

    const deletePost = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/articles/${id}`);
      setPosts(
        posts.filter((post) => {
            return post._id !== id;
        })
      );
      setMessage(true);
      } catch (err) {
        console.log(err)
      } 
    };

  return (
    <div style={{backgroundColor: Colors.palette.primary.light, height:"100vh", paddingBottom: "3rem"}}>
    <Snackbar
      open={message}
      autoHideDuration={6000}
      onClose={() => setMessage(false)}>
      <Alert
      	onClose={() => setMessage(false)}
      	severity="success"
      	sx={{ width: "100%" }}
      	>
				Deleted Successfully
      </Alert>
    </Snackbar>
		<Box sx={{ m: "auto", pt: 6, alignItems: "center", maxWidth: {xs: "100%", lg: "60%"}}}>
      <Typography component="div" sx={{mb: "2rem"}}>
        <Title variant='title-light'>Articles</Title>
      </Typography>
			<Box><Button><Link to="/write">ADD NEW</Link></Button></Box>
      <ArticlesList>
          <List>
          {posts.map((post, index) => (
              <ListItem key={index}
                  secondaryAction={
                      <Stack direction="row" spacing={3}>
                          <IconButton edge="end" aria-label="edit">
                              <Link to={`/edit-article/${post._id}`}><BorderColor /></Link>
                          </IconButton>
                          <IconButton onClick={() => deletePost(post._id)} edge="end" aria-label="delete">
                              <Delete />
                          </IconButton>
                      </Stack>
                  }
                  >
                  <ListItemAvatar>
                      <Avatar>
											<Link to={{pathname: `/article/${post._id}`}}><Description /></Link>
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                      primary={post.title}
                      secondary={post.date}
                  />
              </ListItem>
              ))}
          </List>
      </ArticlesList>
    </Box>
    </div>
  )
}

export default Articles;