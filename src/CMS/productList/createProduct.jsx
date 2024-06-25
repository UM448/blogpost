import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create } from '../../Redux/crudSlice';
import { useNavigate,useLocation } from 'react-router-dom';
import {
  Alert,
  Button,
  Box,
  Container,
  Drawer,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  TextareaAutosize,
  CircularProgress,
  Typography,
  Link,
  MenuItem,
  Select, 
} from '@mui/material';
import { styled } from '@mui/system';
import '@fontsource/roboto-slab'; 
import DraftListPage from './draftBlogs'

const CustomTypography = styled(Typography)(({ theme }) => ({
  color: '#fff', 
  fontFamily: 'Roboto Slab, serif',
  fontWeight: 100,
  fontSize: '0.7rem',
  lineHeight: '1.6',
  marginTop: '1rem',
  textAlign: 'center',
}));


const StyledTextarea = styled(TextField)(({ theme }) => ({
  backgroundColor: 'inherit',
  width: '100%',
  
  padding: '0px', 
  
  


  color: '#030637', 
  fontFamily: 'Roboto Slab, serif',
  fontWeight: 100,
  fontSize: '1rem', 
  boxShadow: '0px 8px 6px rgba(0, 0, 0, 0.1)',  
  


  '&:focus': { 
    borderColor: '#387ADF',
    
    outline: 'none',
    
  },

  '&:hover': { 

    borderColor: '#222831',
    outline: 'none',
  },


}));








const inputStyles={  color:'#EEEEEE', 
        boxShadow: '0px 8px 6px rgba(0, 0, 0, 0.1)',  borderRadius: '5px', 

        
      }





      const inputStyles2 = {
        '& .MuiInputBase-input': {
          color: '#11235A', 
        },


           

        '& .MuiInputLabel-root': {
          color: '#11235A', 
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#11235A',
        },
      };
















export default function ProductCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [height, setHeight] = useState('auto');
  const [product, setProduct] = useState({
    title: '',
    description: '', 
    category: '', 
    characterCount: 0,
    wordCount: 0,
    sentenceCount: 0,
    paragraphCount: 0,
  });
  const [error, setError] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { status, det2, err2 } = useSelector((state) => state.Crud);

 
  const [showAlert, setShowAlert] = useState(false);

  const location = useLocation();
  const { draftData } = location.state || {};

  React.useEffect(() => {
    if (draftData) {
      


      setProduct((prevProduct) => ({
        ...prevProduct,
        
      title:(draftData.title || ''),
        description: (draftData.description || ''),
        
      }))




    }
  }, [draftData]);


 






 

  const handleSaveDraft = () => {
    
    if (localStorage.getItem('draft1') && localStorage.getItem('draft2') && localStorage.getItem('draft3') && localStorage.getItem('draft4')) {
      setShowAlert(true);
      return;
    }

    
    for (let i = 1; i <= 4; i++) {
      const draftKey = `draft${i}`;
      if (!localStorage.getItem(draftKey)) {
        
        localStorage.setItem(draftKey, JSON.stringify({ title: product.title, description: product.description }));

        break; 
      }
    }

    

    setProduct((prevProduct) => ({
      ...prevProduct,
      
    title: '',
      description:  '',
      
    }))
  };


const handleResetButton=()=>{

  setProduct((prevProduct) => ({
    ...prevProduct,
    
  title: '',
    description:  '',
    category:  '',
    characterCount: 0,
    wordCount: 0,
    sentenceCount: 0,
    paragraphCount: 0,
    
  }))
}





  
  
  const initialCategories = ["Travel", "Comedy", "Photography","Other",];



  const handleChange = (e) => {
    const { name, value } = e.target;

    
    setProduct({ ...product, [name]: value });
    setHeight(`${e.target.scrollHeight}px`);

    if(name != "description"){
    setProduct((prevProduct) => ({
      ...prevProduct,
      
      characterCount: value.length,
      wordCount: countWords(value),
      sentenceCount: countSentences(value),
      paragraphCount: countParagraphs(value),
    }));}


    
    if (name === 'category') { 
      setError({ ...error, [name]: value.length === 0 ? `${name} is Important` : '' });
  } else {
      setError({ ...error, [name]: value.trim().length === 0 ? `${name} is Important` : '' });
  }

};


function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function countParagraphs(text) {
  return text.split(/\n/).length;
}

