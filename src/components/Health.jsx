import React from 'react'
import Topbar from './Topbar'
import Star from '../assets/images/about-star.svg'
import StarOrange from '../assets/images/Shape.svg'
import Doctor from '../assets/images/health-1.jpeg'
import CenterImage from '../assets/images/health-3.png'
import CHW from '../assets/images/health-4.png'
import Hospital from '../assets/images/health-2.jpeg'
import Job from '../assets/images/jobs-health.png'
import Recruit from '../assets/images/Recruit.png'
import Patient from '../assets/images/Patient.png'
import Community from '../assets/images/chw-pic.png'
import { Icon } from '@iconify/react';
import userSearch from '@iconify/icons-mdi/user-search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faFilter, faFan } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Health() {
  return (
    <div className='bg-altru-pink'>
      <div className="header bg-altru-pink">
        <Topbar  background={'altru-pink'}/>
</div>
       <div className="lg:mx-auto sm:my-10 lg:my-10 relative lg:self-center star-header-home lg:h-44 ">
        <img className='relative  heading-star top-2 lg:inset-x-56 sm:left-6' src={Star} alt="" />
        <div className="absolute top-6 lg:text-center lg:w-2/3 lg:inset-x-52 font-logo home-heading lg:text-3xl">
        Connecting <span className="text-altru-blue">Healthcare Professionals, Hospitals, Patients,</span>  and <span className="text-altru-blue">Community Health Workers</span>  for Enhanced Healthcare Access        </div>
        
       </div>

       <div className="z-20 container my-10 lg:w-full sm:mx-8 flex flex-col lg:justify-center lg:align-middle lg:text-center font-body">
        <p className="text-base">
        Join Altruistech today and unlock a world of collaboration, convenience, and improved healthcare outcomes. We bridge the gap between health professionals seeking rewarding opportunities, hospitals aiming to recruit top talent, patients in need of online medical consultations, and community health workers eager to make a positive impact.
        </p>
        <Link to='/join'>
        <button className="bg-altru-blue container place-self-center text-white font-button w-1/2 mx-auto button-star rounded-lg py-4 my-6 ">
          Join Waitlist
        </button>
        </Link>
       </div>

       <div className="image-grid pb-20  container lg:grid-rows-2 lg:grid-cols-5 grid sm:grid-cols-2 gap-6 sm:grid-rows-5">
        <img src={Doctor} alt=""  className='rounded-lg h-full w-full'/>
        <div className="bg-altru-yellow h-full w-full rounded-lg">
        </div>
        <img src={CenterImage} alt="" className="rounded-lg col-span-2 row-span-2"  />
        <img src={CHW} alt="" className='rounded-lg h-full w-full' />

        <div className="bg-altru-yellow h-full w-full rounded-lg">
        </div>
        <img src={Hospital} alt="" className='rounded-lg h-full w-full'/>
        <div className="bg-altru-yellow h-full w-full rounded-lg">
        </div>
       </div>
<div className="grid-two bg-white py-20">
    <div className="container flex flex-col gap-8">
      <div className="lg:flex lg:flex-row lg:justify-around sm:flex sm:flex-col lg:gap-10">
        <img src={Job} alt="" className='rounded-lg lg:w-1/2' />
        <div className="flex flex-col">
        <div className="relative h-20">
        <img className='absolute w-16 top-0 left-0' src={StarOrange} alt="" />
        <div className="absolute rounded-3xl bg-altru-pink px-4 py-2 top-6 left-8 text-altru-orange font-body">
        For Healthcare Professionals
        </div>
        
</div>
        <h1 className="text-2xl font-logo pb-8 text-left">
          Find <span className="text-altru-blue">Job</span> Opportunities.
          </h1>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <Link to='/join'>
        <button className="bg-altru-blue container place-self-center text-white font-button lg:w-full mx-auto button-star rounded-lg py-4 my-6 ">
          Join Waitlist
        </button>
        </Link>
        </div>
      
      </div>
      <div className="lg:flex lg:flex-row lg:justify-around lg:items-center sm:flex sm:flex-col lg:gap-10">
        <div className="flex flex-col">
        <div className="relative h-20">
        <img className='absolute w-16 top-0 left-0' src={StarOrange} alt="" />
        <div className="absolute rounded-3xl bg-altru-pink px-4 py-2 top-6 left-8 text-altru-orange font-body">
        For Healthcare Professionals
        </div>
        
</div>
        <h1 className="text-2xl font-logo pb-8">
          Find <span className="text-altru-blue">Job</span> Opportunities.
          </h1>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <Link to='/join'>
        <button className="bg-altru-blue container place-self-center text-white font-button lg:w-full mx-auto button-star rounded-lg py-4 my-6 ">
          Join Waitlist
        </button>
        </Link>
        </div>
        <img src={Recruit} alt="" className='rounded-lg lg:w-1/2' />

      </div>
      <div className="lg:flex lg:flex-row lg:justify-around lg:items-center sm:flex sm:flex-col lg:gap-10">
        <img src={Patient} alt="" className='rounded-lg lg:w-1/2' />
        <div className="flex flex-col">
        <div className="relative h-20">
        <img className='absolute w-16 top-0 left-0' src={StarOrange} alt="" />
        <div className="absolute rounded-3xl bg-altru-pink px-4 py-2 top-6 left-8 text-altru-orange font-body">
        For Healthcare Professionals
        </div>
        
</div>
        <h1 className="text-2xl font-logo pb-8">
          Find <span className="text-altru-blue">Job</span> Opportunities.
          </h1>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <Link to='/join'>
        <button className="bg-altru-blue container place-self-center text-white font-button lg:w-full mx-auto button-star rounded-lg py-4 my-6 ">
          Join Waitlist
        </button>
        </Link>
        </div>
      
      </div>
      <div className="lg:flex lg:flex-row lg:justify-around lg:items-center sm:flex sm:flex-col lg:gap-10">
        <div className="flex flex-col">
        <div className="relative h-20">
        <img className='absolute w-16 top-0 left-0' src={StarOrange} alt="" />
        <div className="absolute rounded-3xl bg-altru-pink px-4 py-2 top-6 left-8 text-altru-orange font-body">
        For Healthcare Professionals
        </div>
        
</div>
        <h1 className="text-2xl font-logo pb-8">
          Find <span className="text-altru-blue">Job</span> Opportunities.
          </h1>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
            Search for jobs based on various criteria such as job title, location, skills, and keyword.
          </p>
          </div>
          <Link to='/join'>
        <button className="bg-altru-blue container place-self-center text-white font-button lg:w-full mx-auto button-star rounded-lg py-4 my-6 ">
          Join Waitlist
        </button>
        </Link>
        </div>
        <img src={Community} alt="" className='rounded-lg sm:order-1 lg:w-1/2' />

      </div>
    </div>
</div>
    </div>
  )
}

export default Health