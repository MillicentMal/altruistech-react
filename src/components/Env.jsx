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
import TestimonialsEnv from './TestimonialsEnv'
import StarB from '../assets/images/Shape.svg'


function Env() {
  return (
    <div>
      <div className="bg-altru-pink">
        <Topbar background={"altru-pink"}/>
        <div className="lg:flex lg:flex-row mx-auto justify-evenly content-center">
        <div className='hero-div lg:flex lg:flex-row lg:gap-16 sm:m-10 sm:py-24 lg:ms-16 lg:me-16 lg:py-20 sm:flex sm:flex-col sm:gap-10'>

            <div className='self-center'>
              <div className="bg-light-blue w-max px-4 py-2 rounded-2xl">
                <p className="text-altru-blue font-body">
                S.D.G. 13, 8, 15, 12, 17                </p>
              </div>
                <div className="relative">
               
                <p className='font-logo text-3xl py-10'>
                Altruistech<span className="text-altru-blue"> Environmental Compliance</span>   Innovation
                </p>
                </div>
  <p className='pb-4 font-body'>
  Our team is made up of dedicated individuals committed to driving positive change and advancing the United Nations Sustainable Development Goals.
  </p>
  <p className='font-body'>
  With diverse backgrounds and expertise in technology, sustainability, and innovation, our team collaborates tirelessly to make a meaningful impact. We believe that collective action is the key to addressing global challenges, and our team embodies this spirit as we work together to create innovative solutions for a better world.
  </p>
  <button className="button bg-altru-blue hover:bg-blue-700 lg:w-2/3 w-full mt-6 text-white py-2 px-4 rounded">
        Make Enquiry
    </button>
            </div>
            <img src={Header} alt="" className='lg:w-1/2 mb-10 rounded-md border-solid border-8 border-light-blue' />

        </div>
    </div>
    </div>
    <div className="bg-black black-div text-white gap-10 mx-auto w-4/5 max-[766px]:w-5/6  max-[766px]:p-6 lg:p-12 lg:flex lg:flex-row my-20">
        <img src={EnvBod} alt="" className='border-8 border-solid rounded-lg lg:w-1/2 border-altru-pink lg:h-4/5 object-contain sm:w-full sm:pb-10' />
    <div className='lg:self-center'>
    
    <p className='font-body text-gray-700 sm:mt-6 sm:mx-0'>
    The Altruistech environment compliance gauge project enhances compliance with environmental safety policies among large industries, educational institutions, and S.M.E.s, improves the environmental impact assessment process, promotes a safety-conscious environment,  and enhances ecology conservation decision-making using AI & live data. We aim to revolutionize environmental compliance and advocate for a safer environment or more responsible use of resources by utilizing exponential technologies such as sensors, robotics, and data-driven analytics. This project seeks to promote public environmental accountability by emphasizing the importance of holding individuals and organizations responsible for their actions and decisions that affect the environment, particularly when these actions significantly impact the public or society.    </p>
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

      <div className="bg-light-blue flex flex-col pt-10 pb-0">
      <div className="bg-altru-pink self-center text-altru-mango px-4 py-2 w-max rounded-3xl">
        Our Gallery
      </div>
      <div className="relative hub-star-box  h-20 lg:self-center lg:w-1/2  mb-12">
          <img src={StarB} alt="" className='absolute hub-star lg:top-4 lg:left-10 sm:left-10'/>
        <p className="font-logo text-3xl sm:text-justify absolute top-10 left-16 hub-star-text">
        See Some of The Things we are Doing
        </p>
        </div>
      <div className="env-grid lg:grid-cols-4 grid-rows-2 sm:grid sm:grid-cols-2 mx-auto self-center gap-6 w-4/5 py-10">
        <img src={TopLeft} alt="" className='top-left object-cover h-full rounded-md sm:w-full' />
        <img src={Mid} alt="" className='lg:col-span-2 env-mid lg:row-span-2 lg:col-start-2 lg:row-start-1 object-cover h-full sm:col-span-2 w-full rounded-md sm:row-start-2 ' />

        <img src={TopRight} alt="" className='object-cover h-full top-right rounded-md sm:row-start-1 sm:w-full'  />
        <img src={BottomLeft} alt="" className='bottom-left object-cover h-full rounded-md sm:w-full ' />
        <img src={BottomRight} alt="" className='bottom-right object-cover h-full rounded-md sm:w-full' />

      </div>
      </div>
      <TestimonialsEnv/>
    </div>
  )
}

export default Env