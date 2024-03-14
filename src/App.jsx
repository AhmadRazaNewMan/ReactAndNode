import './App.css'
import { useState,useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('')
 useEffect(() => {
    fetch("http://localhost:5000/message")
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);
  

  return (
    <div className="App">
      {message}
    
    </div>
  );
}

export default App;
