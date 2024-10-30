
import { MdMenu } from 'react-icons/md'
import DarkMode from './DarkMode'
import { RxCross1 } from 'react-icons/rx'
import { useState } from 'react'
import MobileNav from './MobileNav'

export const NavLinkis = [
    {
        id:1,
        name:'Home',
        link:'/#'
    },
    {
        id:2,
        name:'Projects',
        link:'/#project'
    },
    {
        id:3,
        name:'About',
        link:'/#about'
    },
    {
        id:4,
        name:'Skill',
        link:'/#skill'
    },
    {
        id:5,
        name:'Contact',
        link:'/#contact'
    },
]
const Navbar = () => {
 const [mobileNav,setNavMobile] = useState(false)
  return (
    <>
    
    <div className='shadow-md w-full dark:bg-gray-900
     dark:text-white '>
        <div className="container ">
            <div className='py-2  flex justify-between items-center'>
                <div>
                    <a href="#">
                    <span className=' text-3xl font-bold'>Portfolio</span>

                    </a>
                </div>
                <div className=' hidden sm:block'>
                    <ul className=' flex items-center gap-6'>
                        {NavLinkis.map((item)=>(
                           
                            <li key={item.id}>
                            <a
                            className=' inline-block text-lg
                             uppercase font-medium py-3
                              hover:text-primary transition-all
                               duration-500'
                             href={item.link}>{item.name}</a>
                            </li>
                            
                        ))}
                    </ul>
                </div>
                <DarkMode/>
                <div className=' relative lg:hidden'>

                    {
                        mobileNav ? 
                        <RxCross1 className=' text-2xl cursor-pointer'
                        onClick={() => setNavMobile(!mobileNav)}/>:
                        <MdMenu  className=' text-2xl cursor-pointer'
                        onClick={() => setNavMobile(!mobileNav)}/>
                    }
                    
                    
                </div>
            </div>

        </div>
      <MobileNav mobileNav={mobileNav}/>
    </div>
    </>
    
  )
}

export default Navbar
