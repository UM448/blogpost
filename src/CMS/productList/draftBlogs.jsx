

import React from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Box, Link } from '@mui/material';
import { styled } from '@mui/system';

const gradients = [
  'linear-gradient(to right, #6a11cb, #4E2161)', 
  'linear-gradient(to right, #ffffff, #B08BBB)', 
  'linear-gradient(to right, #c9c6ff, #4E2161)', 
  'linear-gradient(to right, #b8a9c9, #FCF8E8)', 
];

const DraftCard = styled(Card)(({ gradient }) => ({
  margin: '0',
  width: '100%',
  height: '120px',
  transition: 'transform 0.3s ease-in-out, z-index 0.3s ease-in-out',
  background: gradient,
  color: '#000', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    transform: 'scale(1.05)',
    zIndex: 1,
  },
}));




const StyledLink = styled(Link)({
  marginTop: '1px',
  fontSize: '1 rem',
  textDecoration: 'none',
  color: '#3f51b5', 
  fontFamily: 'Cursive', 
  alignSelf: 'center',
  marginBottom: '16px',
});



const DraftListPage = () => {
  const navigate = useNavigate();
  const [deletedDrafts, setDeletedDrafts] = React.useState([]);
  const [disabledDrafts, setDisabledDrafts] = React.useState([]);
  

  const drafts = ['draft1', 'draft2', 'draft3', 'draft4'];
  

  

  React.useEffect(() => {
    const disabledDraftKeys = drafts.filter((draftKey) => !localStorage.getItem(draftKey));
    setDisabledDrafts(disabledDraftKeys);
  }, []);

  const handleDraftButtonClick = (draftKey) => {
    const draftData = JSON.parse(localStorage.getItem(draftKey));
    if (draftData) {
      navigate('/createproduct', { state: { draftData } });
    }
  };

  const handleDeleteButtonClick = (draftKey) => {
    localStorage.removeItem(draftKey);
    setDeletedDrafts((prev) => [...prev, draftKey]); 
  };

  return (
    <Box p={2} display="flex" flexDirection="column"  paddingBottom='40px'>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Serif',  color: '#11235A',}}>
        Draft List
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="stretch" flexGrow={1}>
        {drafts.map((draftKey, index) => (
          <DraftCard key={draftKey} gradient={gradients[index % gradients.length]}>
            <CardContent>
             
              <Typography variant="h6" color='#DF7861'> {(localStorage.getItem(draftKey))&&JSON.parse(localStorage.getItem(draftKey)).title}</Typography>
              <Button
                variant="outlined"
                onClick={() => handleDraftButtonClick(draftKey)}
                disabled={deletedDrafts.includes(draftKey) || disabledDrafts.includes(draftKey)}
                sx={{ mt: 1, color: '#000', borderColor: '#000' }}
              >
                Open Draft
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleDeleteButtonClick(draftKey)}
                disabled={deletedDrafts.includes(draftKey) || disabledDrafts.includes(draftKey)}
                sx={{ mt: 1, color: '#000', borderColor: '#000' }}
              >
                Delete Draft
              </Button>
            </CardContent>
          </DraftCard>
        ))}
      </Box>
      <StyledLink component={RouterLink} to="/createproduct" title="Create Blogs">
        Go Back to Create Page
      </StyledLink>
    </Box>
  );
};

export default DraftListPage;








