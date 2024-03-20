import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"

function App() {

  const [data, setdata] = useState("")

  console.log(process.env.REACT_APP_API)

  const response = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/datar/data`)
      console.log(process.env.REACT_APP_API)
      setdata(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    response();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <pre>{JSON.stringify(data.data)}</pre>
        
      </header>
    </div>
  );
}

export default App;
