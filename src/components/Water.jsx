import React from 'react'
import Topbar from './Topbar'
import Star from '../assets/images/about-star.svg'
import ReactPlayer from 'react-player'


function Water() {
  return (
    <div>
      <div className="bg-light-blue">
        <Topbar/>
      <div className="header flex flex-col mt-0 py-24">
        <div className= "self-center px-6 py-2 rounded-3xl" style={{backgroundColor: `#FFF4E0`}}>
          <p className="text-altru-blue">
          SDG 6, SDG 9, SDG 10
          </p>
        </div>
        <div className="relative h-20 self-center w-1/2 my-12">
          <img src={Star} alt="" className='absolute top-4 left-0'/>
        <p className="font-logo text-3xl text-center absolute top-10 left-10">
        Altruistech <span className="text-altru-blue">Clean Water</span>  Innovation
        </p>
        </div>
        <p className="font-body self-center w-1/2">
        ACWI solution promotes access to clean water and sanitation in rural communities in Sierra Leone by leveraging IoT to detect particles in water and validate its level of safety using AI. We also recycle well water and make it safe for drinking using a ceramic purifier.
        </p>
        <button className="button bg-altru-blue hover:bg-blue-700 text-white py-2 self-center w-2/6 my-16 px-4 rounded">
        Make Enquiry
    </button>
      </div>
      </div >

      <div className="relative bg-altru-pink rounded-lg flex flex-col p-8 max-w-max mx-auto">
      
        <div className="relative self-center ">
          <ReactPlayer url='https://youtu.be/IMRxWKXrKBg' />
        </div>
      </div>
    </div>
  )
}

export default Water