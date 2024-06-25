import React, { useState,useEffect } from 'react';
import { Box, Typography, Link, IconButton, Input,InputAdornment } from '@mui/material';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import { LinkedIn as LinkedInIcon } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import { Email, Home as HomeIcon, PostAdd as PostAddIcon  } from '@mui/icons-material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

import PersonIcon from '@mui/icons-material/Person';
import {List,ListItem,ListItemText,Alert} from '@mui/material';
import styled from 'styled-components';
import axios from 'axios'





const Footer = () => {
  const [backgroundColor, setBackgroundColor] = useState('#C5E898'); 
  const colors = [ '#C5E898','#C6CF9B']; 
  const [joke, setJoke] = useState(null);
  const [apiIndex, setApiIndex] = useState(null);
  const [value, setValue] = useState(null);


  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  const listItemStyles ={
    borderRadius: 2, 
    boxShadow: '0 0 5px rgba(7, 102, 173, 1)', 
    padding: 0.01, 
    margin:1,
   
    
    color: '#F3F3F3',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif', 
    fontStyle: 'italic', 
  }

  const listItemStyles2= { borderRadius: 0, 
    boxShadow: '0 0 5px rgba(7, 102, 173, 1)', 
    padding: 0.05,
    backgroundColor:'#29ADB2',
    color: '#F3F3F3',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif', 
    fontStyle: 'italic', }


    const buttonStyles={
      ml: 0.5, 
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: '50%', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)', 
      },
    }


    const alertBoxStyles= {
      width: '600px', 
      height: '80px', 
      overflow: 'auto', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    }

    const StyledListItem = styled(ListItem)`
    display: flex;
    align-items: center;
    
    & .site-map {
      margin-right: 100px; /* Adjust the space between the text and icons */
    }
  
    & .icon-button {
      margin-left: 4px; /* Adjust the space between the icons */
    }
  `;

  

      const apis = [
       
        'https://official-joke-api.appspot.com/random_joke',
        'https://official-joke-api.appspot.com/random_joke',
      ];
    
      const fetchJoke = async () => {
        
        try {
           
            if (apiIndex !== null && apiIndex >= 0 && apiIndex < apis.length) {
         const response = await axios.get(apis[apiIndex]);
          let jokeText = '';
          let severity = 'success'; 
          if (apiIndex === 0) {
             
            jokeText = `${response.data.setup} ${response.data.delivery}`;
            
            severity = 'info'; 
          } else if (apiIndex === 1) {
           
            jokeText = `${response.data.setup} ${response.data.punchline}`;
            severity = 'success'; 
          }
          setJoke({ text: jokeText, severity });
          setApiIndex((prevIndex) => (prevIndex + 1) % apis.length);
        }


        } catch (error) {
          setJoke({ text: "An Error Occured.Might be an Internet issue", severity:'error' });
          console.error('Failed to fetch joke', error);
        }
      };

    

    useEffect(() => {
        let isMounted = true; 
    
        const fetchJokeOnLoad = async () => {
            try {
                const storedIndex = localStorage.getItem("ApiIndex");
                const initialIndex = storedIndex ? parseInt(storedIndex) : 0;
    
                const response = await axios.get(apis[initialIndex]);
    
                let jokeText = '';
                let severity = 'success';
    
                jokeText = initialIndex === 0
                   
                    ? (severity = 'info', `${response.data.setup} ${response.data.punchline}`)
                    : (severity = 'success', `${response.data.setup} ${response.data.punchline}`);
                    console.log("Responseeee",response)
                   
    
                
                if (isMounted) {
                  
                  
                    setJoke({ text: jokeText, severity });
                    setApiIndex((prevIndex) => (prevIndex + 1) % apis.length);
                    localStorage.setItem("ApiIndex", (initialIndex + 1) % apis.length);
                }
    
            } catch (error) {
              setJoke({ text: "An Error Occured", severity:'error' });
                console.error('Failed to fetch joke', error);
            }
        };
    
        if (isMounted) {
            fetchJokeOnLoad();
        }
    
        return () => {
            isMounted = false; 
        };
    }, []); 
    
    
    
    
    
    
    
      const handleButtonClick = () => {
        
       
        fetchJoke();
      };



  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: backgroundColor,
        color: 'white',
        py: 0.01, 
        px: 1,
        
        textAlign: 'center',
        
        position: 'relative',
       
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.2)', 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      
    <List sx={{...listItemStyles2,padding:"0.05px"}}>
        <ListItem >
      <IconButton
        variant="soft"
        size="small"
        sx={buttonStyles}
        onClick={() => changeColor(colors[Math.floor(Math.random() * colors.length)])}
      >
        <ColorLensRoundedIcon />
      </IconButton>
      </ListItem>
      <ListItem>
      <Box sx={{ flexGrow: 0.01, textAlign: 'center' }}>
        <img src="logo512.png" alt="Logo" style={{ width: 50, height: 50, marginBottom: 10 ,
        borderRadius: 2, 
        padding: 1, 
        
      }} />
     
      <Box  >
      
        <Typography variant="h12" sx={{padding:"0.01"}}> 
        <IconButton aria-label="author" style={{ color: 'white',fontSize:"10px",padding: '0.2px'}}>
        <PersonIcon/> © Udichi Mukherjee, {new Date().getFullYear()}
        </IconButton>
       </Typography>
       
        <Typography variant="body2" >
        <IconButton component="a" href="https://www.gmail.com" target="_blank" rel="noopener" variant="plain" aria-label="email" style={{ color: 'white',fontSize:"10px",padding: '0.2px' }}>
        <Email />
       udichimukherjee42@gmail.com
    </IconButton>
    </Typography>
   
        </Box>
       
        </Box>
        </ListItem>
        </List>
        
           
     
     
     
    <List >
      
      
        <ListItem >

        
