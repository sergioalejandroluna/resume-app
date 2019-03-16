import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

class Skills extends React.Component {
  state = {
    items:  []
  }

constructor(props){
  super(props);
  this.state =  {
    items: this.props.skills.map(item => ({ ...item, percent: 0}))
  };
};

 componentDidMount() {
   this.timer = setTimeout (() => this.progress(1),2000);
 }

componentWillUnmount() {
  clearTimeout(this.timer);
}

progress(completion){
  this.setState({
    items: this.props.skills.map((item, i) => {
      const { completed: current } = this.state.items[i];
      const { completed: max } = item;
      return {
        ...item,
        completed: Math.min(current + completion, max),
      };
    }),
  });
}

  render(){
    return (
          <div>
            <Typography variant="h6" className="title">Skills</Typography>
            <Grid container direction="row">
              {this.props.skills.map(({name, percent}) => {
                return (
                  <Grid item sm={4} md={4} lg={4} xs={4} className="skill_grid" key={name}>
                    <div className="wrapper">
                      <CircularProgress size={100} value={percent} color="primary" variant="static"/>
                        <Typography variant="body2" className="skill">
                          {name}
                        </Typography>
                    </div>
                  </Grid>
                  )
              })}
              </Grid>
        </div>
    );
  }
}

export default Skills;
