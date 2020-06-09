// @ts-ignore
import React from 'react';
// Routing components
import{
    BrowserRouter as Router,
    Route,
    Switch,
}from 'react-router-dom';
// Write in alphabetical order
import './App.css';
import Homepage from "./pages/home/HomeComponent";
import NotFoundPage from "./pages/Error404/NotFoundPage";
import SocialPageComponent from "./pages/social/SocialPageComponent";
import SocialList from "./pages/social/socialList";
import {ThemeProvider} from "styled-components";
import * as theme from "./components/theme";
import { motion,AnimatePresence  } from "framer-motion"


function App() {
  return (

      <Router>
          <ThemeProvider theme={theme}>
          <div className="App">
              <Switch>
                  <Route path={"/"} component={Homepage} exact/>
                   <Route path={"/SocialPagelist"} component={SocialList} />
                  <Route path={"/SocialPage/:name"} component={SocialPageComponent} />
                  <Route component={NotFoundPage} />
              </Switch>
          </div>
          </ThemeProvider>
      </Router>

  );
}

export default App;
