import React from 'react'
import { FaCameraRetro, FaCode } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'

const SkillData = [
    {
        id:1,
        name:'UI Design',
        icon: <FaCameraRetro/>,
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ipsum voluptatum sint exercitationem accusamus praesentium?",
        link:'#'
    },
    {
        id:2,
        name:'Product Design',
        icon: <GiNotebook/>,
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ipsum voluptatum sint exercitationem accusamus praesentium?",
        link:'#'
    },
    {
        id:3,
        name:'Web Development',
        icon: <FaCode/>,
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ipsum voluptatum sint exercitationem accusamus praesentium?",
        link:'#'
    },
]
const Skills = () => {
  return (
    <>
    <span id='skill'></span>
    <div className='  py-14 dark:bg-gray-900 dark:text-white'>
        <div className=' container '>
            <div className=' grid grid-cols-1 sm:grid-cols-2
             md:grid-cols-3 gap-4'>
                {
                    SkillData.map((item)=>(
                        <div className=' group space-y-3 bg-dark
                         p-4 hover:bg-primary duration-500
                          text-white rounded-md mt-4'>
                            <div className=' text-5xl
                              text-white'>{item.icon}</div>
                            <h1>{item.name}</h1>
                            <p>{item.desc}</p>
                            <a href={item.link} className=' inline-block
                             text-lg font-semibold py-3
                              group-hover:text-white
                               duration-300'></a>
                        </div>
                    ))
                }
            </div>

        </div>
      
    </div>
    </>
  )
}

export default Skills
