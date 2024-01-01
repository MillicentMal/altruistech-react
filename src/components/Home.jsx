import React from 'react'
import Topbar from './Topbar'
import Star from '../assets/images/Shape.svg'
import Creativity from '../assets/images/creativity-hub.png'
import Partners from './Partners'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons'
import SdgBlue from '../assets/images/blue-sdg.svg'
import SdgIcon from '../assets/images/sdg-icon.svg'
import TeamGrid from './TeamGrid'
import { useState, useEffect } from "react";
import Health from '../assets/images/health-home.svg'
import Water from '../assets/images/water-home.svg'
import Env from '../assets/images/Env-home.svg'



const images = [
  Creativity, 
  Water, 
  Env, 
  Health
];
function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // change image every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <div className='bg-altru-pink overflow-x-hidden'>
     <Topbar background={"altru-pink"}/>
     <div className="relative mb-4  lg:mx-32 sm:ms-6 my-20">
        <img className='absolute top-0 left-0' src={Star} alt="" />
        <div className="absolute rounded-3xl bg-white px-4 py-2 top-6 left-8 text-altru-orange font-body">
        Fostering Sustainable Future.
        </div>
        
</div>
     <div className='home lg:py-10 sm:px-6 sm:py-20'>
    
        <div className='mission-text lg:w-1/2 lg:ps-32 my-20'>
           <h1 className="missions-header font-display w-full">
           Empowering a More <span className='text-altru-blue'>Sustainable  </span> World 
           </h1>
           <p className="missions-body lg:w-full font-body">
           We are on a journey to tackle global challenges, reduce inequality, and ensure a better future for all. We're dedicated to driving positive change by addressing the UN Sustainable Development Goals through innovative technology, and a strive to create a brighter and more equitable world.           </p>
           <Link
            to="/contact-us">
           <button className="button bg-altru-blue lg:w-1/2 sm:w-2/3  hover:bg-blue-700 text-white py-2 px-4 rounded">
Contact Us    </button></Link>
        </div>
        
        <img className='lg:pe-20 lg:w-1/2 animated-image' src={images[index]} alt="Missions" />
    </div>
    <Partners/>

    <div className="sdgs h-max mb-0">
      <div className="lg:flex lg:flex-row container">
        <div className="sdg-left lg:me-14">
        <div className="about bg-blue-50 w-max px-4 py-2 my-4 font-body rounded-3xl text-blue-700">About Us</div>
        <h1 className='sdg-logo w-full'>
          Our SDG
        </h1>
        <h1 className='sdg-logo'>
       <span className='text-altru-blue'>Targets</span>
         & <span className='text-altru-blue'>Impact</span>  Story.
        </h1>
      </div>
      <div className="sdg-right ps-5 lg:ms-36 lg:w-1/2 sm:mt-6 sm:w-4/5 relative border-l-4 border-l-altru-yellow">
        <p>
        We believe that technology can be a powerful force for good, and we are using our skills and expertise to develop solutions that can make a real difference in the world.
        </p>
        <Link>
        <div className='relative
         rounded-full bg-altru-yellow h-10 w-10'> 

        </div>
        <div className='text-altru-blue absolute bottom-2 left-8'>
          Learn More About Us 
          <span>
            <FontAwesomeIcon icon={faArrowRight} className='text-altru-blue text-center ps-2' />
          </span>
        </div>
        </Link>
      </div>
      </div>
    <div className="lg:grid container my-10 h-max  lg:grid-rows-1  lg:grid-cols-2 sm:flex sm:flex-col gap-16">
      <div className="lg:ms-0 lg:ps-0 font-body pb-20 sm:mb-6 pt-6 mt-10  text-white rounded-lg bg-altru-blue">
        <img src={SdgBlue} alt=""  className='bg-blue-50 w-4/5 mx-auto sm:mt-8 rounded-lg'/>

        <span className='flex gap-2 px-8 py-6'>
          <img src={SdgIcon} alt="" className='rounded-xl'/>
          <p>
            SDG 4
          </p>
        </span>
    <p className='sdg-blue-header px-8 pb-4'>
      Quality Education
    </p>
    <div className="sdg-body text-sm font-body px-8 pb-4">
    <p className='pb-4'>
    We are advancing this SDG through a solution-oriented initiative that enhances digital literacy and promotes STEM education in Sierra Leone. 
    </p>
    <p className='pb-4'>
    Since 2022, we have reached 180 young people and have provided them valuable and practical STEM skills. Furthermore, 60 percent of our students have represented Sierra Leone at the World Robotics Competition in Switzerland 2022 and Singapore 2023, respectively.
    </p>
    <p className='pb-4'>
    This solution cuts across SDG 5 and 10.
    </p>
    </div>
      </div>
      <div className="flex flex-col gap-10 h-full">
        <div className="bg-altru-yellow mt-10 p-6 font-body rounded-lg">
        <span className='flex'>
          <img src={SdgIcon} alt="" className='rounded-xl'/>
          <p className='font-body'>
            SDG 13
          </p>
        </span>
    <p className='font-logo text-2xl my-4 text-altru-blue'>
