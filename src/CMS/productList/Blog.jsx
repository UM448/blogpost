import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid, Chip, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  marginBottom: '20px',
});

const Blog = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h1" align="center" gutterBottom>
        MY BLOG
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Welcome to the blog of <span className="w3-tag">unknown</span>
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <StyledCard>
            <CardMedia component="img" src="/w3images/woods.jpg" alt="Nature" />
            <CardContent>
              <Typography variant="h3">
                TITLE HEADING
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Title description, <span className="w3-opacity">April 7, 2014</span>
              </Typography>
              <Typography variant="body1">
                Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.
                Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.
                Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
              </Typography>
              <Button variant="outlined">READ MORE »</Button>
            </CardContent>
          </StyledCard>

          <StyledCard>
            <CardMedia component="img" src="/w3images/bridge.jpg" alt="Norway" />
            <CardContent>
              <Typography variant="h3">
                BLOG ENTRY
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Title description, <span className="w3-opacity">April 2, 2014</span>
              </Typography>
              <Typography variant="body1">
                Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.
                Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.
                Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
              </Typography>
              <Button variant="outlined">READ MORE »</Button>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia component="img" src="/w3images/avatar_g.jpg" alt="My Name" />
            <CardContent>
              <Typography variant="h4">
                My Name
              </Typography>
              <Typography variant="body2">
                Just me, myself and I, exploring the universe of unknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h4">
                Popular Posts
              </Typography>
              <ul>
                <li>
                  <Avatar src="/w3images/workshop.jpg" />
                  <Typography variant="body1">Lorem</Typography>
                  <Typography variant="body2">Sed mattis nunc</Typography>
                </li>
                <li>
                  <Avatar src="/w3images/gondol.jpg" />
                  <Typography variant="body1">Ipsum</Typography>
                  <Typography variant="body2">Praes tinci sed</Typography>
                </li>
                <li>
                  <Avatar src="/w3images/skies.jpg" />
                  <Typography variant="body1">Dorum</Typography>
                  <Typography variant="body2">Ultricies congue</Typography>
                </li>
                <li>
                  <Avatar src="/w3images/rock.jpg" />
                  <Typography variant="body1">Mingsum</Typography>
                  <Typography variant="body2">Lorem ipsum dipsum</Typography>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h4">
                Tags
              </Typography>
              <div>
                <Chip label="Travel" />
                <Chip label="New York" />
                <Chip label="London" />
                <Chip label="IKEA" />
                <Chip label="NORWAY" />
                <Chip label="DIY" />
                <Chip label="Ideas" />
                <Chip label="Baby" />
                <Chip label="Family" />
                <Chip label="News" />
                <Chip label="Clothing" />
                <Chip label="Shopping" />
                <Chip label="Sports" />
                <Chip label="Games" />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <footer>
        <Button disabled>Previous</Button>
        <Button>Next »</Button>
        <Typography variant="body2">
          Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>
        </Typography>
      </footer>
    </Container>
  );
};

export default Blog;