import { useState } from 'react'
import logo from '../assets/logo.png'
import '../App.css' 
import { nanoid } from 'nanoid'
import Pixel from './Pixel'



export default function Etch() {

  const [size, setSize] = useState(16)
  const [pixelArr, setPixelArr] = useState(allNewPixels())

  function allNewPixels() { 
    return Array.from({length: size * size}, () => {
      return {on: false, id: nanoid()}
    })
  }

  function changeColor(id) {
    setPixelArr((prevPixels) => {
      return prevPixels.map((pixel) =>{
        return pixel.id === id ? {...pixel, on: true} : pixel
      })
    })
    
  }
  
  return (
    <div className='bg-red-600 w-3/4 rounded-3xl flex flex-col justify-between'>
     <img src={logo} alt="logo" className='w-16 self-center mt-6 mx-3'/>
     <div className='my-6 self-center h-full w-full px-9' style={{
       display: 'grid',
       gridTemplateColumns: `repeat(${size}, 1fr)`,
       gridTemplateRows: `repeat(${size}, 1fr)`,
       gap: '0',       
     }}
    >
      {pixelArr.map(pixel => <Pixel key={pixel.id} id={pixel.id} on={pixel.on} changeColor={changeColor}/>)}
     </div>
     <div className='flex justify-between'>
        <span className="dot bg-white ml-5 mb-5"></span>
        <span className="dot bg-white mr-5 mb-5"></span>
     </div>

    </div>
  )
}