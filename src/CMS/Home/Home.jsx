import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';




import  styled  from '@emotion/styled';

const StyledBox = styled(Box)`
  background: rgba(255, 255, 255, 0.2); /* White background with transparency */
  border: 2px solid white; /* White border */
  padding: 16px; /* Padding inside the box */
  backdrop-filter: blur(10px); /* Blur effect */
  border-radius: 8px; /* Rounded corners */
  max-width: 600px; /* Maximum width of the box */
  margin: 20px auto; /* Center the box with margin */
`;

const StyledTypography = styled(Typography)`
  font-style: italic;
  font-weight: bold;
  color: #4a4a4a; /* Suitable font color */
  
`;

const Highlight = styled('span')`
  color: #213363; /* Different font color for span */
`;


const useStyles = makeStyles((theme) => ({
  scene: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  sky: {
    backgroundColor: '#87CEEB', // light blue
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
    animation: '$skyAnimation 10s infinite',
  },
  sun: {
    backgroundColor: '#FFD700', // yellow
    borderRadius: '50%',
    position: 'absolute',
    top: '10%',
    left: '80%',
    width: '10%',
    height: '10%',
    animation: '$sunAnimation 10s infinite',
  },
  mountain: {
    backgroundColor: '#808080', // gray
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '50%',
  },
  
  person: {
    position: 'relative',
    bottom: '10%',
    left: '1%',
    transform: 'translateX(-50%)',
    animation: '$personAnimation 10s infinite',
  },
  welcomeText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  '@keyframes skyAnimation': {
    '0%': { backgroundColor: '#87CEEB' },
    '50%': { backgroundColor: '#FFD700' },
    '100%': { backgroundColor: '#87CEEB' },
  },
  '@keyframes sunAnimation': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.2)' },
    '100%': { transform: 'scale(1)' },
  },
  '@keyframes birdsAnimation': {
    '0%': { transform: 'translateX(0)' },
    '50%': { transform: 'translateX(50%)' },
    '100%': { transform: 'translateX(0)' },
  },
  '@keyframes personAnimation': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0)' },
  },
}));

const Scene = () => {
  const classes = useStyles();

  return (
    <div className={classes.scene}>
      <div className={classes.sky}></div>
      <div className={classes.sun}></div>
      <div className={classes.mountain}></div>
     
      
      <Box className={classes.welcomeText}>
     
      
        

        <StyledBox>
        <Typography className={classes.person} variant="h5" style={{ fontStyle: 'italic' }}>
          Welcome to daily journaling 📝 
          
        </Typography>
       
      <StyledTypography variant="body1">
     
          "Journaling is a powerful tool for personal growth and reflection. 
          It can help you clarify your thoughts, process your emotions, and 
          track your progress towards your goals. 
          By making journaling a daily habit, you can gain insights into 
          your habits, patterns, and beliefs, leading to a deeper understanding 
          of yourself and your life".{' '}
          </StyledTypography>

          <Highlight> Please register yourself if you haven't already or go for the login to start journaling daily. </Highlight>
          
        
        </StyledBox>
      
      </Box>
    </div>
  );
};

export default Scene;
