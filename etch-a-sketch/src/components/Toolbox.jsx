import { useState } from 'react'
import '../App.css' 

export default function Toolbox(props) {

    

    return (
        
        <div className='border-4 border-red-500 rounded-xl font-signika flex flex-col p-5 m-5'>
            <h1 className='text-2xl underline font-bold pb-3'>toolbox</h1>
            <h2 className='text-xl font-semibold'>Change Resolution</h2>
            <select defaultValue={"16"} onChange={e => props.changeSize(e.target.value)} className='border-4 border-red-500'>
                <option value="16">16X16</option>
                <option value="32">32X32</option>
                <option value="64">64X64</option>
            </select>
            <h2 className='text-xl font-semibold'>Change Color</h2>
            <select defaultValue={"black"} onChange={e => props.changeColor(e.target.value)} className='border-4 border-red-500'>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="pink">Pink</option>
            </select>

            {/* Adding colors that will be used in file to get around tailwind JIT issue */}
            <div className="bg-yellow-500 hidden"></div>
            <div className="bg-pink-500 hidden"></div>
            <div className="bg-red-500 hidden"></div>
            <div className="bg-green-500 hidden"></div>
            <div className="bg-blue-500 hidden"></div>

            
        </div>
    )
}