import React from 'react'
import Topbar from './Topbar'
import Star from '../assets/images/about-star.svg'
import Top from '../assets/images/about-us.png'
import Abdul from '../assets/images/about-abdul.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import SdgIcon from '../assets/images/sdg-icon.svg'
import Partners from './Partners'
import Sixteen from '../assets/images/16.svg'
import Donate from './Donate'

function About() {
  return (
    <div className='about-home overflow-x-hidden'>
        <Topbar background={"altru-pink"}/>
        <div className="main-header container my-20 sm:flex sm:flex-col sm:gap-6 lg:flex lg:flex-row lg:gap-10 lg:justify-evenly  lg:content-center">
        <div className='relative lg:w-1/2 sm:w-full h-28'>
            <img src={Star} alt="" className='left-0 bottom-0 w-14' />
            <p className='font-logo text-3xl absolute top-8 left-6'>
           <span>We started </span> <br/>
this a <span className='text-altru-blue'>while ago
    </span>  and...
            </p>
        </div>
        <div className="header-body lg:w-1/2 sm:ms-6
         border-l-altru-yellow border-l-4 ps-6">
            <p className='font-body'>
            We are on a mission to create a more sustainable and equitable world by providing innovative solutions that address the United Nations Sustainable Development Goals (SDGs), one project at a time. We are committed to driving positive change, leaving a lasting impact on communities, and promoting a better future  for all.
            </p>
        </div>
        

        </div>
    <div className='relative h-max mb-80'>
        <div className="second-div absolute z-0">
            <img src={Top} alt="" />
            <div className="top-div z-10 absolute sm:w-4/5  top-3/4 sm:inset-x-10 p-6 lg:inset-x-10 lg:flex lg:flex-row sm:flex sm:flex-col bg-altru-yellow mx-auto lg:w-4/5 lg:p-20 rounded-lg">
                <div>
                    <img src={Abdul} alt="" className='border-8 lg:w-2/3 sm:w-4/5 border-white border-solid rounded-lg' />

                </div>
                <div className='lg:w-1/2 flex flex-col gap-6'>
                    <div className="relative h-10">
                        <img src={Sixteen} alt="" className='absolute top-0 z-10 left-0 w-10' />
                        <p className="font-logo absolute top-2 left-4 text-lg z-20">
                            Our <span className='text-altru-blue'> Vision .</span>
                        </p>
                    </div>
            
             <p className='font-body'>
             A world where everyone has access to necessities, enjoys equal opportunities, and lives in harmony with the planet. We envision a future where the 17 SDGs are not just ambitious goals but a global reality and where our projects inspire and empower others to take action for a better world.
             </p>
          <Donate />
                </div>
            </div>
        </div>
    </div>
    <div className="h-96 w-screen my-80 bg-white z-0">

    </div>

    <div className="values bg-black">
        <div className='header-values lg:flex lg:flex-row gap-10 justify-evenly pt-6 '> 
            <div className='left-header ms-8'>
                <div className="value-top text-altru-blue font-body text-base bg-altru-pink w-max py-2 px-4 rounded-3xl">
                    Our Values
                </div>
                <p className="font-logo text-3xl text-white lg:w-2/3">
                Here are our six ways 
of <span className='text-altru-yellow'>
     making a difference </span>
                </p>
            </div>
            <div className='right-header border-l-altru-yellow border-l-4 ps-6 mt-6 lg:w-max text-white lg:grid lg:grid-cols-2 lg:grid-rows-3 gap-2 sm:grid sm:grid-cols-1 sm:grid-rows-6'>
                <span className=''>
                <FontAwesomeIcon className='pe-2' icon={faCheck} style={{color: "#ffffff",}} />  Innovation.
                    </span>
                    <span>
                    <FontAwesomeIcon className='pe-2' icon={faCheck} style={{color: "#ffffff",}} />  Accountability.</span>
                    
                    <span>
                    <FontAwesomeIcon className='pe-2' icon={faCheck} style={{color: "#ffffff",}} /> Sustainability.
                        </span>
                        <span>
                        <FontAwesomeIcon className='pe-2' icon={faCheck} style={{color: "#ffffff",}} /> Equity and Inclusion.</span>
                        <span>
                        <FontAwesomeIcon className='pe-2' icon={faCheck} style={{color: "#ffffff",}} /> Collaboration.</span>
                        <span>
                        <FontAwesomeIcon className='pe-2' icon={faCheck} style={{color: "#ffffff",}} />  Respect for Cultures and Environments.
                        </span>
            </div>
        </div>
        <div className="values-body lg:grid lg:grid-cols-3 lg:grid-rows-2 pb-24 gap-8 mx-auto mt-20 px-10 text-white">
            <div>
                <img src={SdgIcon} alt="" className='pb-6 h-20 w-20'/>
                <p className="font-logo pb-4">
               <span className='text-altru-mango'> Measurable
                </span>  Impact
                </p>
                <p className="font-body">
                We are results-driven. We carefully plan and execute each project with clear objectives and measurable outcomes. We continuously monitor and evaluate our impact to ensure our efforts make a real difference in our communities.                </p>
            </div>
            <div>
                <img src={SdgIcon} alt="" className='pb-6 h-20 w-20'/>
                <p className="font-logo pb-4">
               <span className='text-altru-mango'> Goal-Oriented
                </span>  Initiatives
                </p>
                <p className="font-body">
                We focus on the 17 SDGs outlined by the United Nations. Each of our projects is designed to contribute to one or more of these goals directly.</p>
                            </div>
            <div>
                <img src={SdgIcon} alt="" className='pb-6 h-20 w-20'/>
                <p className="font-logo pb-4">
               <span className='text-red-700'> Sustainable
                </span>  Projects
                </p>
                <p className="font-body">
                We aim to make a difference today and create lasting change. We design our projects sustainably, ensuring the positive impacts continue long after implementation.
                </p>            </div>
                <div>
                <img src={SdgIcon} alt="" className='pb-6 h-20 w-20'/>
                <p className="font-logo pb-4">
               <span className='text-altru-mango'> Innovative
                </span>  Solutions
                </p>
                <p className="font-body">
                We believe in the power of innovation to transform societies and protect our planet. Our dedicated experts and innovators collaborate to develop cutting-edge solutions that address complex global issues. From technology-driven solutions to community-based interventions, we explore various approaches to achieve our goals.
                </p>            </div>
                <div>
                <img src={SdgIcon} alt="" className='pb-6 h-20 w-20'/>
                <p className="font-logo pb-4">
               <span className='text-altru-blue'> Collaboration
                </span>  and Partnerships
                </p>
                <p className="font-body">
                Achieving the SDGs requires a collective effort. We seek partnerships with like-minded organizations, governments, businesses, and individuals who share our commitment to sustainability and social progress. These collaborations enable us to leverage resources and expertise for maximum impact.
                </p>            </div>
                <div className='lg:me-6'>
                <img src={SdgIcon} alt="" className='pb-6 h-20 w-20'/>
                <p className="font-logo pb-4 text-altru-yellow tracking-wide">
               <span className='text-altru-mango'>Transparency
                </span>  <span className='text-white'>and</span>  Accountability
                </p>
                <p className="font-body">
                We are committed to transparency in all our operations. We communicate openly with our stakeholders, donors, and supporters, providing regular updates on our projects and financial accountability. Our commitment to transparency ensures that you can trust your support is making a meaningful impact                </p>            </div>
        </div>

<Partners/>
    </div>
    </div>
  )
}

export default About