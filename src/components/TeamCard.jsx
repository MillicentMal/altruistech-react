import React from 'react'
import { Typography } from "@material-tailwind/react";
import Abdul from '../assets/images/abdul.png'
import { Fragment, useState } from 'react'

import { Link } from 'react-router-dom'
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

function TeamCard ({ image, founderName, founderDescription, link, title }) {
  

  return (
  <div>
 <Popover>

<div className="team-card relative mt-10">
  <img src={image} alt="" className="rounded-lg w-full" />
  <PopoverHandler>
  <button className="bg-altru-pink absolute bottom-10 w-4/5 text-center px-6 py-2 left-1/2 transform flex flex-col -translate-x-1/2 rounded-lg">
    <p className='font-display text-sm'>
    {founderName}
      </p>
      <p className='font-body text-xs'>
      {title}
      </p>
   
  </button>
  </PopoverHandler>
</div>
    <>
     
        <PopoverContent className="w-4/5 popover text-black" id='popover'>
        
            <div className="lg:flex pop-content relative mx-0 lg:flex-row text-xs">
              <img src={image} alt='Founder' className="rounded-lg lg:w-1/3 sm:w-full lg:ms-0 lg:me-6 pop-image lg:object-cover" />
              <div className="flex flex-col">
                <p className='my-10'>
                  {founderDescription}

                  </p>
                  <div className='relative
         rounded-full bg-altru-yellow h-10 w-10'> 

        </div>
        <div className='absolute sm:bottom-4 lg:top-44 lg:right-72 sm:right-20'>
          <Link to={link}>
Link to Linkedin Profile          <span>
            <FontAwesomeIcon icon={faArrowRight} className='text-center ps-2' />
          </span>
          </Link>
        </div>
              </div>
            </div>
       

       
        </PopoverContent>
    
    </>
    </Popover>
    </div>
    
  )
}

export default TeamCard;