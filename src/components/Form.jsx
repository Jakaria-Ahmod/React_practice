// import React, { useState } from 'react'

// const Form = () => {

//   let [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     conpassword:""
//   })
//   let [error , setError] = useState()
   
//   const handleSubmitData = (e) => {
//    e.preventDefault()
//    setError(validateForm() )
//    console.log(formData);
    
    
//  }


//   const handleInputValue = (e) => {
//     const {name, value} = e.target;
//     setFormData({ ...formData, [name]: value })
//  }

//   // const validtor = () => {
//   //   if (!formData.name) {
//   //    alert("pliese enter your name")
      
//   //   }
//   // }


//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     if (!formData.conpassword) {
//       newErrors.conpassword = 'Confirm password is required';
//     } else if (formData.conpassword !== formData.password) {
//       newErrors.conpassword = 'Passwords do not match';
//     }

//     return newErrors;
//   };





//   return (
//     <div className='flex items-center justify-center h-screen box-border'>
        
      
//       <form action="" className='bg-green-700  w-[400px] h-[400px] rounded-2xl p-5' onSubmit={handleSubmitData}>
//         <h1 className='text-center text-white text-2xl'>Form Submition section</h1>
//         <div>
//           <label htmlFor="" className='w-full block text-cyan-50 font-bold from-neutral-500'>name</label>
//           <input type="text"  placeholder='Enter your name' className='w-full border px-5 rounded text-white mt-2 outline-none active:border-b-emerald-400 py-[5px]' onChange={handleInputValue} name='name' value={formData.name}/>
//        </div>
//         <div>
//           <label htmlFor=""  className='w-full block text-cyan-50 font-bold from-neutral-500'>email</label>
//           <input type="email"  placeholder='Enter your email' className='w-full border px-5 rounded text-white mt-2 outline-none active:border-b-emerald-400 py-[5px]' onChange={handleInputValue} name='email' value={formData.email}/>
//        </div>
//         <div>
//           <label htmlFor=""  className='w-full block text-cyan-50 font-bold from-neutral-500'>password</label>
//           <input type="password"  placeholder='Enter your password'className='w-full border px-5 rounded text-white mt-2 outline-none active:border-b-emerald-400 py-[5px]' onChange={handleInputValue} name='password' value={formData.password}/>
//        </div>
//         <div>
//           <label htmlFor=""  className='w-full block text-cyan-50 font-bold from-neutral-500'>conPassword</label>
//           <input type="password"  placeholder='Enter your password' className='w-full border px-5 rounded text-white mt-2 outline-none active:border-b-emerald-400 py-[5px]' onChange={handleInputValue} name='conpassword' value={formData.conpassword}/>
//         </div>
//         <div>
//           <button className='bg-amber-600 p-2 rounded text-white mx-auto block mt-4 w-full cursor-pointer hover:bg-amber-900 transition duration-300'>Submit</button>
//         </div>
//       </form>



//     </div>
//   )
// }

// export default Form


import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    conpassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleSubmitData = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      // তুমি চাইলে এখানে API call করতে পারো
    }
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.conpassword) {
      newErrors.conpassword = 'Confirm password is required';
    } else if (formData.conpassword !== formData.password) {
      newErrors.conpassword = 'Passwords do not match';
    }

    return newErrors;
  };

  return (
    <div className='flex items-center justify-center h-screen box-border'>
      <form
        className='bg-green-700 w-[400px] rounded-2xl p-5 space-y-3'
        onSubmit={handleSubmitData}
      >
        <h1 className='text-center text-white text-2xl mb-2'>Form Submission</h1>

        <div>
          <label className='text-cyan-50 font-bold'>Name</label>
          <input
            type='text'
            placeholder='Enter your name'
            name='name'
            value={formData.name}
            onChange={handleInputValue}
            className='w-full border px-5 rounded text-white mt-1 outline-none py-[5px]'
          />
          {errors.name && <p className='text-red-300 text-sm'>{errors.name}</p>}
        </div>

        <div>
          <label className='text-cyan-50 font-bold'>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            name='email'
            value={formData.email}
            onChange={handleInputValue}
            className='w-full border px-5 rounded text-white mt-1 outline-none py-[5px]'
          />
          {errors.email && <p className='text-red-300 text-sm'>{errors.email}</p>}
        </div>

        <div>
          <label className='text-cyan-50 font-bold'>Password</label>
          <input
            type='password'
            placeholder='Enter your password'
            name='password'
            value={formData.password}
            onChange={handleInputValue}
            className='w-full border px-5 rounded text-white mt-1 outline-none py-[5px]'
          />
          {errors.password && <p className='text-red-300 text-sm'>{errors.password}</p>}
        </div>

        <div>
          <label className='text-cyan-50 font-bold'>Confirm Password</label>
          <input
            type='password'
            placeholder='Confirm your password'
            name='conpassword'
            value={formData.conpassword}
            onChange={handleInputValue}
            className='w-full border px-5 rounded text-white mt-1 outline-none py-[5px]'
          />
          {errors.conpassword && <p className='text-red-300 text-sm'>{errors.conpassword}</p>}
        </div>

        <button
          type='submit'
          className='bg-amber-600 p-2 rounded text-white mt-4 w-full hover:bg-amber-900 transition duration-300'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
