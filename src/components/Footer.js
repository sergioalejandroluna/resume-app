import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import CardMedia from '@material-ui/core/CardMedia';

class Footer extends React.Component {
    render(){
    return (
      <AppBar position="static" className="content_footer">
          <Grid container
            direction="row"
            justify="space-between"
            alignItems="center"
            >
            <Grid item sm={5} md={5} lg={5} xs={false}>
            </Grid>
            <Grid item sm={2} md={2} lg={2} xs={12} className="footer">
              <Typography  variant="subtitle1">Made with</Typography>
              <CardMedia
                component="img"
                className="logo-react"
                alt="Logo React"
                image="logo-react.png"
                title="Logo React"
              />
            </Grid>
            <Grid item sm={5} md={5} lg={5} xs={false}>
            </Grid>
          </Grid>
      </AppBar>
    );
  }
}

export default Footer;
