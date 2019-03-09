import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

function Interest(props) {

  return (
        <div><br/>
              <Typography variant="h6" className="title">Interest</Typography>
              <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item sm={4} md={4} lg={4} xs={4}>
                  <Typography variant="body2">Web development</Typography>
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
                  <Typography variant="body2">Marketing Digital</Typography>
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
                  <Typography variant="body2">New technologies</Typography>
                </Grid>
                <Grid item sm={8} md={8} lg={8} xs={8}>
                  <LinearProgress variant="determinate" value={90} />
                </Grid>
              </Grid>
              <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item sm={4} md={4} lg={4} xs={4}>
                  <Typography variant="body2">Entrepreneurship</Typography>
                </Grid>
                <Grid item sm={8} md={8} lg={8} xs={8}>
                  <LinearProgress variant="determinate" value={90} />
                </Grid>
              </Grid>
              <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item sm={4} md={4} lg={4} xs={4}>
                  <Typography variant="body2">Consulting</Typography>
                </Grid>
                <Grid item sm={8} md={8} lg={8} xs={8}>
                  <LinearProgress variant="determinate" value={90} />
                </Grid>
              </Grid>
      </div>
  );
}

export default Interest;
