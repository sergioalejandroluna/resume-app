import React from 'react'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Header from './components/Header.js';
import Goal from './components/Goal.js';
import Body from './components/Body.js';
import { Grid } from "@material-ui/core";
import Footer from './components/Footer.js';
import  resume from './resume.json';

resume.personal.push({tag: 'Age', value: calculateAge()});

function calculateAge(){
    const birthday = new Date('11/17/1986');
    const today = new Date();
    const miliseconds = 1000 * 60 * 60 * 24;// milliseconds in a day
    const age = ( (today - birthday) / miliseconds);
  return Math.floor(age/365);
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#daf0f8",
      main: "#29c3df",
      dark: "#000000",
      contrastText: "#fff"
    },
    secondary: {
      light: "#daf0f8",
      main: "#fff",
      dark: "#daf0f8",
      contrastText: "#000"
    },
  },
  typography: {
    useNextVariants: true,
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resume };
  }



  render() {
    const resume = this.state.resume
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Grid container>
            <Grid item sm={false} md={false} lg={2} xs={false} xl={3}></Grid>
            <Grid item sm={12} md={12} lg={8} xs={12} xl={6}>
              <Header
                name={resume.info.short_name}
                label={resume.info.label}
                picture={resume.info.picture}
               />
              <Goal
                goal={resume.info.goal}
              />
              <Body
                personal={resume.personal}
                softwares={resume.softwares}
                skills={resume.skills}
                education={resume.education}
                experience={resume.experience}
                interests={resume.interests}
              />
              <Footer/>
            </Grid>
            <Grid item sm={false} md={false} lg={2} xs={false} xl={3}></Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    )
  }
}
export default App
