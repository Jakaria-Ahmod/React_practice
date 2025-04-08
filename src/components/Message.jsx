import React from 'react'

const Message = () => {
  return (
    <div className='container mx-auto bg-amber-950 text-center  text-white p-5 rounded shadow-2xs mt-4 dark:text-[red] dark:bg-black'>
      <h1>Message</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique esse doloribus, quasi id earum architecto dolorem inventore quos libero molestias nulla voluptatibus explicabo. Debitis velit, dolorem temporibus vel possimus dignissimos!</p>
      <button className='bg-blue-600 p-3 rounded mt-5 shadow-2xl cursor-pointer hover:bg-[white]'>click me</button>
    </div>
  )
}

export default Message