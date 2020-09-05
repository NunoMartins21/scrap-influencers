import React from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import "./App.css"
import { Container } from "rsuite";

import ISSidebar from "../Sidebar/Sidebar";

function App() {
  return (
    <Container className="app">
        <ISSidebar />
        <Container className="main">
            
        </Container>
    </Container>
  );
}

export default App;
