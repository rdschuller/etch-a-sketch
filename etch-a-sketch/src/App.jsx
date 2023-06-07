import { useState, useEffect } from 'react'
import logo from './assets/logo.png'
import './App.css' 
import { nanoid } from 'nanoid'
import Pixel from './components/Pixel'
import Toolbox from './components/Toolbox'




export default function App() {

  const [size, setSize] = useState(16)
  const [pixelArr, setPixelArr] = useState(allNewPixels())
  const [color, setColor] = useState("black")

  function allNewPixels(initColor) { 
    return Array.from({length: size * size}, () => {
      return {on: false, id: nanoid(), color:initColor}
    })
  }

  function resetGrid(newColor) {
    setPixelArr((prevPixels) => {
      return prevPixels.map((pixel) =>{
        return pixel.on ? pixel : {...pixel, color:newColor}
      })
    }) 
  }


  function paintIn(id, color) {
    setPixelArr((prevPixels) => {
      return prevPixels.map((pixel) =>{
        return pixel.id === id ? {...pixel, on: true, color: color} : pixel
      })
    })
    
  }

  function changeSize(size) {
    setSize(parseInt(size));
  }

  function changeColor(newColor) {
    setColor(newColor)
  }

  useEffect(() => {
    setPixelArr(allNewPixels(color));
  }, [size]);

  useEffect(() => {
    resetGrid(color);
  }, [color])

  
  
  return (
    <div className='min-w-full min-h-screen flex justify-center gap-6 py-6'>
      <Toolbox changeSize={changeSize} changeColor={changeColor}/>
      <div className='bg-red-500 w-3/4 rounded-3xl flex flex-col justify-between'>
        <img src={logo} alt="logo" className='w-20 self-center mt-6 mx-3'/>
        <div className='my-6 self-center h-full w-full px-9' style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          gridTemplateRows: `repeat(${size}, 1fr)`,
          gap: '0',       
        }}
        >
          {pixelArr.map(pixel => <Pixel key={pixel.id} color={pixel.color} id={pixel.id} on={pixel.on} paintIn={paintIn}/>)}
        </div>
        <div className='flex justify-between'>
            <span className="dot bg-white ml-5 mb-5"></span>
            <span className="dot bg-white mr-5 mb-5"></span>
        </div>
      </div>
    </div>
  )
}