Climate Change    </p>
    <div className="sdg-body gap-4 flex flex-col font-body text-sm">
    <p>
    This solution combines hardware, software, and data analytics to promote environmental compliance. The core product is an Arduino robotic car with a user-friendly data collection, analysis, and compliance monitoring interface. This robot comprises data collection sensors, such as noise pollution monitors, MQ135 sensors, NDIR CO2 sensors, and waste management trackers, deployed within organizations to collect real-time environmental data. The project uses color profiles to beaming light technology to display compliance levels visually.
    </p>
    <p >
    This solution addresses the issue of non-compliance with safety policies by providing organizations with the tools to monitor their environmental impact in real-time. The data collected from the robots and sensors is analyzed within our cloud system, calculating the organization's compliance level based on predefined thresholds for noise pollution, solid waste generation, air quality, and GHG emissions. The compliance level is then translated into color profiles using outdoor beaming lights. Red indicates non-compliance, blue represents average compliance, and green signifies full compliance.    </p>
   
    </div>
        </div>
        <div className="black bg-black font-body h-full rounded-lg p-8 container sm:w-full">
        <span className='flex gap-2'>
          <img src={SdgIcon} alt="" className='rounded-xl text-white'/>
          <p className='text-white'>
          SDG 3          </p>
        </span>
    <p className='sdg-blue-header mt-6 text-2xl mb-4 font-altru-yellow'>
    Good Health & Wellbeing    </p>
    <div className="sdg-body text-sm text-white">
    <p>
    We are advancing this SDG by Connecting Healthcare Professionals, Hospitals, Patients, and Community Health Workers for Enhanced Healthcare Access in Kenya & Rwanda. We have connected 170 healthcare professionals to 70 job openings in 30 health centers in these countries.    </p>
    <p>
    This solution cuts across SDG 1 & 9.    </p>
   
    </div>
        </div>
      </div>
    </div>
    </div>
 

<div className="projects-main bg-altru-yellow  py-8 mb-20  ">

    <div className="container">
    <div className="about bg-blue-50 w-max px-4 py-2 my-4 rounded-3xl text-blue-700 font-body">Our Projects</div>

  <p className="font-logo mx-0 text-2xl">
  Discover Our  
<span className="text-altru-blue"> Sustainable Initiatives</span>  for Impact
  </p>
  </div>
  <div className="projects lg:grid-cols-2 lg:grid-rows-2 gap-10 container mt-10 p-8">

 
  <div className="hub lg:h-96 lg:w-full rounded-md p-8">
    <div>
      <p className='flex flex-row text-white font-body'>
        <img src={SdgIcon} alt="" /> SDG 4, 5, 9, 17
      </p>
    </div>
    <div className='translate-y-28'> 
      <p className="font-logo text-white pb-2">
        Altruistech & Creativity Hub
      </p>
      <p className='font-body text-white pb-2'>
      Promoting gender equality by enhancing the creative and innovation power of young people, mainly girls.
      </p>
      <Link to="/creativity-hub">
      <button className="button my-4 bg-altru-blue hover:bg-blue-700 text-white py-2 px-4 rounded">
        Learn More
    </button>
    </Link>
    </div>
  </div>
  <div className="health h-full lg:pb-10  p-8 rounded-md ">
    <div>
      <p className='flex flex-row text-white font-body'>
        <img src={SdgIcon} alt="" /> SDG 1, 3, 10, 17
      </p>
    </div>
    <div className='translate-y-20'> 
      <p className="font-logo text-white pb-2">
      Altruis-Health      </p>
      <p className=' font-body text-white pb-2'>
      Bridging the gap between health professionals seeking rewarding opportunities, hospitals aiming to recruit top talent, patients needing online medical consultations, and community health workers eager to make a positive impact.      </p>
     <Link to="/altruis-health">
    
      <button className="button bg-altru-blue hover:bg-blue-700 text-white py-2 px-4 rounded">
        Learn More
    </button>
    </Link>
    </div>
  </div>
  <div className="water h-96 rounded-md p-8">
    <div>
      <p className='flex flex-row font-body text-white'>
        <img src={SdgIcon} alt="" /> SDG 6, 9, 10
      </p>
    </div>
    <div className='translate-y-24'> 
      <p className="font-logo text-white pb-2">
      Altruistech Clean Water Innovation      </p>
      <p className=' font-body text-white pb-2'>
      Promoting access to clean water and sanitation in rural communities in Sierra Leone by leveraging IoT to detect particles in water and validate its level of safety using AI </p>
           <Link to="/clean-water-innovation">
          
            <button className="button my-4 bg-altru-blue hover:bg-blue-700 text-white py-2 px-4 rounded">
        Learn More
    </button>
    </Link>
    </div>
  </div>
  <div className="env h-96 lg:pb-10  p-8 rounded-md lg:p-4">
    <div>
      <p className='flex flex-row text-white gap-2 text-center font-body'>
        <img src={SdgIcon} alt="" /> SDG 8, 12, 13, 15, 17
      </p>
    </div>
    <div className='translate-y-24 '> 
      <p className="font-logo text-white pb-2">
      Altruistech Environmental Compliance Guage     </p>
      <p className=' font-body text-white pb-2'>
      Advocating for a safer environment or more responsible use of resources by utilizing exponential technologies such as sensors, robotics, and data-driven analytics. </p>          
       <Link to="/environmental-compliance-innovation" >
        <button className="button my-4 bg-altru-blue hover:bg-blue-700 text-white py-2 px-4 rounded">
        Learn More
    </button>
    </Link>
    </div>
  </div>

</div>
    </div>
    <div className="bg-white my-10">
   <TeamGrid />
   </div>
    </div>
  )
}

export default Home