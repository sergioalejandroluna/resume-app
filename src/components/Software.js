import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

function Software(props) {

  return (
        <div>
              <Typography variant="h6" className="title">Software</Typography>
              <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item sm={4} md={4} lg={4} xs={4}>
                  <Typography variant="body2">React</Typography>
                </Grid>
                <Grid item sm={8} md={8} lg={8} xs={8}>
                  <LinearProgress variant="determinate" value={50} />
                </Grid>
              </Grid>
              <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item sm={4} md={4} lg={4} xs={4}>
                  <Typography variant="body2">Ruby On Rails</Typography>
                </Grid>
                <Grid item sm={8} md={8} lg={8} xs={8}>
                  <LinearProgress variant="determinate" value={60} />
                </Grid>
              </Grid>
              <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item sm={4} md={4} lg={4} xs={4}>
                  <Typography variant="body2">PHP</Typography>
                </Grid>
                <Grid item sm={8} md={8} lg={8} xs={8}>
                  <LinearProgress variant="determinate" value={80} />
                </Grid>
              </Grid>
              <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item sm={4} md={4} lg={4} xs={4}>
                  <Typography variant="body2">Javascript</Typography>
                </Grid>
                <Grid item sm={8} md={8} lg={8} xs={8}>
                  <LinearProgress variant="determinate" value={50} />
                </Grid>
              </Grid>
              <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item sm={4} md={4} lg={4} xs={4}>
                  <Typography variant="body2">HTML</Typography>
                </Grid>
                <Grid item sm={8} md={8} lg={8} xs={8}>
                  <LinearProgress variant="determinate" value={100} />
                </Grid>
              </Grid>
              <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item sm={4} md={4} lg={4} xs={4}>
                  <Typography variant="body2">GIT</Typography>
                </Grid>
                <Grid item sm={8} md={8} lg={8} xs={8}>
                  <LinearProgress variant="determinate" value={50} />
                </Grid>
              </Grid>
              <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item sm={4} md={4} lg={4} xs={4}>
                  <Typography variant="body2">PostgreSQL</Typography>
                </Grid>
                <Grid item sm={8} md={8} lg={8} xs={8}>
                  <LinearProgress variant="determinate" value={65} />
                </Grid>
              </Grid>
              <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item sm={4} md={4} lg={4} xs={4}>
                  <Typography variant="body2">MacOS</Typography>
                </Grid>
                <Grid item sm={8} md={8} lg={8} xs={8}>
                  <LinearProgress variant="determinate" value={65} />
                </Grid>
              </Grid>
              <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item sm={4} md={4} lg={4} xs={4}>
                  <Typography variant="body2">Debian Linux</Typography>
                </Grid>
                <Grid item sm={8} md={8} lg={8} xs={8}>
                  <LinearProgress variant="determinate" value={60} />
                </Grid>
              </Grid>
      </div>
  );
}

export default Software;
