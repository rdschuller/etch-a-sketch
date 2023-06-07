import { useState } from 'react'
import '../App.css' 

export default function Pixel(props) {

    return (
        <div className={`${props.on ? 'bg-green-500' : 'bg-white'} w-full h-full bg-white`} onMouseOver={() => props.changeColor(props.id)}>
        </div>
    )
}