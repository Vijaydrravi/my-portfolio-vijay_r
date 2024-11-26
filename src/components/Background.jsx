import React, { useState } from 'react'
import profile from '../assets/profile.jpg'
import './background.css'
const Background = () => {
  const [menu, setMenu] = useState('hidden');
  const changeMenuVisibility =()=>
  {
    setMenu(menu=='visible'?'hidden':'visible')
  }

  return (
    <>

    {/* <div className=''>

    <ul className='flex border-2 justify-end my-2 align-baseline h-[10vh] items-center'>
         <li className='grow  ml-10  text-3xl font-bold'>VIJAY R</li>
          <li className='ml-5 text-[20px] font-medium cursor-pointer  ' >Home</li>
          <li className='ml-5 text-[20px] font-medium cursor-pointer '>About</li>
          <li className='ml-5 text-[20px] font-medium cursor-pointer '>Projects</li>
          <li className='ml-5 text-[20px] font-medium cursor-pointer  mr-8'>contact</li>
        </ul>
    </div>

      <div className='w-[100vw] h-[90vh] bg-cover grid justify-center content-center opacity-90' style={{backgroundImage:`url(${nature})`}}>
        <div className='grid   border-2 justify-items-center'>
         <h1 className='text-4xl  font-bold opacity-100 '>Hey, My name is Vijay</h1>
         <h1 className='text-4xl font-bold mt-5'>I'm a  <span></span></h1>
         
         </div>
      </div> */}
         {/* navbar */}
         <div className='bg-gray-700'>
      <div className='grid  navbar w-full sticky top-0  lg:flex lg:bg-slate-700 h-[10vh]' >
        <div className='flex w-full bg-slate-700 mt-0'>
        <p className='text-3xl mt-5 visible w-[80%] ml-5 lg:ml-[14%]'> <span className='text-orange-500'>VIJAY </span>R</p>
      <div className='  mt-5  cursor-pointer  mr-5 mb-2 lg:hidden' onClick={changeMenuVisibility}  >
      <svg xmlns="http://www.w3.org/2000/svg" className='w-[35px]' viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
      </div>
      </div>
      {/* navbar */}
      <div style={{visibility:`${menu}`}} className=' lg:flex bg-gray-700 lg:visible  lg:mr-[14%]' >
      <div className='pl-3 hover:text-orange-500 lg:hover:underline mt-5 cursor-pointer lg:visible lg:ml-8 text-white' ><a href="#profile-section">Home</a></div>
      <div className='pl-3 hover:text-orange-500 lg:hover:underline mt-5 cursor-pointer lg:visible lg:ml-8 text-white' > <a href="#about-section">About</a></div>
      <div className='pl-3 hover:text-orange-500 lg:hover:underline mt-5 cursor-pointer lg:visible lg:ml-8 text-white' >Projects</div>
      <div className='pl-3 hover:text-orange-500 lg:hover:underline mt-5 cursor-pointer lg:visible lg:ml-8 text-white' >Resume</div>
      <div className='pl-3 hover:text-orange-500 lg:hover:underline mt-5 cursor-pointer lg:visible lg:ml-8 text-white' >Contact</div>
      </div>
      </div>
     {/* Profile Section */}
      <div className='lg:flex h-[60vh]  bg-slate-700' id='profile-section'>
        <div className='grid justify-start  h-full content-center lg:w-[50%]  '>
          <p className='text-[24px] px-[5%] mt-2   text-white' >Hi There! I'm</p>
          <p className='text-[28px] px-[5%] mt-2  text-white ' >Web Developer</p>
          <p className='text-[18px] px-[5%] mt-2 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque repellendus facilis debitis ad at, harum corrupti deleniti consequatur hic sapiente ipsam maiores fugit adipisci incidunt!</p>
          <button className='border-2 mt-3 hover:text-orange-500 mx-[5%] rounded-lg p-2 border-white text-white justify-self-start '>Download CV</button>
        </div>
        <div className=' lg:w-[50%] bg-cover  ' style={{backgroundImage:`url(${profile})`}}></div>
      </div>

      {/* About section */}

      <div className='bg-slate-700' id='about-section' >
        <p className='text-2xl text-orange-500 text-center font-medium lg:text-3xl pt-10'>About Me</p>
        {/* About me photo and details of me */}
       <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='h-[35vh] lg:h-[60vh] mt-5 bg-contain bg-no-repeat mx-[5%]' style={{backgroundImage:`url(${profile})`}}></div>
        <div className=' mt-5'>
          <p className='text-xl ml-[5%] text-white'> <span className='underline'>I'm</span> VIJAY R</p>
           <p className='text-white text-[18px] mt-5 ml-[5%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus animi expedita cupiditate itaque ullam iste excepturi dicta quas! Perferendis?</p>
           <p className='text-white text-[18px] mt-5 ml-[5%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum unde non, praesentium excepturi perspiciatis commodi natus magnam? Cumque itaque mollitia consectetur magnam ab aliquid et.</p>
          {/* icons and the information about */}
          
           <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='mt-5 ml-[5%] flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] fill-orange-500' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
             <p className='ml-2 text-[18px] text-white'>Date of birth: 10 JUN 2002</p></div>
             <div className='mt-5 ml-[5%] flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] fill-orange-500' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
             <p className='ml-2 text-[18px] text-white'>Nationality: Indian</p></div>
             <div className='mt-5 ml-[5%] flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] fill-orange-500' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
             <p className='ml-2 text-[18px] text-white'>Date of birth: 10 JUN 2002</p></div>
             <div className='mt-5 ml-[5%] flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] fill-orange-500' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
             <p className='ml-2 text-[18px] text-white'>Date of birth: 10 JUN 2002</p></div>
             <div className='mt-5 ml-[5%] flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] fill-orange-500' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
             <p className='ml-2 text-[18px] text-white'>Date of birth: 10 JUN 2002</p></div>
             <div className='mt-5 ml-[5%] flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] fill-orange-500' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
             <p className='ml-2 text-[18px] text-white'>Date of birth: 10 JUN 2002</p></div>
             <div className='mt-5 ml-[5%] flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] fill-orange-500' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
             <p className='ml-2 text-[18px] text-white'>Date of birth: 10 JUN 2002</p></div>
             <div className='mt-5 ml-[5%] flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] fill-orange-500' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
             <p className='ml-2 text-[18px] text-white'>Date of birth: 10 JUN 2002</p></div>
           </div>
        </div>
       </div>
      </div>

      {/* my services */}
      <div className='bg-gray-700   pt-10 '>
        <p className='text-2xl text-center text-orange-500 lg:text-3xl'>My Services</p>
        {/* services */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    '>
        <div className='h-[40vh] shadow-2xl mx-[5%] border-2 mt-10 '>hello</div>
        <div className='h-[40vh] shadow-2xl mx-[5%] border-2 mt-10'>hello</div>
        <div className='h-[40vh] shadow-2xl mx-[5%] border-2 mt-10'>hello</div>
        <div className='h-[40vh] shadow-2xl mx-[5%] border-2 mt-10 '>hello</div>
        </div>
      </div>
      {/* My projects are */}
      <div  className='bg-gray-700   pt-10 '>
        <p className='text-2xl text-center text-orange-500 lg:text-3xl'>My projects</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    '>
        <div className='h-[40vh] shadow-2xl mx-[5%] border-2 mt-10 '>hello</div>
        <div className='h-[40vh] shadow-2xl mx-[5%] border-2 mt-10'>hello</div>
        <div className='h-[40vh] shadow-2xl mx-[5%] border-2 mt-10'>hello</div>
        <div className='h-[40vh] shadow-2xl mx-[5%] border-2 mt-10 '>hello</div>
        </div>
      </div>
          {/* contact */}
          <div  className='bg-gray-700   pt-10 '>
        <p className='text-2xl text-center text-orange-500 lg:text-3xl'>My Contact</p>
        <div className=''>
          <div className='lg:flex lg:justify-center'>
          <input type="text" className='block w-[90%] h-[40px] border-2 p-2 shadow-md  mx-[5%] lg:ml-[20%] mt-5 lg:w-[30%] lg:mr-[2.5%]' placeholder='Your name'/>
          <input type="text" className='block w-[90%] h-[40px] border-2 p-2 shadow-md  mx-[5%] lg:mr-[20%] mt-5 lg:w-[30%] lg:ml-[0%]' placeholder='Your Email address'/>
          </div> 

          <input type="text" className='block w-[90%] h-[40px] border-2 p-2 shadow-md mx-[5%] mt-5 lg:mx-[20%] lg:w-[60%]' placeholder='Subject'/>
          <input type="text" className='block w-[90%] h-[80px] border-2 p-2 shadow-md mx-[5%] mt-5 lg:mx-[20%] lg:w-[60%]' placeholder='How can i help you ?'/>
          <div className='flex justify-center h-[200px]'>
          <button className='border-2 mt-10 h-[40px] text-white p-2 rounded-lg hover:text-orange-500 hover:border-orange-500'>Contact Now</button>
          </div>
        </div>
      </div>
      </div>
   </>
  )
}

export default Background