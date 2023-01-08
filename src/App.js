import React, { useState } from "react"
import Navbar from "./components/Navbar.js"
import TextForm from './components/TextForm';
import Alert from "./components/Alert"
import About from "./components/About"
import {Route,Switch,BrowserRouter} from "react-router-dom"

function App() {
  const [mode, setMode] = useState("Light") //Wheather dark mode is enabled or not.
  const [alert, setAlert] = useState(null)


  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  let toggleMode = () => {
    if (mode === "Light") {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(13 44 88)"
      document.body.style.color = "white"
      document.getElementById("myBox").style.backgroundColor = "#1c3b6a"
      document.getElementById("myBox").style.color = "white"
      showAlert("Dark Mode has been enabled", "success")
      document.title = "TextUtils Dark Mode"


    }
    else {
      setMode("Light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      document.getElementById("myBox").style.backgroundColor = "white"
      document.getElementById("myBox").style.color = "black"
      showAlert("Light Mode has been enabled", "success")
      document.title = "TextUtils Light Mode"
    }
  }



  let redMode = () => {
    if (document.body.style.backgroundColor === "red") {
      setMode("white")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      document.getElementById("myBox").style.backgroundColor = "white"
      document.getElementById("myBox").style.color = "black"
      document.getElementById("me").style.backgroundColor="white"
      document.getElementById("me").style.color="black"
    }
    else if (document.body.style.backgroundColor === "white") {
      setMode("dark")
      document.body.style.backgroundColor = "red"
      document.body.style.color = "black"
      document.getElementById("myBox").style.backgroundColor = "#d61e30"
      document.getElementById("myBox").style.color = "black"
      document.getElementById("me").style.backgroundColor="rgb(226 8 54)"
      document.getElementById("me").style.color="aquamarine"
     
    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = "red"
      document.body.style.color = "black"
      document.getElementById("myBox").style.backgroundColor = "#d61e30"
      document.getElementById("myBox").style.color = "black"
      document.getElementById("me").style.backgroundColor="rgb(226 8 54)"
      document.getElementById("me").style.color="aquamarine"
    }
  }



  return (

    <>

   
      {/* <TextForm heading="Enter the Text to Analyze" showAlert={showAlert}/> */}
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggle={toggleMode} trigger={redMode} />
      <Alert alert={alert} />
    <Switch>
      <Route path={"/about"} >
      <About mode={mode} showAlert={showAlert}/>
      </Route>
      <Route exact path={"/"}>
      <TextForm showAlert={showAlert} heading = "Try TextUtils - Word Counter,Character Counter,Remove Extra Spaces"/>
      </Route>
    </Switch>
    </BrowserRouter>  
    </>

  )

}
export default App;