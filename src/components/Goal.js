import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

function Goal(props) {
  return (
    <AppBar position="static" className="content_goal">
        <Grid container
          direction="row"
          justify="space-between"
          alignItems="center"
          >
          <Grid item sm={12} md={12} lg={12} xs={12}>
            <Typography variant="subtitle1">Apply information technologies to make more efficient processes and tasks, in order to meet the information needs of the everyday world.</Typography>
          </Grid>
        </Grid>
        </AppBar>
  );
}

export default Goal;
