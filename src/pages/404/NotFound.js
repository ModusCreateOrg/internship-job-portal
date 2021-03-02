import React from 'react';
import { Box, CardContent, Typography } from '@material-ui/core';

import CustomCard from '../../components/CustomCard/CustomCard';

function NotFound() {
  return (
    <CustomCard>
      <CardContent>
        <Box mb={3}>
          <Typography align="center" color="textPrimary" variant="h4">
            404 Error
          </Typography>
          <Typography align="center" color="textSecondary" variant="body1">
            Webpage Not Available
          </Typography>
        </Box>
      </CardContent>
    </CustomCard>
  );
}

export default NotFound;
