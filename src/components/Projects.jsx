import React from 'react'
import web1 from '../assets/website/book-store.jpg'
import web2 from '../assets/website/cozweb.jpg'
import web3 from '../assets/website/portfolio.jpg'
import web4 from '../assets/website/restaurant.jpg'
const ProejctData = [
    {
        id:1,
        name:"Online Book Store",
        image:web3,
        link:'#'
    },
    {
        id:2,
        name:"Restaurant Web page",
        image:web2,
        link:'#'
    },
    {
        id:3,
        name:"Web Development company",
        image:web4,
        link:'#'
    },
    {
        id:4,
        name:"Portfolio",
        image:web1,
        link:'#'
    },
   
]
const Projects = () => {
  return (
   <>
   <span id='project'></span>
    <div className=' py-14 dark:bg-gray-900 dark:text-white'>
        <div className=' container'>
           <div className=' flex justify-between items-center mb-8'>
               <div>
                <h1 className=' uppercase text-3xl font-bold'>Featured Project</h1>
                <p>Lorem ipsum dolor sit amet.</p>
               </div>
               <div>
                <button className=' bg-primary hover:bg-primary/80
                 duration-300 py-2 px-6 text-white rounded-md'>View All</button>
               </div>
           </div>
           {/* card section  */}
           <section>
            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6'>
             {
                ProejctData.map((item)=>(
                    <div key={item.id} >
                        <div className=' h-[340px] sm:h-[440px]
                     place-items-center w-full bg-dark/80 grid
                      p-4 sm:p-6'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className=' pt-4 space-y-3'>
                            <h1 className=' text-3xl font-bold'>{item.name}</h1>
                            <div>
                                <a 
                                className=' text-primary uppercase'
                                href={item.link}>Know More...</a>
                            </div>
                        </div>
                    </div>
                ))
             }
            </div>
           </section>
        </div>
      
    </div>
   </>
  )
}

export default Projects
