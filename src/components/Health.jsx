import React from 'react'
import Topbar from './Topbar'
import Star from '../assets/images/about-star.svg'
import Doctor from '../assets/images/health-1.jpeg'
import CenterImage from '../assets/images/health-3.png'
import CHW from '../assets/images/health-4.png'
import Hospital from '../assets/images/health-2.jpeg'

function Health() {
  return (
    <div>
      <div className="header bg-altru-pink">
        <Topbar />
        <div className='heading mx-auto lg:flex lg:flex-col'>
        <div className="relative h-32 mx-auto w-2/3 my-6">
          <img src={Star} alt="" className='absolute top-4 left-8'/>
        <p className="font-logo text-3xl text-center absolute top-10 left-10">
        Connecting <span className="text-altru-blue">Healthcare Professionals</span> , <span className="text-altru-blue"> Hospitals, Patients,</span> and <span className="text-altru-blue">Community Health Workers</span>  for Enhanced Healthcare Access
        </p>
        </div>
        <p className='mx-auto text-center pt-10 w-2/3'>
        Join Altruistech today and unlock a world of collaboration, convenience, and improved healthcare outcomes. We bridge the gap between health professionals seeking rewarding opportunities, hospitals aiming to recruit top talent, patients in need of online medical consultations, and community health workers eager to make a positive impact.
        </p>
        <button className="button lg:ms-32 justify-self-center self-center my-8 w-2/5 bg-altru-blue hover:bg-blue-700 text-white py-2 px-4 rounded">
        Join Waitlist
    </button>
      </div>
      <div className="image-grid">
        <div className='lg:grid lg:grid-cols-5 lg:grid-rows-2 sm:grid sm:grid-cols-2 sm:grid-rows-5 gap-6 mx-auto w-4/5 my-20 pb-20'>
          <img src={Doctor} alt="" className='rounded-md h-full' />
          <div className="relative bg-altru-yellow rounded-md">
            <p className='font-display absolute top-5 right-5'>
              Find Talent
            </p>
          </div>
        <img src={CenterImage} alt="" className='lg:col-span-2 lg:row-span-2 rounded-md' />
        <img src={CHW} alt="" className='rounded-md h-full' />
          <div className="relative bg-altru-yellow rounded-md">
            <p className='font-display absolute top-1/2 inset-x-1/3 '>
              Find Jobs
            </p>
          </div>
    <img src={Hospital} alt=""  className='h-full rounded-md'/>
    <div className="relative bg-altru-yellow rounded-md">
            <p className='font-display absolute bottom-5 left-5'>
Get Consultation            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="body">
      
    </div>
    </div>
  )
}

export default Health