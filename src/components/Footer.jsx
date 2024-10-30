import React from 'react'
import { NavLinkis } from './Navbar'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
  <>
  <span id='contact'></span>
    <div className=' py-14 dark:bg-gray-900 dark:text-white'>
      <div className=' container'>
         <div>
            <ul className=' flex items-center justify-center
             gap-5'>
                {
                    NavLinkis.map((item)=>(

                      <li key={item.id}>
                        <a href={item.link}>{item.name}</a>
                      </li>
                    ))
                }
            </ul>
         </div>
      </div>

      {/* Footer icon  */}
      <section className=' bg-dark container'>
        <div className=' mt-10 p-6 flex  items-center
          justify-between gap-6'>
            <h1 className=' text-white text-3xl font-bold'>Portfolio</h1>
            <div className=' flex gap-6'>
                <FaInstagram className=' text-2xl text-white
                 hover:text-primary cursor-pointer
                   duration-300'/>
                <FaFacebook className=' text-2xl text-white
                 hover:text-primary cursor-pointer
                   duration-300'/>
                <FaLinkedin className=' text-2xl text-white
                 hover:text-primary cursor-pointer
                   duration-300'/>
                <FaYoutube className=' text-2xl text-white
                 hover:text-primary cursor-pointer
                   duration-300'/>
            </div>
            <p className=' hidden text-white sm:block'>💔 by The Coding Journey</p>
        </div>

      </section>
    </div>
  </>
  )
}

export default Footer
