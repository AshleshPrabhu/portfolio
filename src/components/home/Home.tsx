// import React from 'react'
import image from "../../images/Photo.jpg"
function Home() {
  return (
    <section id="home" className='h-[85%] w-full p-12  flex flex-col bg-[#080808]'>
        <div className='w-full flex items-center justify-center'>
            <img src={image} alt="my image" className='cursor-pointer w-72 rounded-[50%] h-72 shadow-[0_0_25px_white] transition duration-[400ms] ease-in-out border-white border-2 hover:shadow-[0_0_50px_white] hover:scale-[1.05]' />
        </div>
        <div className='w-full text-white flex items-center justify-center mt-11 '>
            <h1 className='text-4xl'>Hello , this is Ashlesh Prabhu</h1>
        </div>
        <div className="w-full flex justify-center">
            <h3 className="text-3xl text-white font-semibold">I'm a <span></span></h3>
        </div>
    </section>
  )
}

export default Home