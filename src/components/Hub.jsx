import React from 'react'
import Star from '../assets/images/about-star.svg'
import Topbar from './Topbar'
import AD from '../assets/images/abdul-daniel.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import StarB from '../assets/images/Shape.svg'
import GridImg1 from '../assets/images/grid-1.jpeg'
import GridImg2 from '../assets/images/grid-2.jpeg'
import GridImg3 from '../assets/images/grid-3.jpeg'
import GridImg4 from '../assets/images/grid-4.jpeg'
import GridImg5 from '../assets/images/grid-5.jpeg'
import GridImg6 from '../assets/images/grid-6.jpeg'
import GridImg7 from '../assets/images/grid-7.jpeg'
import GridImg8 from '../assets/images/grid-8.jpeg'
import GridImg9 from '../assets/images/grid-9.jpeg'
import GridImg10 from '../assets/images/grid-10.jpeg'
import GridImg11 from '../assets/images/grid-11.jpeg'
import GridImg12 from '../assets/images/grid-12.jpeg'



function Hub() {
  return (
    <div>
      <div className="bg-altru-pink">
        <Topbar/>
      <div className="header flex flex-col mt-0 py-24">
        <div className= "self-center px-6 py-2 rounded-3xl" style={{backgroundColor: `#FFF4E0`}}>
          <p className="text-altru-blue">
          SDG 6, SDG 9, SDG 10
          </p>
        </div>
        <div className="relative h-20 lg:self-center w-1/2 relative-box mb-12">
          <img src={Star} alt="" className='absolute top-4 left-10 '/>
        <p className="font-logo text-3xl text-center absolute top-10 left-16  hub-text-top">
        Altruistech & <span className="text-altru-blue">Creativity</span>  Hub
        </p>
        </div>
        <p className="font-body self-center w-1/2">
        Through strategic partnerships, we aim to promote gender equality by enhancing the creative and innovation power of young people, mainly girls, and deploy them to solve global problems starting at a local level.        </p>
        <button className="button hub-button bg-altru-blue hover:bg-blue-700 text-white py-2 self-center w-2/6 my-16 px-4 rounded">
        Make Enquiry
    </button>
      </div>
      </div >
      <div className="bg-altru-yellow gap-10 mx-auto w-4/5 p-12 lg:flex lg:flex-row my-20">
        <img src={AD} alt="" className='border-8 w-1/2 hub-pic border-altru-pink' />
    <div>
      <p className="font-logo text-2xl w-5/6 pb-6">
      About the <span className='text-altru-blue'> Creativity</span> Hub
      </p>
    
    <p className='font-body text-gray-700 sm:w-4/5 sm:text-justify'>
    This solution uses refurbished electronic waste and STEM materials to enhance youth creativity skills. It promotes STEM education, particularly among Sierra Leone youth, to solve local or community problems in Sierra Leone. This initiative engages young people, mainly girls and women aged 7 to 25, in S.T.E.M. education programs such as workshops, boot camps, and mentorship opportunities tailored around building innovative solutions. We also provide exposure by allowing them to showcase their learnings at a global level.
    </p>
    <div className='relative my-6'>
        <div className='rounded-full bg-white h-10 w-10 '> 
    <div className='text-black absolute bottom-2 left-5'>
Donate Now          <span>
            <FontAwesomeIcon icon={faArrowRight} className='text-black text-center ps-2' />
          </span>
        </div>
        </div>
      </div>
    </div>
      
      </div>
    
    <div className="bg-altru-pink flex flex-col pt-16 my-24">
      <div className="bg-light-blue self-center text-altru-mango px-4 py-2 w-max rounded-3xl">
        Our Gallery
      </div>
      <div className="relative hub-star-box  h-20 lg:self-center lg:w-1/2  mb-12">
          <img src={StarB} alt="" className='absolute hub-star lg:top-4 lg:left-10 sm:left-10'/>
        <p className="font-logo text-3xl sm:text-justify absolute top-10 left-16 hub-star-text">
        See Some of The Things we are Doing
        </p>
        </div>
        <div className="mx-auto flex flex-col my-24">
          <div className="grid lg:grid-cols-3 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3 gap-x-6 gap-y-6 mx-16 self-center h-4/5 overflow-hidden">
          <img src={GridImg1} alt="" className="rounded-md lg:h-full object-cover" />
          <img src={GridImg2} alt="" className="rounded-md lg:h-full object-cover " />
          <img src={GridImg3} alt="" className="rounded-md lg:h-full object-cover" />
          <img src={GridImg4} alt="" className="rounded-md lg:h-full object-cover col-span-2 order-last" />
          <img src={GridImg5} alt="" className="rounded-md lg:h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 my-6 grid-rows-1  gap-x-6 mx-16 self-center">
          <img src={GridImg6} alt="" className="rounded-md lg:h-full object-cover" />
          <img src={GridImg7} alt="" className="rounded-md lg:h-full object-cover" />
          </div>
          <div className="lg:grid last-grid lg:grid-cols-3 lg:grid-rows-2 gap-x-6 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-y-10 gap-y-6 mx-16 self-center h-4/5 overflow-hidden">
          <img src={GridImg8} alt="" className="rounded-md lg:h-full object-cover" />
          <img src={GridImg9} alt="" className="rounded-md lg:h-full object-cover" />
          <img src={GridImg10} alt="" className="rounded-md lg:h-full object-cover" />
          <img src={GridImg11} alt="" className="rounded-md lg:h-full object-cover " />
          <img src={GridImg12} alt="" className="rounded-md lg:h-full object-cover col-span-2 w-full" />
          </div>
        </div>

    </div>
    </div>
  )
}

export default Hub