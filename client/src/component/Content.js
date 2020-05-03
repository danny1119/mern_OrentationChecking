import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

export default function Content(props) {
  return (
  <Fragment>
     <Typography component="h1"
                      variant="h2"
                      align="center"
                      color="textPrimary"
                      gutterBottom>
            GSU Orientation
          </Typography>
          <Typography variant="h5"
                      align="center"
                      color="textSecondary"
                      paragraph>
            New Student Orientation is Georgia State’s official undergraduate student orientation program. Your virtual experience will be hosted on your selected orientation date
          </Typography>
  </Fragment>

  );
}
