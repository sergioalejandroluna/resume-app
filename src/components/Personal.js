import React from 'react'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class Personal extends React.Component {

  render() {
    return (
          <div>
              <Typography variant="h6" className="title">Personal</Typography>
                {this.props.personal.map(({tag,value}) => {
                  return (
                    <div key={tag}>
                      <Typography variant="body1"><span className="label">{tag}</span><span className="text">{value}</span></Typography>
                        <Divider className="divider"/>
                    </div>
                    )
                })}
          <br/>
          </div>
    );
  }
}

export default Personal;
