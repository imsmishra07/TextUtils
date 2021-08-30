

import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar.js'
import TextForm from './Components/TextForm.js'
import React ,{useState}from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(type,message)=>{

    setAlert({
        message:message,
        type:type
    })

    setTimeout(() => {
      setAlert(null)
      
    }, 1500);

  }
  const toggleMode=()=>{

    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="#265948"
      showAlert("success","Darkmode Enabled")
      setInterval(() => {
        document.title="Text Utils"
      }, 2000);
      setInterval(() => {
        document.title="Best Text Utility App"
      }, 1500);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white"
      showAlert("success","Light Mode Enabled")


    }
  }
  return (
    
    
    <Router>
    <div>
     {/*<Navbar title="Sachin" about="About me"/>*/}
      <Navbar mode={mode}   toggleMode={toggleMode}></Navbar>
      
      <div className="container my-3">
      <Alert alert={alert}/>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm mode={mode} showAlert={showAlert} heading="Enter your text to analyse"  />
          </Route>
        </Switch>
     
      {/*<About></About>*/
      }
      </div>
     
    </div>
    </Router>
  );
}

export default App;
