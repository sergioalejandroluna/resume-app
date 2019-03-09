import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import ListItemIcon from '@material-ui/core/ListItemIcon';

function Experience(props) {
  return (
        <div>
              <Typography variant="h6" className="title">Experience</Typography>
              <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid className="container">
                  <List className="list_main">
                    <ListItem alignItems="flex-start" className="list_item">
                      <ListItemIcon>
                        <WorkIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="desc_section"
                        classes={{ primary: "title_section" }}
                        primary="Universidad Autónoma de Chihuahua"
                        secondary={
                          <React.Fragment>
                            <Typography component="span">
                              Software Developer <span className="date">Nov.2017</span>
                            </Typography>
                            {"Contribute to develop a webapp using Ruby On Rails, React & PostgresSQL, unit test with Enzyme & Jest."}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <ListItem alignItems="flex-start" className="list_item">
                      <ListItemIcon>
                        <WorkIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="desc_section"
                        classes={{ primary: "title_section" }}
                        primary="Afinpatrimonial SC"
                        secondary={
                          <React.Fragment>
                            <Typography component="span">
                              Systems Coordinator <span className="date">2011-2017</span>
                            </Typography>
                            {" Web development using mainly: HTML, PHP, CSS, Jquery, Angular, NuSOAP, ASPX.NET"}
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

export default Experience;
