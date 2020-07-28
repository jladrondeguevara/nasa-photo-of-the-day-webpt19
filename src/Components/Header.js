import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Header = () => {
    return (
        axios.get('https://api.nasa.gov/planetary/apod?date=2020-07-20&api_key=du2094KoA7O0AlngvxSkX6zMqoaJBeNTyr6oH4Sj')
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log("error");
        })
    )
}

export default Header();