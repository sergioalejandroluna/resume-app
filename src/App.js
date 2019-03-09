import React, { Component } from 'react'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Header from './components/Header.js';
import Goal from './components/Goal.js';
import Body from './components/Body.js';
import { Grid } from "@material-ui/core";
import Footer from './components/Footer.js';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#daf0f8",
      main: "#29c3df",
      dark: "#000000",
      contrastText: "#fff"
    }
  },
  typography: {
    useNextVariants: true,
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Grid container>
            <Grid item sm={false} md={false} lg={2} xs={false} xl={3}></Grid>
            <Grid item sm={12} md={12} lg={8} xs={12} xl={6}>
              <Header/>
              <Goal/>
              <Body/>
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
