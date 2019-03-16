import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

class Interests extends React.Component {
  state = {
    items:  []
  }

constructor(props){
  super(props);
  this.state =  {
    items: this.props.interests.map(item => ({ ...item, percent: 0}))
  };
};

 componentDidMount() {
   this.timer = setTimeout (() => this.progress(5),1000);
 }

componentWillUnmount() {
  clearTimeout(this.timer);
}

progress(completion){
  this.setState({
    items: this.props.interests.map((item, i) => {
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
          <br/>
            <Typography variant="h6" className="title">Interests</Typography>
                {this.props.interests.map(({name, percent}) => {
                  return (
                    <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="center" key={name}>
                    <Grid item sm={4} md={4} lg={4} xs={4}>
                      <Typography variant="body2">{name}</Typography>
                    </Grid>
                    <Grid item sm={8} md={8} lg={8} xs={8}>
                      <LinearProgress variant="determinate" value={percent} />
                  </Grid>
                  </Grid>
                  )
                })}
        </div>
    );
  }
}

export default Interests;
