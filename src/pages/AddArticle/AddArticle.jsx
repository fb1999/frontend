import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Box,  Grid,  TextField, Typography, Button} from '@mui/material/';
import axios from 'axios';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { Colors, Title } from '../../styles/theme';
//import camera from "../../assets/images/camera.jpg";

const AddArticle = () => {
	const navigate = useNavigate();
	const [inputs, setInputs] = useState({
    title: "",
    date: new Date(),
	});
  const [image, setImage] = useState([]);
  const [content, setContent] = useState("");
  const { title, date} = inputs;

	const handleChange = (name) => (e) => {
    setInputs({ ...inputs, [name]: e.target.value });
  };

  //handle and convert it in base 64
  const handleImage = (e) =>{
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };

  const setFileToBase = (file) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{
      setImage(reader.result);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post("http://localhost:5000/articles/add", {title, content, date, image});
      if (data.success === true){
        setInputs({ ...inputs, title: "", date: "" });
        setImage('');
        setContent("");
        console.log('Article created!');
      }
      navigate("/articles");
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
        <Box component="form" onSubmit={submitForm}>
        <Grid container spacing={2}>
          <Grid xs={12} md={8} sx={{p: "2rem"}}>
            <div style={{padding: "1rem", border: "solid 1px lightgray", borderRadius: "5px", backgroundColor: "white"}}>
              <TextField
		  					required
		  					placeholder="Title"
		  					name="title"
		  					value={title}
		  					onChange={handleChange("title")}
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
		  					disabled={!title || !content}
		  					color="primary"
		  					variant="contained"
		  					sx={{width: "150px", mt: "1.5rem"}}
		  					>POST
		  				</Button>
            </div>
          </Grid>
          <Grid xs={4} sx={{p: "2rem"}}>
            <div style={{padding: "1rem", width: "285px", border: "solid 1px lightgray", borderRadius: "5px", backgroundColor: "white"}}>
              <Box>
                <input onChange={handleImage}  type="file" id="formupload" name="image" className="form-control"  />
                <label className="form-label" htmlFor="form4Example2">Image</label>
              </Box>
              <img className="img-fluid" src={image} alt="" />
            </div>
          </Grid>
        </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default AddArticle;
