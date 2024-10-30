import React from 'react'

import PersonImg from '../assets/website/person.png'
const Hero = () => {
  return (
    <div className=' dark:bg-gray-900 dark:text-white'>
        <div className=' container'>
            <div className=' grid grid-cols-1 sm:grid-cols-2
             place-items-center'>
                {/* Image section  */}
                <div>
                    <img src={PersonImg} alt="" />
                </div>
                {/* Text section  */}
                <div className=' space-y-3'>
                    <p className=' text-5xl text-primary'>Hello I'm Angela</p>
                    <p className=' text-3xl'>Visual Disigner</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime voluptatibus optio magnam expedita voluptas, dolorum dolore delectus sit doloribus consequatur beatae iure recusandae hic magni modi deserunt nisi aspernatur culpa suscipit illum? Temporibus, praesentium.</p>
                   <button className=' uppercase bg-primary
                    text-white py-2 px-6 hover:bg-primary/80
                     duration-300 rounded-md'>Hire me</button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Hero
