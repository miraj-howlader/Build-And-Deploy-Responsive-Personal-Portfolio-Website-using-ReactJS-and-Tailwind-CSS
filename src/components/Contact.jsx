import React from 'react'

const Contact = () => {
  return (
   <>
   <span id='about'></span>
    <div className=' dark:bg-gray-900 dark:text-white
     '>
      <div className=' container py-10'>
        <div className=' grid grid-cols-1 sm:grid-cols-3 gap-6
         bg-dark py-8 px-6'>
            <div className=' col-span-2 space-y-3'>
                <h1 className=' text-5xl font-bold text-white '>Let's work together on your next project</h1>
            <p className=' text-gray-400 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, molestias voluptatum? Nobis consequuntur, recusandae quibusdam accusamus ad, necessitatibus provident beatae corporis repellat esse numquam modi.</p>
            </div>
            <div className=' grid place-items-center'>
                <a
                className=' inline-block font-semibold py-2
                 px-6 bg-primary text-white hover:bg-primary/80
                  duration-300 tracking-widest uppercase'
                 href="mailto:">Contact</a>
            </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Contact