<IconButton variant="soft" aria-label="smiley" >
<InsertEmoticonIcon />
        </IconButton>

        {joke && (
        <Alert severity={joke.severity} onClose={() => setJoke(null)}            sx={alertBoxStyles}>
         
          {joke.text}
          
        </Alert>
      )}

   
<IconButton variant="soft" aria-label="search" onClick={handleButtonClick} sx={buttonStyles}>
          <SearchIcon />
        </IconButton>
        

</ListItem>
        </List>
        
    
      
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
      <List sx={listItemStyles2}>
        

    
        <Box sx={listItemStyles2}>
        <ListItemText sx={{paddingRight:"2px"}}>Site Map:</ListItemText>
      <IconButton component={Link} href="" target="_blank" rel="noopener" variant="plain">
          <FacebookIcon />
        </IconButton>
        |
        <IconButton component={Link} href="" target="_blank" rel="noopener" variant="plain">
          <GitHubIcon />
        </IconButton>
        |
        <IconButton component="a" href="" target="_blank" rel="noopener" variant="plain">
      <LinkedInIcon />
    </IconButton>
    </Box> 




         <ListItem >
        
        
        <IconButton sx={{ fontSize: '16px', padding: '1px' }}  aria-label="smiley">
       Glad that you've paid a visit!<EmojiEmotionsIcon/> 
        
      </IconButton>
        </ListItem>
      <ListItem sx={listItemStyles2}>
        <ListItemText>You can also find me at:</ListItemText>
       
      <IconButton component={Link} href="https://www.facebook.com/" target="_blank" rel="noopener" variant="plain">
          <FacebookIcon />
        </IconButton>
        |
        <IconButton component={Link} href="https://github.com/" target="_blank" rel="noopener" variant="plain">
          <GitHubIcon />
        </IconButton>
        |
        <IconButton component="a" href="https://www.linkedin.com/" target="_blank" rel="noopener" variant="plain">
      <LinkedInIcon />
    </IconButton>
        </ListItem>
       
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
