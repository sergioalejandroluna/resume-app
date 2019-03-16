import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import ListItemIcon from '@material-ui/core/ListItemIcon';

class Experience extends React.Component {

  render(){
    return (
          <div>
            <Typography variant="h6" className="title">Experience</Typography>
            <Grid container
              direction="row"
              justify="space-between"
              alignItems="center">
              <Grid className="container">
              {this.props.experience.map(({title, place, date, activities}) => {
                return (
                  <List className="list_main" key={title}>
                    <ListItem alignItems="flex-start" className="list_item">
                      <ListItemIcon>
                        <WorkIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="desc_section"
                        classes={{ primary: "title_section" }}
                        primary={place}
                        secondary={
                          <React.Fragment>
                            <Typography component="span">
                              {title} <span className="date">{date}</span>
                            </Typography>
                            {activities}
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

export default Experience;
