import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Data = () => {

  const [data, setData] = useState([]);
  const [record,setRecord] = useState([])

  useEffect(  ()  => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(res => 
      {
        setData(res.data);
        setRecord(res.data)
      }
      )
      .catch(err => console.log(err)
      )
  }, []);
  const handleData = (e) => {
   e.preventDefault() 
  }

  const handleInputBox = (e) => {
    // setRecord(data.filter(item => item.name.toLowerCase().includes(e.target.value)))
    const mainValue = e.target.value.toLowerCase();
    const mainFilter = data.filter(item => 
      item.name.toLowerCase().includes(mainValue) ||
      item.email.toLowerCase().includes(mainValue) ||
      item.body.toLowerCase().includes(mainValue) ||
      item.id.toString().includes(mainValue) 
      
    )
    setRecord(mainFilter)

  }

 

  return (
    <div>
      <div className='bg-[#643434] h-screen'>
        <div className=" bg-blue-600  p-10 w-full">
          <form action="" className='flex items-center  mb-2.5 space-x-3' onSubmit={handleData}>
            <input type="text" placeholder='Enter your prodact' className='w-[95%] border p-2 roudned  text-white shadow' onChange={handleInputBox}/>
            <button className='bg-amber-400 rounded p-2 cursor-pointer hover:bg-green-500 transition'>click me</button>
          </form>
          <table className='border w-[100%] text-center'>
            <thead>
            <tr className='border'>
              <th className='border p-3 text-white '>id</th>
              <th className='border p-3 text-white '>name</th>
              <th className='border p-3 text-white '>email</th>
              <th className='border p-3 text-white '>body</th>
            </tr>  
            </thead>  
            <tbody>
              {
                record.map(item => (
                  <tr className='border'>
                    <td className='border p-2 text-white'>{ item?.id}</td>
                    <td className='border p-2 text-white'>{ item?.name}</td>
                    <td className='border p-2 text-white'>{ item?.email}</td>
                    <td className='border p-2 text-white'>{ item?.body}</td>
                </tr>
                ))
             }
            </tbody>        
          </table>
        </div>
      </div>
    </div>
  )
}

export default Data