import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

class Others extends React.Component {
  state = {
    items:  []
  }

constructor(props){
  super(props);
  this.state =  {
    items: this.props.others.map(item => ({ ...item, percent: 0}))
  };
};

 componentDidMount() {
   this.timer = setTimeout (() => this.progress(5), 50);
 }

componentWillUnmount() {
  clearTimeout(this.timer);
}

progress(completion){
  let done = 0;
  this.setState({
    items: this.props.others.map((item, i) => {
      const { percent: current } = this.state.items[i];
      const { percent: max } = item;
      if (current + completion >= max) {
          done += 1;
        }
      return {
        ...item,
        percent: Math.min(current + completion, max),
      };
    }),
  });
  if (done < this.props.others.length) {
      this.timer = setTimeout(() => this.progress(5), 50);
    }
}

  render(){
    const { items } = this.state;
    return (
          <div>
            <br/>
            <Typography variant="h6" className="title">Others</Typography>
                {items.map(({name, percent}) => {
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

export default Others;
