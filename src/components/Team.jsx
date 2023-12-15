import React from 'react'
import TeamHero from '../assets/images/team.png'
import Star from '../assets/images/Shape.svg'
import Topbar from './Topbar'
import TeamCard from './TeamCard'

function Team() {
  return (
    <div>
        <div className="team-hero">
            <Topbar/>
        <div className='hero-div lg:flex lg:flex-row gap-16 lg:ms-16 lg:me-16 lg:py-20'>
            <img src={TeamHero} alt="" className='lg:w-1/2' />
           
            <div>
                <div className="relative h-24">
                <img src={Star} alt="" className='absolute h-16' />
                <p className='font-logo text-3xl absolute top-6 left-8'>
                Our <span className="text-altru-blue">Team</span> 
                </p>
                </div>
  <p className='pb-4 font-body'>
  Our team is made up of dedicated individuals committed to driving positive change and advancing the United Nations Sustainable Development Goals.
  </p>
  <p className='font-body'>
  With diverse backgrounds and expertise in technology, sustainability, and innovation, our team collaborates tirelessly to make a meaningful impact. We believe that collective action is the key to addressing global challenges, and our team embodies this spirit as we work together to create innovative solutions for a better world.
  </p>
            </div>
        </div>

        </div>
        <div className='team-container bg-white'>
        <div className="team-main bg-inherit mx-auto">
            <p className="font-logo text-3xl">
                Our <span className="text-altru-blue">Team</span> of <span className='text-altru-blue'>Innovators</span>
            </p>
            <div className="grid grid-rows-2 grid-cols-4">
            <TeamCard/>
            </div>

        </div>
        </div>
        </div>
  )
}

export default Team