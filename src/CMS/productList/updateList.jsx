import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blogDetails, blogUpdate, blogUpdated } from '../../../src/Redux/crudSlice';
import {  useParams,useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Grid,
  CircularProgress,
  Link,
} from '@mui/material';


export default function Update() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [img, setImg] = useState();

  const { blogs, status, blogUpdateDone } = useSelector(state => state.Crud);
  const { id } = useParams();
  
  const [product, setProduct] = useState({
    title: "",
    description: "",
  });

  const [error, setError] = useState("");
  
  useEffect(() => {
    dispatch(blogDetails(id));
  }, [id]);

  useEffect(() => {
    if (blogs) {
      setProduct({
        title: blogs?.title,
        description: blogs?.description,
      });
    }
  }, [blogs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === "title" && value.length === 0) {
      setError(prevState => ({
        ...prevState,
        title: "Title is important"
      }));
    } else if (name === "title") {
      setError(prevState => ({
        ...prevState,
        title: ""
      }));
    }

    if (name === "description" && value.length === 0) {
      setError(prevState => ({
        ...prevState,
        description: "Description is important"
      }));
    } else if (name === "description") {
      setError(prevState => ({
        ...prevState,
        description: ""
      }));
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!product.title) {
      errors.title = "Please write the title";
    }
    if (!product.description) {
      errors.description = "Please write the description";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setError(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("title", product.title);
      formData.append("description", product.description);
      if (img) {
        formData.append("image", img);
      } else {
        formData.append("image", blogs.image);
      }
      dispatch(blogUpdate(formData));

    
}
  };

  useEffect(() => {
    const RedirectUser = () => {
        
       console.log("useEffect Running from blogUpdateDone",blogUpdateDone)

    if(blogUpdateDone){
      console.log("inside UseEffect blog updated blogUpdated",blogUpdateDone)
      navigate("/productList");
    
    dispatch(blogUpdated())
      console.log("navigated to view blogs")}

    };

    RedirectUser();


}, [blogUpdateDone]);




  return (
    
      <Box sx={{ backgroundImage: 'url("/Write4.jpg")', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      <Container >
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                mt: 8,
                p: 4,
                border: '1px solid #ccc',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                backgroundImage: 'url("/Write4.jpg")',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backgroundBlendMode: 'overlay',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Update Product
              </Typography>
              <TextField
                label="Title"
                name="title"
                value={product.title}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                error={!!error.title}
                helperText={error.title}
              />
              <TextField
                label="Description"
                name="description"
                value={product.description}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
                error={!!error.description}
                helperText={error.description}
              />
              <Button
                variant="contained"
                component="label"
                fullWidth
                sx={{ mt: 2, mb: 2 }}
              >
                Upload Image
                <input
                  type="file"
                  hidden
                  onChange={(e) => setImg(e.target.files[0])}
                  accept="image/*"
                />
              </Button>
              {img && (
                <Box sx={{ mt: 2 }}>
                  <img
                    height="70px"
                    src={URL.createObjectURL(img)}
                    alt=""
                    className="upload-img"
                  />
                </Box>
              )}
              {blogs?.image && !img && (
                <Box sx={{ mt: 2 }}>
                  <img
                    height="70px"
                    src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${blogs?.image}`}
                    alt=""
                    className="upload-img"
                  />
                </Box>
              )}
              <Box sx={{ mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={status === "loading"}
                >
                  {status === "loading" ? <CircularProgress size={24} /> : "Submit"}
                </Button>
              </Box>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Go to the <Link href="/productlist"  underline="none">Blog List</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
