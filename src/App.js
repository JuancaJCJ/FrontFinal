import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./Routes";
import Container from "@material-ui/core/Container";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Container fixed>
          <Switch>
            <Routes />
          </Switch>
        </Container>
    </BrowserRouter>
    </div>
  );
}

export default App;
