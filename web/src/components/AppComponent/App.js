import React from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import "./App.css"
import { Container } from "rsuite";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ISSidebar from "../SidebarComponent/Sidebar";
import Home from "../HomeComponent/Home";
import Data from "../DataComponent/Data";
import Settings from "../SettingsComponent/Settings";

function App() {
  return (
    <Container className="app">
        <ISSidebar />
        <Container className="main">
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/data" exact component={Data} />
              <Route path="/settings" exact component={Settings} />
          </Switch>
        </Container>
    </Container>
  );
}

export default App;
