import React, {useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from "./Components/Header";
import PhotoContainer from "./Components/PhotoContainer"

function App() {
  // https://api.nasa.gov/planetary/apod?date=2020-07-20&api_key=du2094KoA7O0AlngvxSkX6zMqoaJBeNTyr6oH4Sj
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?date=2020-07-28&api_key=du2094KoA7O0AlngvxSkX6zMqoaJBeNTyr6oH4Sj')
      .then(response => {
          console.log(response)
      })
      .catch(error => {
          console.log("error");
      })
  }, [])
  return (    
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
