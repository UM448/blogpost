import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Container, Grid } from '@material-ui/core';
import LandscapeCard from './cardHover';

import { AppBar, Toolbar, Typography, Container, Grid, Paper, Link, CssBaseline } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    placeItems: 'center',
    margin: theme.spacing(3, 1.5),
    padding: theme.spacing(10, 0),
  },
  cardContainer: {
    display: 'grid',
    rowGap: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
}));

const Cards = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container className={classes.cardContainer}>
        <LandscapeCard
          imgSrc="assets/img/landscape-1.png"
          description="Vancouver Mountains, Canada"
          title="The Great Path"
        />
        <LandscapeCard
          imgSrc="assets/img/landscape-2.png"
          description="Poon Hill, Nepal"
          title="Starry Night"
        />
        <LandscapeCard
          imgSrc="assets/img/landscape-3.png"   
          description="Bojcin Forest, Serbia"
          title="Path Of Peace"
        />
      </Grid>
    </Container>
  );
};

// export default Card;





const Card = () => {
    const classes = useStyles();
   return (
    <>
      <CssBaseline />
      <Header />
      <NavBar />

      
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
     
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
          <Cards/>
            <MainContent />
          </Grid>
          <Grid item xs={12} md={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
   <Footer />
    </>
  );
};

const Header = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar style={{ justifyContent: 'center' }}>
        <Typography variant="h4">GeeksforGeeks</Typography>
        <Typography variant="subtitle1">A computer science portal for geeks</Typography>
      </Toolbar>
    </AppBar>
  );
};

const NavBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#242424' }}>
      <Toolbar>
        <Link href="#" color="inherit" style={{ padding: '10px' }}>
          Home
        </Link>
        <Link href="#" color="inherit" style={{ padding: '10px' }}>
          HTML
        </Link>
        <Link href="#" color="inherit" style={{ padding: '10px' }}>
          CSS
        </Link>
        <Link href="#" color="inherit" style={{ padding: '10px' }}>
          JavaScript
        </Link>
        <Link href="#" color="inherit" style={{ padding: '10px' }}>
          ReactJS
        </Link>
      </Toolbar>
    </AppBar>
  );
};

const MainContent = () => {
  return (
    <>
      <Article
        title="HTML"
        date="Published on December 11, 2023 by GeeksforGeeks"
        content="HTML stands for HyperText Markup Language. It is used to design the web pages. With the help of HTML, you can create a complete website structure. HTML is the combination of Hypertext and Markup language. Hypertext defines the link between the web pages and markup language defines the text document within the tag that define the structure of web pages."
      />
      <Article
        title="CSS"
        date="Published on December 10, 2023 by GeeksforGeeks"
        content="CSS (Cascading Style Sheets) is used to style web pages. Cascading Style Sheets are fondly referred to as CSS. The reason for using this is to simplify the process of making web pages presentable. It allows you to apply styles on web pages. More importantly, it enables you to do this independently of the HTML that makes up each web page."
      />
      <Article
        title="JavaScript"
        date="Published on December 09, 2023 by GeeksforGeeks"
        content="JavaScript (JS) is the most popular lightweight, interpreted compiled programming language. It can be used for both Client-side as well as Server-side developments. JavaScript also known as a scripting language for web pages. This JavaScript Tutorial is designed to help both beginners and experienced professionals master the fundamentals of JavaScript and unleash their creativity to build powerful web applications. From basic syntax and data types to advanced topics such as object-oriented programming and DOM manipulation."
      />
      <Article
        title="ReactJS"
        date="Published on December 08, 2023 by GeeksforGeeks"
        content="ReactJS is a declarative, efficient, and flexible JavaScript library for building user interfaces. It is an open-source, component-based front-end library that is responsible only for the view layer of the application. ReactJS is not a framework, it is just a library developed by Facebook to solve some problems that we were facing earlier."
      />
    </>
  );
};

const Article = ({ title, date, content }) => {
  return (
    <Paper style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {date}
      </Typography>
      <Typography variant="body1" style={{ textAlign: 'justify' }}>
        {content}
      </Typography>
    </Paper>
  );
};

const Sidebar = () => {
  return (
    <Paper style={{ padding: '20px', backgroundColor: '#c9c9c9' }}>
      <Typography variant="h6">Recent Posts</Typography>
      <ul>
        <li>
          <Link href="#" color="inherit">
            HTML
          </Link>
        </li>
        <li>
          <Link href="#" color="inherit">
            CSS
          </Link>
        </li>
        <li>
          <Link href="#" color="inherit">
            JavaScript
          </Link>
        </li>
        <li>
          <Link href="#" color="inherit">
            ReactJS
          </Link>
        </li>
      </ul>
    </Paper>
  );
};

const Footer = () => {
  return (
    <AppBar position="fixed" style={{ top: 'auto', bottom: 0, backgroundColor: '#242424' }}>
      <Toolbar style={{ justifyContent: 'center' }}>
        <Typography variant="body2" color="inherit">
          © 2023 Your Blog Name. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Card;

