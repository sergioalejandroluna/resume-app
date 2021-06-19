import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Header extends React.Component {

  render() {
    const {name,label,picture} = this.props
    return (
        <AppBar position="static" className="content">
          <Grid container
            direction="row"
            justify="space-between"
            alignItems="center">
            <Grid item  sm={6} md={6} lg={6} xs={6}>
              <Typography variant="h3" color="inherit">{name}</Typography>
              <Typography variant="h5" color="inherit">{label}</Typography>
              <br/>
              <Button color="secondary" variant="contained" target="_blank" href="resume.pdf">Download full version</Button>
            </Grid>
            <Grid item  sm={6} md={6} lg={6} xs={6} className="avatar">
              <Avatar alt="Sergio Luna" src={picture} className="avatar_image"/>
            </Grid>
          </Grid>
        </AppBar>
    );
  }
}

export default Header;
