import React from 'react'
import Topbar from './Topbar'
import Star from '../assets/images/about-star.svg'
import ReactPlayer from 'react-player'
import TestimonialsWater from './TestimonialsWater'


function Water() {
  return (
    <div>
      <div className="bg-light-blue">
        <Topbar/>
      <div className="header relative flex flex-col mt-0 mb-10 py-24  ">
        <div className= "self-center px-6 py-2 rounded-3xl" style={{backgroundColor: `#FFF4E0`}}>
          <p className="text-altru-blue font-body">
          SDG 6, SDG 9, SDG 10
          </p>
        </div>
        <div className="relative h-20 self-center container sm:w-full lg:w-1/2 my-12">
          <img src={Star} alt="" className='absolute water-star top-4 left-0'/>
        <p className="font-logo star-text text-3xl text-center absolute top-10 left-10">
        Altruistech <span className="text-altru-blue">Clean Water</span>  Innovation
        </p>
        </div>

        <p className="font-body self-center container lg:w-1/2 sm:w-full">
        ACWI solution promotes access to clean water and sanitation in rural communities in Sierra Leone by leveraging IoT to detect particles in water and validate its level of safety using AI. We also recycle well water and make it safe for drinking using a ceramic purifier.
        </p>
       
        <button className="button button-enq bg-altru-blue hover:bg-blue-700 text-white py-2 self-center sm:w-full lg:w-2/6 mt-16 px-4 rounded">
        Make Enquiry
    </button>
      </div>
 

   
      </div >

      <div className="container h-full video-div">
  <div className="self-center sm:container w-full h-full relative">
    <ReactPlayer url="https://youtu.be/IMRxWKXrKBg" controls={true}
        width="100%"
        height="450px" playing={true} className="video rounded-lg border-8 border-altru-pink" />
 
  </div>
</div>
      <div className='bg-black overflow-x-hidden my-16'>
        <div className='flex flex-row container py-5'>

        
        <img src={Star} alt=""  className=''/>
        <p className=' text-altru-yellow sliding self-center w-max '>
          
        Our Impact: <span className='text-white'>
           Provided access to clean water to </span> <span className='text-altru-mango'> 14 slum communities </span> <span className='text-purple-700'>
             with over 3,800 people.</span>
        </p>
      </div>
      </div>
      <TestimonialsWater/>
    </div>
  )
}

export default Water


   
