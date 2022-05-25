import React from "react";
import Header from "./components/header";
import Nav from "./components/nav"
import Body from "./components/body"
import { connect } from "mongoose"
import './styles/App.css';


function App() {
  
  var link = "https://agustinmanelli.github.io/Portfolio";

  //conexion a base de datos
  
  const mongoose = require('mongoose');
  const user = "React";
  const password = "NkZxuXRcqhVQjVZw";
  const uri = `mongodb+srv://${user}:${password}@database.bgmkpi0.mongodb.net/?retryWrites=true&w=majority`;

  (async() => {
    await mongoose.connect(uri, {
      useNewUrlParser: true, useUnifiedTopology: true
    })
    console.log("listo")
  })()
  

  
  return (
    <div className="App">
      <Nav />
      <Header/>
      mi link es {link}
      <Body></Body>
    </div>
  );

}

export default App;
