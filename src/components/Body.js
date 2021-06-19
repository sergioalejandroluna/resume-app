import React from 'react'
import Grid from '@material-ui/core/Grid';
import Personal from './Personal.js';
import Software from './Software.js';
import Experience from './Experience.js';
import Skills from './Skills.js';
import Education from './Education.js';
import Interests from './Interests.js';
import Others from './Others.js';

class Body extends React.Component {

  render() {
  const {softwares, skills, education, experience, personal, interests, others} = this.props
    return (
          <Grid container>
              <Grid item sm={6} md={6} lg={6} xs={12} className="row">
                <Personal
                  personal={personal}
                />
                <Software
                  softwares={softwares}
                />
                <Others
                  others={others}
                />
                <Interests
                  interests={interests}
                />
              </Grid>
              <Grid item sm={6} md={6} lg={6} xs={12} className="row">
                <Experience
                  experience={experience}
                />
                <Skills
                  skills={skills}
                />
                <Education
                  education={education}
                />
              </Grid>
          </Grid>
    );
  }
}

export default Body;
