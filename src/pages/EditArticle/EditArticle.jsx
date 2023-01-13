import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {Box,  Grid,  TextField, Typography, Button} from '@mui/material/';
import axios from 'axios';
import camera from "../../assets/images/camera.jpg"

import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { Colors, Title } from '../../styles/theme';

const EditArticle = () => {
	const navigate = useNavigate();
  const {id} = useParams();

	const [article, setArticle] = useState({
		title: "",
		content: "",
		image:""
	});
  
	//inputs
  const [title, setTitle] = useState({});
	const [image, setImage] = useState([]);
	const [content, setContent] = useState("");

	//handle and convert it in base 64
	const handleImage = (e) =>{
		const file = e.target.files[0];
		setFileToBase(file);
		console.log(file);
	}

	const setFileToBase = (file) =>{
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () =>{
			setImage(reader.result);
		}
	};

  useEffect(() => {
    const getArticle = async () => {
      try {
        const {data} = await axios.get(`http://localhost:5000/articles/${id}`);
        setArticle(data.data);
				setTitle(data.data);
				setContent(data.data);
				setImage();
      } catch (err) {
        console.log(err);
      }
    };
    getArticle();
  }, [id]);

  const updateArticle = async (e) => {
		e.preventDefault();
		try {
			const {data} = await axios.put(`http://localhost:5000/articles/update/${id}`, {title, content, image});
			if (data.success === true){
        setTitle("");
        setImage('');
        setContent("");
        console.log(article);
      }
      navigate("/news");
    } catch (error) {
      console.log(error);
    }
	};
  
  return (
    <div style={{backgroundColor: Colors.palette.primary.light}}>
    <Box sx={{ m: "auto", pt: 6, alignItems: "center", maxWidth: {xs: "100%", lg: "70%"}}}>
      <Typography component="div" sx={{pl: "1rem"}}>
        <Title variant='title-light'>New Article</Title>
      </Typography>
      <Box component="form" onSubmit={updateArticle}>
      <Grid container spacing={2}>
        <Grid xs={12} md={8} sx={{p: "2rem"}}>
          <div style={{padding: "1rem", border: "solid 1px lightgray", borderRadius: "5px", backgroundColor: "white"}}>
            <TextField
							required
							placeholder="Title"
							name="title"
							value={title}
							onChange={(e) => {setTitle(e.target.value)}}
							sx={{mb: "1rem"}}/>
            <div className="card mt-4">
              <ReactQuill
                className="form-control"
								value={content}
            		onChange={(e) => setContent(e)}
                placeholder="Write something..."
                id="floatingTextarea"
              />
            </div>
            <Button
							type="submit"
							color="primary"
							variant="contained"
							component="span"
							sx={{width: "150px", mt: "1.5rem"}}
							>POST
						</Button>
          </div>
        </Grid>
        <Grid xs={4} sx={{p: "2rem"}}>
            <div style={{padding: "1rem", width: "285px", border: "solid 1px lightgray", borderRadius: "5px", backgroundColor: "white"}}>
              <Box>
                <label htmlFor="image">
                	<input
                	  style={{ display: "none" }}
                	  accept="images/*"
                	  name="image"
										onChange={handleImage}
                	  id="image"
                	  type="file"
                	/>
									<Box component="img" src={setImage ? image : camera} alt="upload-photo" sx={{width: "250px"}}></Box>
                	<Button
										color="primary"
										variant="contained"
										component="span"
										sx={{width: "250px"}}>
                	  Upload image
                	</Button>{" "}
								</label>
              </Box>
            </div>
        </Grid>
      </Grid>
      </Box>
    </Box>
    </div>
  )
};

export default EditArticle;
