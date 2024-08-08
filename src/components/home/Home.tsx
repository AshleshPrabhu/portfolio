import React from 'react'
import image from "../../images/Photo.jpg"
function Home() {
  return (
    <section id="home" className='h-[100vh] w-full p-12  flex flex-col'>
        <div className='w-full flex items-center justify-center'>
            <img src={image} alt="my image" className='w-72 rounded-[50%] h-72 shadow-[0_0_25px_white] transition duration-[400ms] ease-in-out border-white border-2' />
        </div>
        <div className='w-full '>
            aa
        </div>
    </section>
  )
}

export default Home