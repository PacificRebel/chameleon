
import React, { Component } from "react";
import Chameleon from './Chameleon';
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Chameleon />
      </div>
    );
  }
}

const express = require('express');
const http = require('http');
const path = require('path');
let app = express();
app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));

export default App;
