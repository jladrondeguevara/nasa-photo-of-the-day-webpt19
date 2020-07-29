import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from "./Components/Header";
import PhotoContainer from "./Components/PhotoContainer"

function App() {
  const [data, setData] = useState([]);
  // https://api.nasa.gov/planetary/apod?date=2020-07-20&api_key=du2094KoA7O0AlngvxSkX6zMqoaJBeNTyr6oH4Sj
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?date=2020-07-28&api_key=du2094KoA7O0AlngvxSkX6zMqoaJBeNTyr6oH4Sj')
      .then(response => {
          setData(response.data);
      })
      .catch(error => {
          console.log("error");
      })
  }, [])
  return (    
    <div className="App">
      <Header />
      <PhotoContainer props = {data}/>
    </div>
  );
}

export default App;
