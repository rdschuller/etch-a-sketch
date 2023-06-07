import { useState } from 'react'
import '../App.css' 

export default function Pixel(props) {

    
    let color = props.color === 'black' ? 'bg-black' : `bg-${props.color}-500`
    console.log(color);


    return (
        <div className={`${props.on ? 
                        color 
                        : 'bg-white'} w-full h-full `} 
                        onMouseOver={() => props.paintIn(props.id, props.color)}>
        </div>
    )
}