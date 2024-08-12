// import React from 'react'

function Contact() {
  return (
    <section className="w-full h-[15%] bg-[#191B1C] flex">
        <div className="w-[30%] flex items-center justify-center h-full">
            <div className="text-white">
                <h3>
                    Ashlesh Prabhu
                </h3>   
                <p>
                    Udupi,Karnataka
                </p>
                <p>
                    576107
                </p>
            </div>
        </div>
        <div className="w-[70%] flex items-center justify-end">   
            <div className="w-[250px] flex justify-between">
                <i className='bx bx-lg bxl-gmail text-white cursor-pointer'/>
                <a target="_blank" href="https://www.linkedin.com/in/ashlesh-prabhu-bb457b312/"><i className='bx bx-lg bxl-linkedin text-white cursor-pointer'/></a>
                <a target="_blank" href="https://github.com/AshleshPrabhu"><i className='bx bx-lg bxl-github text-white cursor-pointer'/></a>
                <i className='bx bx-lg bxl-discord-alt text-white cursor-pointer'/>
            </div>
        </div>
    </section>
  )
}

export default Contact