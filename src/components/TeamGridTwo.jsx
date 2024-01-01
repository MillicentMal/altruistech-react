import React from 'react'
import Abdul from '../assets/images/abdul.png'

import Daniel from '../assets/images/daniel.png'
import Ade from '../assets/images/Ade.jpeg'
import Gabriel from '../assets/images/gabriel.svg'
import Axel from '../assets/images/axel.svg'
import TeamCard from './TeamCard'


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
        "description": " Daniel Falama is an - 18-year-old robotics and software engineering student in Sierra Leone. Daniel has over seven years of innovation experience and is highly recognized for his contributions to community development. In 2020, Daniel was among the top 5 under 15 young climate change champions in Sierra Leone. This landed him the opportunity to volunteer with the Sierra Leone Ministry of Environment. He has also represented Sierra Leone as the team captain in consecutive World Robotics competitions in Switzerland and Singapore. Find his Facebook profile here",
        "link": "https://www.facebook.com/daniel.falama.92 ", 
        "image": Daniel

    }, 

   

    {
        "name": "Gabriel Oke",
        "title": "Co-Founder",
        "description": "I hold an MSc in Global Health specializing in healthcare management from the University of Global Health Equity, Rwanda, an initiative by Partners in Health. As the founder of Medlabconvo, my organization is dedicated to enhancing the personal and professional capacities of 500+ healthcare students and young professionals by the end of 2023. My AI certification from Nexford University, combined with a background as a Medical Laboratory Scientist at Nigerian Hospital Abuja, Nigeria, and over five years of experience in project management, journalism, health communications, and research, positions me as a leader at the intersection of healthcare, project management, and technology.", 
        "link": "https://www.linkedin.com/in/gabrieloke/", 
        "image": Gabriel

    }, 
    {
        "name": "Axel Shimwa",
        "title": "Co-Founder",
        "description": "Axel is a final year medical student from the University of Global Health Equity (UGHE), Rwanda. With an interest in innovation in healthcare, he completed the global innovation lab at Babson College KMH Center, working with Insightiv Rwanda. This AI-based startup improves access to radiology services. He participated in a hackathon at UGHE innovation lab with a  project to digitize the medical referral system in Rwanda.  He is a Savvy fellow, a program designed to build a new generation of impactful entrepreneurs. One day, I aspire to co-found a leading digital health tech company in Rwanda.",
        "link": "https://www.linkedin.com/in/axel-shimwa-792299192/", 
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