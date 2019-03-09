import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

function Skills(props) {
  return (
    <div>
    <Typography variant="h6" className="title">Skills</Typography>
    <Grid container
      direction="row"
      >
        <Grid item sm={4} md={4} lg={4} xs={4} className="skill_grid">
          <div className="wrapper">
            <CircularProgress size={100} value={90} color="primary" variant="determinate"/>
            <Typography variant="body2" className="skill">
              Self thought
            </Typography>
          </div>
        </Grid>
        <Grid item sm={4} md={4} lg={4} xs={4} className="skill_grid">
          <div className="wrapper">
            <CircularProgress size={100} value={90} color="primary" variant="determinate"/>
            <Typography variant="body2" className="skill">
              Analytic
            </Typography>
          </div>
        </Grid>
        <Grid item sm={4} md={4} lg={4} xs={4} className="skill_grid">
          <div className="wrapper">
            <CircularProgress size={100} value={80} color="primary" variant="determinate"/>
            <Typography variant="body2" className="skill">
              Sociable
            </Typography>
          </div>
        </Grid>
    </Grid>
    <br/>
    </div>
  );
}

export default Skills;
