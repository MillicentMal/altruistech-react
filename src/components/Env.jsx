import React from 'react'
import Topbar from './Topbar'
import Header from '../assets/images/env-head.jpeg'
import EnvBod from '../assets/images/env-bod.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Mid from '../assets/images/mid.jpeg'
import TopLeft from '../assets/images/top-left.jpeg'
import TopRight from '../assets/images/top-right.jpeg'
import BottomLeft from '../assets/images/bottom-left.jpeg'
import BottomRight from '../assets/images/env-head.jpeg'


function Env() {
  return (
    <div>
      <div className="bg-altru-pink">
        <Topbar/>
        <div className="lg:flex lg:flex-row mx-auto justify-evenly content-center">
        <div className='hero-div lg:flex lg:flex-row lg:gap-16 sm:m-10 sm:py-24 lg:ms-16 lg:me-16 lg:py-20 sm:flex sm:flex-col sm:gap-10'>

            <div className='self-center'>
              <div className="bg-light-blue w-max px-4 py-2 rounded-2xl">
                <p className="text-altru-blue">
                S.D.G. 13, 8, 15. 12, 17                </p>
              </div>
                <div className="relative h-24">
               
                <p className='font-logo text-3xl pb-10'>
                Altruistech<span className="text-altru-blue"> Environmental Compliance</span>   Innovation
                </p>
                </div>
  <p className='pb-4'>
  Our team is made up of dedicated individuals committed to driving positive change and advancing the United Nations Sustainable Development Goals.
  </p>
  <p>
  With diverse backgrounds and expertise in technology, sustainability, and innovation, our team collaborates tirelessly to make a meaningful impact. We believe that collective action is the key to addressing global challenges, and our team embodies this spirit as we work together to create innovative solutions for a better world.
  </p>
  <button className="button bg-altru-blue hover:bg-blue-700 w-2/3 mt-6 text-white py-2 px-4 rounded">
        Make Enquiry
    </button>
            </div>
            <img src={Header} alt="" className='lg:w-1/2 rounded-md border-8 border-light-blue' />

        </div>
    </div>
    </div>
    <div className="bg-black black-div text-white gap-10 mx-auto w-4/5 p-12 lg:flex lg:flex-row my-20">
        <img src={EnvBod} alt="" className='border-8 lg:w-1/2 border-altru-pink h-3/5 object-contain sm:w-full sm:pb-10' />
    <div className='lg:self-center'>
    
    <p className='font-body text-gray-700 sm:mt-6'>
    This solution uses refurbished electronic waste and STEM materials to enhance youth creativity skills. It promotes STEM education, particularly among Sierra Leone youth, to solve local or community problems in Sierra Leone. This initiative engages young people, mainly girls and women aged 7 to 25, in S.T.E.M. education programs such as workshops, boot camps, and mentorship opportunities tailored around building innovative solutions. We also provide exposure by allowing them to showcase their learnings at a global level.
    </p>
    <div className='relative my-6'>
        <div className='rounded-full bg-altru-blue h-10 w-10'> 
    <div className='text-white absolute bottom-2 left-5'>
Donate Now          <span>
            <FontAwesomeIcon icon={faArrowRight} className='text-white text-center ps-2' />
          </span>
        </div>
        </div>
      </div>
    </div>
      
      </div>

      <div className="bg-light-blue flex flex-col">
      <div className="grid lg:grid-cols-4 grid-rows-2 sm:grid sm:grid-cols-2 sm:grid-rows-3 mx-auto self-center gap-6 w-4/5 py-16">
        <img src={TopLeft} alt="" className='object-cover h-full rounded-md sm:w-full' />
        <img src={Mid} alt="" className='lg:col-span-2 lg:row-span-2 object-cover h-full sm:col-span-2 sm:w-full rounded-md sm:row-start-2 ' />

        <img src={TopRight} alt="" className='object-cover h-full rounded-md sm:w-full'  />
        <img src={BottomLeft} alt="" className='object-cover h-full rounded-md sm:w-full ' />
        <img src={BottomRight} alt="" className='object-cover h-full rounded-md sm:w-full' />

      </div>
      </div>
    </div>
  )
}

export default Env