import React from 'react'

const Login = () => {
  return (
    <>
    <div className='h-screen w-screen  flex  justify-center items-center '>
    <div className='w-[85vw] h-[50vh]  border-violet-600 rounded-xl bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 md:w-2/4 lg:w-[30vw] border-2 shadow-lg'>
        <p className='  text-center text-2xl mt-5 text-white font-extrabold'>Login</p>
        <div className='h-3/4 w-full grid content-start '>
        <input type="text" placeholder='UserName' className=' w-3/4 mx-[12.5%] mt-12 h-8 outline-none rounded-md bg-transparent border-black p-3 placeholder:text-white border-2' />
        <input type="password" placeholder='Password' className='w-3/4 mx-[12.5%] mt-8 h-8 border-2  outline-none rounded-md  bg-transparent border-black p-3 placeholder:text-white border-'/>
        <p className='text-center mt-5'>Don't have an account?<a>Signup</a></p>
        <button className=' w-1/4 mx-[37.5%]  h-8 border border-violet-600 bg-violet-500  outline-none rounded-md cursor-pointer text-white mt-5' >Login</button>
        </div> 
        
    </div>
    </div>
 
    </>
  )
}

export default Login