import React, {useEffect, useState} from 'react';

export default function PhotoContainer (props) {
    return (
        <div className = "photo-container">
            <img src = {props.data.hdurl} alt = "Picture of the day"></img>
        </div>
    )
}