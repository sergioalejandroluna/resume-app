import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import School from '@material-ui/icons/School';
import ListItemIcon from '@material-ui/core/ListItemIcon';

class Education extends React.Component {

  render(){
    return (
          <div>
            <br/>
            <Typography variant="h6" className="title">Education</Typography>
            <Grid container
              direction="row"
              justify="space-between"
              alignItems="center">
              <Grid className="container">
              {this.props.education.map(({name, degree, date}) => {
                return (
                  <List className="list_main" key={degree}>
                    <ListItem alignItems="flex-start" className="list_item">
                      <ListItemIcon>
                        <School />
                      </ListItemIcon>
                      <ListItemText
                        className="desc_section"
                        classes={{ primary: "title_section" }}
                        primary={degree}
                        secondary={
                          <React.Fragment>
                            <span className="date">{date}</span>
                            <Typography component="span">
                              {name}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                  )
              })}
              </Grid>
            </Grid>
        </div>
    );
  }
}

export default Education;
