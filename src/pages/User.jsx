import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
  const [data, setData] = useState([]);
   const [record,setRecord] = useState(data)
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        {setData(res.data);
        setRecord(res.data)}
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
   
  // const handleInput = (e) => {
  //    const searchText = e.target.value.toLowerCase();
  //   data.filter(item => item.name.toLowerCase().includes(e.target.value))
  //   // return()
  // }
  
  const handleInput = (e) => {
  const searchText = e.target.value.toLowerCase();
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchText) ||
    item.email.toLowerCase().includes(searchText) ||
    item.body.toLowerCase().includes(searchText) ||
    item.id.toString().includes(searchText) 
  );
  setRecord(filteredData);
};


  return (
    
    <div className="p-4 mt-[100px]">
      <form action="">
        <input type="text" placeholder='Enter your name' className='w-full p-3 border rounded' onChange={handleInput}/>
      </form>
      <h1 className="text-xl font-bold mb-4">Comments Table</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Comment</th>
          </tr>
        </thead>
        <tbody>
          {record.slice(0, 20).map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.email}</td>
              <td className="border px-4 py-2">{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
