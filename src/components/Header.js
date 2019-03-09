import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

function Header(props) {
  return (
      <AppBar position="static" className="content">
        <Grid container
          direction="row"
          justify="space-between"
          alignItems="center">
          <Grid item  sm={6} md={6} lg={6} xs={6}>
            <Typography variant="h3" color="inherit">Sergio Luna</Typography>
            <Typography variant="h5" color="inherit">Software Developer</Typography>
          </Grid>
          <Grid item  sm={6} md={6} lg={6} xs={6} className="avatar">
            <Avatar alt="Sergio Luna" src="/pic.jpg" className="avatar_image"/>
          </Grid>
        </Grid>
      </AppBar>
  );
}

export default Header;
