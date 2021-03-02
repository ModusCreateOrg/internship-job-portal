import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    background: '#f1f1f1',
    width: '30rem',
    height: '30rem',
  },
});

function CustomCard({ children }) {
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
        {children}
      </Grid>
    </Grid>
  );
}

CustomCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomCard;
