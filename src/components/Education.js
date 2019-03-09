import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import School from '@material-ui/icons/School';
import ListItemIcon from '@material-ui/core/ListItemIcon';

function Education(props) {
  return (
        <div>
              <Typography variant="h6" className="title">Education</Typography>
              <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid className="container">
                  <List className="classes.list_main">
                    <ListItem alignItems="flex-start" className="list_item">
                      <ListItemIcon>
                        <School />
                      </ListItemIcon>
                      <ListItemText
                        className="desc_section"
                        classes={{ primary: "title_section" }}
                        primary="Information Systems Master Degree"
                        secondary={
                          <React.Fragment>
                            <span className="date">2014-2017</span>
                            <Typography component="span">
                              Universidad Autónoma de Chihuahua
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <ListItem alignItems="flex-start" className="list_item">
                      <ListItemIcon>
                        <School />
                      </ListItemIcon>
                      <ListItemText
                        className="desc_section"
                        classes={{ primary: "title_section" }}
                        primary="Computers Systems Engineer"
                        secondary={
                          <React.Fragment>
                            <span className="date">2004-2009</span>
                            <Typography component="span">
                              Universidad Autónoma de Chihuahua
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
      </div>
  );
}

export default Education;
