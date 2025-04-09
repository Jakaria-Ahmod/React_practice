import React, { useState } from 'react'

const Couunt = () => {

 const [count,setCoutnt] = useState(0)


  const handleClickIncrement = () => {
    // console.log("handleClickIncrement");
    
     setCoutnt(count + 1)
  }
  const handleClickDecrement = () => {
    // console.log("handleClickDecrement");
    setCoutnt(count - 1)
    if (count === 0) {
      
    }
    
  }
  return (
    <div className='container mx-auto bg-amber-800]'>
      <h1 className='bg-blue-800 text-center text-3xl text-white mt-7'>{ count}</h1>
      <div className='flex space-x-5 mx-auto text-center mt-11'>
        <button className='bg-[green] text-white p-4 rounded shadow-2xl cursor-pointer mx-auto' onClick={handleClickIncrement}>incrment</button>
        <button className='bg-[green] text-white p-4 rounded shadow-2xl cursor-pointer mx-auto' onClick={handleClickDecrement}  disabled={count === 0}>decriment</button>
      </div>
    </div>
  )
}

export default Couunt