import React from 'react'
import Abdul from '../assets/images/abdul.png'

import Daniel from '../assets/images/daniel.png'
import Ade from '../assets/images/Ade.jpeg'
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

    }, 
    {
    "name": "Adediwura Adedigba", 
    "title": "Product Developer", 
    'description': 'As a product developer at Altruistech, Adediwura is responsible for the development of the Altruistech products. He is a full-stack developer with a passion for building products that solve real-world problems. He is also a student at the ALU, where he is studying Computer Science.',
    'link': 'https://www.linkedin.com/in/adedigba-adediwura-a2b202227/', 
    'image': Ade


    }
]
function TeamGridTwo() {

    const renderItems = Team.map(
        ({ image,name, title, description, link}, key) => (
         
            
             
            
          <TeamCard className="h-full" image={image} founderName={name} founderDescription={description} link={link} title={title} />
 
        
      
            
        
        ),
      );
  return (
    <div className="bg-white py-16">
    <div className='bg-altru-yellow mx-auto pt-10 pb-10 container' id='team-corner'>
                  <div className="lg:grid lg:grid-cols-3 px-6 gap-6 lg:grid-rows-2">

      {renderItems}
      <div className='lg:grid lg:row-start-2 lg:col-span-1'>
        
      </div>
      </div>
      
      </div>
      </div>
      
  )
}

export default TeamGridTwo