function countSentences(text) {
  
  return text.split(/[.!?]+/).filter(Boolean).length;
}


  const validation = () => {
    let errors = {};
    if (!product.title?.trim()) {
      errors.title = "Title is required";
    }
    if (!product.description?.trim()) {
      errors.description = "Description is required";
    }

    if (!product.category?.trim()) {
      errors.category = "Please Assign a category";
    }
    return errors;
  };

  const submitInfo = (e) => {
    e.preventDefault();
    const validationError = validation();
    if (Object.keys(validationError).length === 0) {
      const formData = new FormData();
      formData.append("title", product.title);
      formData.append("description", product.description);
     
      if (img) {
        formData.append("image", img);
      } else {
        formData.append("image", det2.image);
      }

      
      
     
 

      const currentDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });



        




 
    const savedBlogsByCategory = JSON.parse(localStorage.getItem('savedBlogsByCategory')) || {};
    savedBlogsByCategory[product.title] = {
      category: product.category,
      paragraphCount: product.paragraphCount,
      characterCount: product.characterCount,
      wordCount: product.wordCount,
      sentenceCount: product.sentenceCount,
      createdAt: currentDate,
    };
    localStorage.setItem('savedBlogsByCategory', JSON.stringify(savedBlogsByCategory));
  






      dispatch(create(formData));
    } else {
      setError(validationError);
    }
  };

  useEffect(() => {
    if (!err2) {
      navigate("/productlist");
    }
  }, [err2]);



  
   
  
    const toggleDrawer = (open) => () => {
      setIsDrawerOpen(open);
    };
  












  return (
    <div style={{ backgroundImage: 'url("/Write4.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition:'center', padding: '30px', paddingTop: '10px', }}>
      <Container maxWidth="sm">
        
        <div className="Product" >
          <form
            style={{
              height: "30%",
              marginTop: '60px',
              marginLeft: '60px',
              padding: '40px',
              border: '5px solid #fff',
              borderRadius: '20px',
              backdropFilter: 'blur(80px)',
              placeSelf: 'center',
            }}
          >
            
            <Typography variant="subtitle1" style={{ marginTop: '0.5rem',display:'flex',flexGrow:1, justifyContent:'center' }}>
        <Typography variant="h5" align="center"  gutterBottom 
        sx={{...inputStyles,color:"#11235A", 
        
      }}
        
        >
        Delineating My Mind...
        </Typography>
        </Typography>
           
            <Typography variant="h7" gutterBottom>
              
            </Typography>
            <FormControl fullWidth sx={{ marginBottom: '1.5rem' , }}>
              <InputLabel htmlFor="title">Title</InputLabel>
              <Input
                id="title"
                name="title"
                value={product.title}
                onChange={handleChange}
                placeholder="Title is to be unique; Pay heed to existing titles!"
                sx={inputStyles}
              />
              
              <Typography variant="caption" display="block" gutterBottom>
                
                {product.title.length} characters| {countWords(product.title)} words |  {countSentences(product.title)} sentences
              </Typography>
              <FormHelperText error>{error.title}</FormHelperText>
            </FormControl>
            
           
            <Typography variant="h7" gutterBottom>
             
            </Typography>
            <FormControl fullWidth sx={{ marginBottom: '1.5rem' }}>
             

              <TextField
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
               multiline
               
                maxRows={10} 

                label="Description"
     
      variant="outlined"
               
              sx={inputStyles2}
               
              />







              
              <Typography variant="caption" display="block" gutterBottom>
                
                {product.description.length} characters | {countWords(product.description)} words |  {countSentences(product.description)} sentences|{countParagraphs(product.description)} Paragraphs|
              </Typography>
              <FormHelperText error>{error.description}</FormHelperText>
            </FormControl>


            




           
            <Typography variant="h7" gutterBottom>
             
            </Typography>
            <FormControl fullWidth sx={{ marginBottom: '1.5rem' }}>
              <InputLabel htmlFor="category">Category</InputLabel>
              <Select
                id="category"
                name="category"
                value={product.category}
                onChange={handleChange}
                sx={inputStyles}
              >
                {initialCategories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText error>{error.category}</FormHelperText>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: '1.5rem' }}>
              <InputLabel htmlFor="image"></InputLabel>
              <Input
                type="file"
                onChange={(e) => setImg(e.target.files[0])}
                name="img"
                placeholder="Please select an image suitable to your blog!"
                accept="image/*"
                sx={inputStyles}
              />
              {img && (
                <img
                  style={{
                    height: "70px",
                    width: "70px",
                    marginTop: 10,
                    marginBottom: 0.5,
                    border: '1px solid white',
                    boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)',
                  }}
                  src={URL.createObjectURL(img)}
                  alt=""
                  className="upload-img"
                />
              )}
              {!img && det2?.image && (
                <img
                  height="50px"
                  width="50px"
                  src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${det2?.image}`}
                  alt=""
                  className="upload-img"
                />
              )}
              {!img && !det2?.image && <CustomTypography>You can select or do drag-and-drop the image file here to delineate your thoughts</CustomTypography>}
            </FormControl>





            



<Box sx={{ marginTop: '0.5rem',display:'flex',flexGrow:1 ,alignItem:"center" ,justifyContent:"space-between"}} >
            <Button variant="" onClick={handleResetButton} color="primary" sx={{...inputStyles,
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',color:'#11235A',borderRadius: '20px', }}>
                Reset
              </Button>

              <Button variant="contained" onClick={handleSaveDraft}  color="primary" >
                Save as Draft
              </Button>
              {showAlert && (
                <Alert severity="error"  onClose={() => setShowAlert(false)}>
                  All places are full. Cannot save as draft.
                </Alert>
              )}
             



              


<Button  variant=""   sx={{...inputStyles,
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)', borderRadius: '20px',color:'#11235A',}} onClick={toggleDrawer(true)}>Drafts</Button>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <DraftListPage />
        </Box>
      </Drawer>






             
              </Box>
           






<Box sx={{ mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={submitInfo}
                  color="success"
                  fullWidth
                  disabled={status === "loading"}
                >
                  {status === "loading" ? <CircularProgress size={24} /> : "Save and View"}
                </Button>
              </Box>


            




              <Typography variant="subtitle1" style={{ marginTop: '0.5rem',display:'flex',flexGrow:1, justifyContent:'center' }}>
             <Link href="/draftblogs" underline="none"  sx={{color:"#11235A",  margin:'0px 5px'}}>
              Drafts     </Link> | <Link href="/productlist" underline="none"  sx={{color:"#11235A",  margin:'0px 5px',}}>
              Previous Journals     </Link>
            </Typography>

              


            
          </form>
        </div>
      </Container>
    </div>
  );
}
