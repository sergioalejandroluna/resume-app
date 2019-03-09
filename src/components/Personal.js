import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

function Personal(props) {
  return (
              <div>
                <Typography variant="h6" className="title">Personal</Typography>
                <Typography variant="body1" ><span className="label">Name</span><span className="text">Sergio Alejandro Luna Flores</span></Typography>
                <Divider className="divider"/>
                <Typography variant="body1" ><span className="label">Mobile</span><span className="text">(614)175-04-27</span></Typography>
                <Divider className="divider"/>
                <Typography variant="body1"><span className="label">Age</span><span className="text">32</span></Typography>
                <Divider className="divider"/>
                <Typography variant="body1"><span className="label">English</span><span className="text">Intermediate</span></Typography>
                <Divider className="divider"/>
                <Typography variant="body1" ><span className="label">E-mail</span><span className="text">sergio.alejandro.luna.flores@gmail.com</span></Typography>
                <Divider className="divider"/>
              <br/>
              </div>
  );
}

export default Personal;
