import React from 'react'
import Abdul from '../assets/images/abdul.png'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Daniel from '../assets/images/daniel.png'
import Abdulai from '../assets/images/abdulai.png'
import Gabriel from '../assets/images/gabriel.svg'
import Axel from '../assets/images/axel.svg'
import TeamCard from './TeamCard'
import { Link } from 'react-router-dom'
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Team = [ 
    {
        "name": "Abdul Kareem Sesay",
        "title": "Founder",
        "description": " Abdul Karim Sesay is a creative technologist, an aspiring researcher, and a practicing data analyst with over a decade of experience in technology innovation. He has completed half a dozen projects, mostly climate tech and awareness related in his home country, and the success of these projects inspired a movement that supported the founding of the Altruistech Group of Innovations.",
        "link": "https://www.linkedin.com/in/abdul-karim-sesay-2858b6203/",
        "image": Abdul

    }, 
   
    {
        "name": "Daniel Falama",
        "title": "Founder",
        "description": "Daniel  is a creative technologist, an aspiring researcher, and a practicing data analyst with over a decade of experience in technology innovation. He has completed half a dozen projects, mostly climate tech and awareness related in his home country, and the success of these projects inspired a movement that supported the founding of the Altruistech Group of Innovations.",
        "link": "https://www.linkedin.com/in/abdul-karim-sesay-2858b6203/", 
        "image": Daniel

    }, 
   

    {
        "name": "Gabriel Oke",
        "title": "Co-Founder",
        "description": "Gabriel  is a creative technologist, an aspiring researcher, and a practicing data analyst with over a decade of experience in technology innovation. He has completed half a dozen projects, mostly climate tech and awareness related in his home country, and the success of these projects inspired a movement that supported the founding of the Altruistech Group of Innovations.",
        "link": "https://www.linkedin.com/in/abdul-karim-sesay-2858b6203/", 
        "image": Gabriel

    }, 
    {
        "name": "Axel Shimwe",
        "title": "Co-Founder",
        "description": "Axel  is a creative technologist, an aspiring researcher, and a practicing data analyst with over a decade of experience in technology innovation. He has completed half a dozen projects, mostly climate tech and awareness related in his home country, and the success of these projects inspired a movement that supported the founding of the Altruistech Group of Innovations.",
        "link": "https://www.linkedin.com/in/abdul-karim-sesay-2858b6203/", 
        "image": Axel

    }
]
function TeamGrid() {

    const renderItems = Team.map(
        ({ image,name, title, description, link}, key) => (
         
            
             
            
          <TeamCard image={image} founderName={name} founderDescription={description} link={link} title={title} />
 
        
      
            
        
        ),
      );
  return (
    <div className="bg-white py-16">
    <div className='bg-altru-yellow mx-auto my-10 pt-0 pb-10 container' id='team-corner'>
                  <div className="lg:grid lg:grid-cols-4 gap-6 lg:grid-rows-">
<div className="innovators-header ps-6 col-span-2 top-0 sm:pb-4 left-0 bg-white rounded-e-md">
<div className="rounded-3xl bg-altru-pink w-max text-altru-blue  px-4 py-3 my-4 font-body">
  Our Team
</div>

<p className='font-display text-2xl my-4'>
  Our <span className='text-altru-blue'>Founding</span> Innovators
</p>

<div className="sdg-right ps-5 mb-6 sm:mt-6 text-sm me-6 relative font-body border-l-4 border-l-altru-yellow">
        <p>
        We believe that technology can be a powerful force for good, and we are using our skills and expertise to develop solutions that can make a real difference in the world.
        </p>
        <Link>
        <div className='relative mt-6
         rounded-full bg-altru-yellow h-10 w-10'> 

        </div>
        <div className='text-altru-blue absolute bottom-2 left-8'>
View All Our Team Members          <span>
            <FontAwesomeIcon icon={faArrowRight} className='text-altru-blue text-center ps-2' />
          </span>
        </div>
        </Link>
      </div>
</div>
      {renderItems}
      <div className='lg:grid lg:row-start-2 lg:col-span-2'>
        
      </div>
      </div>
      
      </div>
      </div>
      
  )
}

export default TeamGrid