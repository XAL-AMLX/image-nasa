import './App.css';
import axios from "axios";
import { useState } from 'react';

function App() {

  const [imgUrl, setImgUrl] = useState(null);

  const currentDate = new Date()
  console.log(currentDate)

  axios({
    method: "get",
    url: "https://api.nasa.gov/planetary/apod?api_key=xFXxvPXqX7C1TlFeHZJR0blXBKoNINgK4wFr2iZB",
    responseType: "json",
  }).then(function (response) {
    console.log(setImgUrl(response.data["url"]));
  });

  

  return (
    <div className="App">
      <input type="text" className='input-url'/>
      <div className='response-div'>
        <img src={imgUrl} alt="nasa-image"/>
      </div>
    </div>
  );
}

export default App;
