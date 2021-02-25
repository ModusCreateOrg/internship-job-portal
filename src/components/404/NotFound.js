import React from 'react';
import {
  Box, Card, CardContent, Container, Typography, makeStyles,
} from '@material-ui/core';

import '../styles.css';

const useStyles = makeStyles({
  root: {
    background: '#f1f1f1',
    margin: 'auto',
    width: '30rem',
    height: '30rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  box: {
    margin: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function NotFound() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Container className={classes.box}>
          <Box mb={3}>
            <Typography align="center" color="textPrimary" variant="h4">
              404 Error
            </Typography>

            <Typography align="center" color="textSecondary" variant="body1">
              Webpage Not Available
            </Typography>
          </Box>
        </Container>
      </CardContent>
    </Card>
  );
}

export default NotFound;
