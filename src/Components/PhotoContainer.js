import React, {useEffect, useState} from 'react';
import "./PhotoContainer.css";


export default function PhotoContainer (props) {
    return (
        <div className = "photo-container">
            <div className = "photo">
                <img src = {props.props.hdurl} alt = "Picture of the day"></img>
                {console.log(props.props)}
            </div>
            <div className = "description">
                <p>{props.props.explanation}</p>
            </div>
        </div>
    )
}