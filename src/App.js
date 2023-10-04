import { useState } from 'react';
import './App.css';
//import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (massege, type) =>{
    setAlert({
      msg : massege,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500)
  }
  const toggleMode = () => {
    if(mode === 'light'){
    setMode("dark")
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enable", "success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
      }
  }
  return (
    <>

      <Navbar title="designBySaurabh" mode = {mode} toggleMode = {toggleMode} />
      <Alert alert = {alert}/>
      <div className='container'>
        <TextForm showAlert={showAlert} heading="Word counter, Character counter, Remove extra spaces and Convert words into uppercase or lowercase!!! " mode = {mode}/>
      </div>

      {/* <About/> */}
    </>
  );
}

export default App;
