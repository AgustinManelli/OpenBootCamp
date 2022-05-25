import React from "react";
import Header from "./components/header";
import Nav from "./components/nav"
import Body from "./components/body"
import Greetingf from "./components/pure/greetingf"
import './styles/App.css';
import TaskListComponent from "./components/container/task_list";
import ContactListComponent from "./components/container/contact_list"


function App() {
  
  var link = "https://agustinmanelli.github.io/Portfolio";
  
  return (
    <div className="App">
      {/*<Nav />
      <Header/>
      <Greetingf name="Agustin" />*/}
      <TaskListComponent />
      <ContactListComponent />
      mi link es {link}
      {/*<Body></Body>*/}
    </div>
  );

}

export default App;
