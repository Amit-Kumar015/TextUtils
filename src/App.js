import './App.css';
import Navbar1 from './components/Navbar';
import Form from './components/FormText'
import { useState } from 'react';
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';

function App() {
  const [mode, setMode] = useState("light")

  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })

    setInterval(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar1 title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<Form mode={mode} showAlert={showAlert} />}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
