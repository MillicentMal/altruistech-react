import React from 'react'
import mission from '../assets/images/mission.svg'


function Mission() {
  return (
    <div className='missions lg:py-10 sm:px-6 sm:py-20'>
        <div className='mission-text lg:w-1/2 lg:ps-32'>
           <h1 className="missions-header font-display w-full">
            Join us in Our <span className='text-altru-blue'>Mission. </span> 
           </h1>
           <p className="missions-body lg:w-2/3">
           Altruistech Group of Innovations invites you on our journey to create a better world for all. Together, we can turn our shared vision of a more sustainable, equitable, and prosperous future into a reality.
           </p>
           <button className="button bg-altru-blue lg:w-1/2 sm:w-2/3  hover:bg-blue-700 text-white py-2 px-4 rounded">
        Donate Now
    </button>
        </div>
        <img className='lg:pe-20 mission-image ' src={mission} alt="Missions" />
    </div>
  )
}

export default Mission