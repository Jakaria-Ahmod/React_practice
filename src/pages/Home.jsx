import React from 'react'

const Home = () => {
  return (
    <div className="bg-[#262029] h-screen">
      <section className='container mx-auto '>
        <div className='bg-white pt-[20px] rounded shadow-2xl'>
          <p className='h-[200px] flex items-center justify-center '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quo, id odio, eius voluptates tenetur obcaecati cum iste, alias animi officiis nemo maxime vel consequatur provident veniam laudantium pariatur ut!
          </p>
        </div>
        <div className='flex items-center mt-[200px] space-x-12'>
          <div className='w-[50%] rounded hover:shadow-emerald-400 hover:shadow-2xl transition duration-300 cursor-pointer'>
            <img src="../src/assets/one.png" alt=""  className='w-[100%] h-[100%]'/>
          </div>
          <div className='w-[50%] '>
            <p className='w-[100%] bg-white h-[100%] py-35 px-3.5 text-center rounded dark:bg-black text-white  hover:shadow-emerald-400 hover:shadow-2xl transition duration-300  cursor-pointer'>
              my name is jakaria ahmod , i am profesonal full stack developer , i am propesonal forntend developer , i am propesonal backend developer , i am profesonal app developer , i am profesonal full stack developer using mern, 
               i am profesonal softwere eingineare 
            </p>
          </div>
        </div>
      </section>
          <div className='container mx-auto'>
            <button className='bg-[green] text-white p-4 rounded block mt-9 cursor-pointer shadow-gray-600 shadow-2xl transition duration-200'>click me</button>
          </div>
    </div>
  )
}

export default Home