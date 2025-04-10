import axios from 'axios'
import React, { useEffect, useState } from 'react'


const About = () => {

  let [data , setData]  = useState([])

  useEffect(() => {
  
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        setData(res.data)
        // console.log(res.data);
        
      }).catch(error => {
      console.log(error)
      
      })
    
  }, [])
  
  return (
    <div className='bg-amber-900 '>
      <div>
        <section className='container mx-auto'>
          <div className='flex items-center gap-4 pt-5 flex-wrap'>
            {
              data.map(item => (
                 <div className='bg-white w-[250px] p-5 rounded hover:shadow-2xl hover:shadow-emerald-500 transition duration-200 cursor-pointer' key={item?.id}>
                  <p>name:{ item.id}</p>
                  <p>name:{ item.name}</p>
                  <p>name:{ item.email}</p>
                  <p>name:{ item.body}</p>
                
                  
                 </div>
              ))
           }
          </div>
        </section>
     </div>
    </div>
  )
}

export default About