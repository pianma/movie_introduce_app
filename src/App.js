import React  from "react";
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Award from './routes/Award';
import Home  from "./routes/Home";
import Navigation from "./components/Navigation";
import Horror from "./routes/Horror";
import Action from "./routes/Action";
import Drama from "./routes/Drama";
import Comedy from "./routes/Comedy";

function App(){
  return (
    <HashRouter>
      <Navigation />
     <Route path="/" exact={true} component={Home}/>
     <Route path="/Award" component={Award}/>
     <Route path="/Horror" component={Horror}/>
     <Route path="/Drama" component={Drama}/>
     <Route path="/Action" component={Action}/>
     <Route path="/Comedy" component={Comedy}/>

    </HashRouter>
  );
}

export default App;