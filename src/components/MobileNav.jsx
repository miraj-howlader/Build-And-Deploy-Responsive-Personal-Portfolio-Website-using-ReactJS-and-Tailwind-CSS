import React from 'react'

const NavLinkis = [
    {
        id:1,
        name:'Home',
        link:'/#'
    },
    {
        id:2,
        name:'Projects',
        link:'/#projects'
    },
    {
        id:3,
        name:'About',
        link:'/#about'
    },
    {
        id:4,
        name:'Blog',
        link:'/#blog'
    },
    {
        id:5,
        name:'Contact',
        link:'/#contact'
    },
]
const MobileNav = ({mobileNav}) => {
  return mobileNav && (
    <div className=' bg-orange-500 text-white px-4 py-2'>
      <div>
        <ul className=' flex flex-col justify-center items-center gap-6
          transition-all duration-300'>
            {NavLinkis.map((item)=>(
                <li key={item.id}>
                    <a
                    className=' hover:text-gray-700 cursor-pointer'
                     href={item.li}>{item.name}</a>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileNav
