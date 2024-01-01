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
import Finger from '../assets/images/Vector.png'
import CurlyArrow from '../assets/images/57.svg'
import { Icon } from '@iconify/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor,
  faList, faArrowDownWideShort, faCircleRadiation, faCompass, faHospital, faPaperPlane, faCommentDots, faPeopleArrows, faRadiation, faStarHalfStroke, faDownload, faBell, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import TestimonialsHealth from './Testimonials-Health'
import HealthAccordion from './HealthAccordion'
import WaitlistModal from './WaitlistModal'

function Health() {
  return (
    <div className='bg-white'>
      <div className="bg-altru-pink">
      <div className="header bg-altru-pink">
        <Topbar  background={'altru-pink'}/>
</div>
       <div className="lg:mx-auto bg-altru-pink sm:my-10 lg:my-10 relative lg:self-center star-header-home lg:h-44 ">
        <img className='relative  heading-star top-2 lg:inset-x-56 sm:left-6' src={Star} alt="" />
        <div className="absolute top-6 lg:text-center lg:w-2/3 lg:inset-x-52 font-logo home-heading lg:text-3xl">
        Connecting <span className="text-altru-blue">Healthcare Professionals, Hospitals, Patients,</span>  and <span className="text-altru-blue">Community Health Workers</span>  for Enhanced Healthcare Access        </div>
        
       </div>

       <div className="z-20 container my-10 lg:w-full sm:mx-8 flex flex-col lg:justify-center lg:align-middle lg:text-center font-body">
        <p className="text-base">
        Join Altruistech today and unlock a world of collaboration, convenience, and improved healthcare outcomes. We bridge the gap between health professionals seeking rewarding opportunities, hospitals aiming to recruit top talent, patients in need of online medical consultations, and community health workers eager to make a positive impact.
        </p>
      
       <WaitlistModal size="2/3" position="center"/>
        
       </div>
       </div>
       <div className="image-grid pb-20  container lg:grid-rows-2 lg:grid-cols-5 grid sm:grid-cols-2 gap-4 sm:grid-rows-5">
        <img src={Doctor} alt=""  className='rounded-lg h-full w-full'/>
        <div className="yellow-div relative h-full w-full rounded-lg">
        <p className="text-black absolute top-2 right-6 text-right font-bold font-display text-lg">
          Find <br/> Talents
        </p>
        </div>
        <img src={CenterImage} alt="" className="rounded-lg col-span-2 row-span-2"  />
        <img src={CHW} alt="" className='rounded-lg h-full w-full col-span-1' />

        <div className="yellow-div col-span-1 h-full w-full flex justify-center align-middle rounded-lg">
        <p className="text-black align-middle my-auto text-center font-bold font-display text-lg">
          Find Jobs
        </p>
        </div>
        <img src={Hospital} alt="" className='rounded-lg h-full w-full'/>
        <div className="yellow-div relative rounded-lg">
        <p className="text-black absolute bottom-2 left-6 text-left font-bold font-display text-lg">
          Get <br/> Consultation
        </p>
        </div>
       </div>
<div className="grid-two bg-white py-20">
    <div className="container flex flex-col gap-20">
      <div className="lg:flex lg:flex-row  lg:justify-around sm:flex sm:flex-col lg:gap-10">
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
          <FontAwesomeIcon icon={faArrowDownWideShort} className='self-center'  />            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Filter to narrow down  job search results, including options like salary range, job type (full-time, part-time, freelance), and experience level          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
          <FontAwesomeIcon icon={faCircleRadiation} className='self-center' />            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Get personalized job recommendations based on your preferences, search history, and profile information.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
          <FontAwesomeIcon icon={faCompass} className='self-center'/>            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Track the status of your job applications within the app.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
          <FontAwesomeIcon icon={faHospital} className='self-center'/>            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Get access to company profiles and information, including details about the company's mission, culture and other benefits.          </p>
          </div>
        <WaitlistModal size="1/2"/>
        </div>
      
      </div>
      <div className="lg:flex lg:flex-row lg:justify-around lg:items-center sm:flex sm:flex-col lg:gap-10">
        <div className="flex flex-col">
        <div className="relative h-20">
        <img className='absolute w-16 top-0 left-0' src={Finger} alt="" />
        <div className="absolute rounded-3xl bg-altru-pink px-4 py-2 top-6 left-8 text-altru-blue font-body">
        For Healthcare Centers
        </div>
        
</div>
        <h1 className="text-2xl font-display pb-8">
          Recruit Top <span className="text-altru-blue">Health Professionals</span> 
          </h1>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faPaperPlane} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Post job openings with detailed descriptions and requirements.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faArrowDownWideShort} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Review and manage incoming applications from health professionals.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faCommentDots} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Communicate directly with potential candidates within the app.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faList} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Access a database of qualified health professionals and talents.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faCircleRadiation} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Track and manage the recruitment process.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faHospital} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Create a company profile to showcase the organization and its values.         
           </p>
          </div>
         <WaitlistModal size="1/2" />
        </div>
        <img src={Recruit} alt="" className='rounded-lg lg:w-1/2' />

      </div>
      <div className="lg:flex lg:flex-row lg:justify-around lg:items-center sm:flex sm:flex-col lg:gap-10">
        <img src={Patient} alt="" className='rounded-lg lg:w-1/2' />
        <div className="flex flex-col">
        <div className="relative h-20">
        <img className='absolute w-16 top-0 left-0' src={StarOrange} alt="" />
        <div className="absolute rounded-3xl bg-pink-50 px-4 py-2 top-6 left-8 text-altru-orange font-body">
        For Patients
        </div>
        
</div>
        <h1 className="text-2xl font-display pb-8">
          Get <span className="text-altru-blue">Online Medical</span> Consultation
          </h1>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Search and find health professionals and community health workers based on specialty, location, and availability.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faPeopleArrows} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Conduct online medical consultations with health professionals.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faRadiation} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Access personal health records and test results securely.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faPaperPlane} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Receive electronic prescriptions and medication delivery services.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faStarHalfStroke} className='self-center' flip='horizontal' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Provide feedback and ratings for health professionals.            </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faDownload} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Save favorite health professionals for future reference.                   </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faCommentDots} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Engage in secure messaging with health professionals.                           </p>
          </div>
          <WaitlistModal size="1/2" />
        </div>
      
      </div>
      <div className="lg:flex lg:flex-row lg:justify-around lg:items-center sm:flex sm:flex-col lg:gap-10">
        <div className="flex flex-col">
        <div className="relative h-20">
        <img className='absolute w-16 top-0 left-0 rotate-360' src={StarOrange} alt="" />
        <div className="absolute rounded-3xl bg-altru-pink px-4 py-2 top-6 left-8 text-altru-blue font-body">
        For Community Health Workers
        </div>
        
</div>
        <h1 className="text-2xl font-display pb-8">
        Get opportunities to improve public health.          </h1>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faUserDoctor} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Create a profile highlighting skills, experience, and areas of interest.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faBell} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Receive notifications about job openings and new initiatives.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faRadiation} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Get job opportunities specific to community health work.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faCircleArrowUp} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Get points on every of your successful job and convert accumulated point into cash.          </p>
          </div>
          <div className="flex flex-row gap-6">
          <Icon>
            <FontAwesomeIcon icon={faCommentDots} className='self-center' />
            </Icon>
          <p className='font-body py-2 text-left self-start'>
           
          Communicate securely with health professionals and patients who needs your service.                   </p>
          </div>
         <WaitlistModal size="1/2"/>
        </div>
        <img src={Community} alt="" className='rounded-lg sm:order-1 lg:w-1/2' />

      </div>
    </div>
</div>
<div className="bg-black">
<div className="feedback container  bg-black lg:flex lg:flex-row gap-10 justify-between py-20">
  <div className="text-white relative lg:w-1/2">
  <h1 className="text-2xl font-display py-10 text-left">
  We Value Your Feedback: Take Our Survey and Shape the Future of Healthcare Solutions.
  </h1>

  <p className="font-body">
  This survey aims to gather your feedback on various aspects of the app, including its usability, features, and overall effectiveness in connecting health professionals, hospitals, patients, and community health workers. Your honest opinions will help us identify areas for improvement, highlight what we're doing right, and guide our future developments.
  </p>
  <img src={CurlyArrow} alt="" className="sm:hidden lg:block lg:absolute lg:bottom-20 lg:right-0" />
  </div>
  <form action="" className='bg-white flex flex-col gap-8 rounded-lg py-10 px-6 lg:w-1/2'>
    <fieldset className='flex flex-col'>
    <label htmlFor="name" className="font-display">
      Full Name <span className='text-red-900'>*</span>
    </label>
    <input type="text" placeholder='Enter your full Name' name='name' className='font-body p-4 text-sm rounded-md h-8 border-gray-500'  />
    </fieldset>
    <fieldset className='flex flex-col'>
    <label htmlFor="email" className="font-display">
      Email <span className='text-red-900'>*</span>
    </label>
    <input type="text" placeholder='youremail@domain.com' name='email' className='p-4 font-body text-sm  rounded-md h-8 border-gray-500'  />
    </fieldset>
    <fieldset className='flex flex-col'>
    <label htmlFor="feedback" className="font-display">
      What is your feedback to the Solution? <span className='text-red-900'>*</span>
    </label>
    <textarea rows='5' type="text" placeholder='Leave us a message...' name='feedback' className='p-2 font-body text-sm rounded-md border-gray-500'  />
    </fieldset>

    <button className="bg-altru-blue container place-self-center text-white font-button mx-auto rounded-lg py-4 my-6 ">
          Submit Survey
        </button>
  </form>


</div>
</div>
<TestimonialsHealth/>
<div className="bg-altru-blue py-20">
  <div className="container faqs lg:flex lg:flex-row gap-8">
    <div className="lg:w-1/2 bg-light-blue px-6 rounded-lg">
    <HealthAccordion/>
    </div>


    <div className='text-white lg:w-1/2 flex flex-col gap-8'>
    <div className="relative h-20">
        <img className='absolute w-16 top-0 left-0' src={StarOrange} alt="" />
        <div className="absolute rounded-3xl bg-altru-pink px-4 py-2 top-6 left-8 text-altru-orange font-body">
        Frequently Asked Questions
        </div>
        
</div>
      <p className="font-logo text-2xl">
      We have compiled a list of frequently asked questions to provide you with quick and helpful answers.
      </p>
      <p className="font-body">
      Still have questions that aren't covered? visit our help desk today and get the answers you need.
      </p>
      <Link to='/contact-us'>
        <button className="bg-white text-altru-blue font-button px-8 py-6 rounded-xl">
          Contact Our Help Desk
        </button>
      </Link>
    </div>
</div>
  </div>

</div>

   
  )
}

export default Health