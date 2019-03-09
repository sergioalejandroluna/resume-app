import React from 'react';
import Grid from '@material-ui/core/Grid';
import Personal from './Personal.js';
import Software from './Software.js';
import Experience from './Experience.js';
import Skills from './Skills.js';
import Education from './Education.js';
import Interest from './Interest.js';

function Body(props) {
  return (
        <Grid container>
            <Grid item sm={6} md={6} lg={6} xs={12} className="row">
              <Personal/>
              <Software/>
              <Interest/>
            </Grid>
            <Grid item sm={6} md={6} lg={6} xs={12} className="row">
              <Experience/>
              <Skills/>
              <Education/>
            </Grid>
        </Grid>
  );
}

export default Body;
