import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: theme.spacing(1.5),
    '&:hover $cardData': {
      opacity: 1,
      transform: 'translateY(-7rem)',
      transition: 'transform 1s, opacity 0.3s',
    },
    '&:hover': {
      overflow: 'initial',
    },
  },
  media: {
    display: 'block',
    width: '100%',
    borderRadius: theme.spacing(1.5),
  },
  cardData: {
    position: 'absolute',
    bottom: '-9rem',
    left: 0,
    right: 0,
    margin: '0 auto',
    width: 'calc(100% - 1rem)',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 4),
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    borderRadius: theme.spacing(1),
    opacity: 0,
    transform: 'translateY(0.5rem)',
    transition: 'opacity 1s 1s, transform 1s 1s',
  },
  description: {
    fontSize: theme.typography.pxToRem(13),
    marginBottom: theme.spacing(0.5),
  },
  title: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 500,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1.5),
  },
  button: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 500,
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const LandscapeCard = ({ imgSrc, description, title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={imgSrc} alt="landscape" className={classes.media} />
      <CardContent className={classes.cardData}>
        <Typography variant="body2" className={classes.description}>
          {description}
        </Typography>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Button className={classes.button}>Read More</Button>
      </CardContent>
    </Box>
  );
};

export default LandscapeCard;
