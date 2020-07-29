import React, {useEffect, useState} from 'react';
import "./PhotoContainer.css";


export default function PhotoContainer (props) {
    return (
        <div className = "photo-container">
            <img src = {props.props.hdurl} alt = "Picture of the day"></img>
            {console.log(props.props.hdurl)}
        </div>
    )
}