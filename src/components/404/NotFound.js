import React from 'react';
import {
  Box, CardContent, Container, Grid, Typography, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: '#f1f1f1',
    width: '30rem',
    height: '30rem',
  },
});

function NotFound() {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid
        container
        alignItems="center"
        direction="column"
        justify="center"
        className={classes.root}
      >
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
      </Grid>
    </Grid>
  );
}

export default NotFound;
