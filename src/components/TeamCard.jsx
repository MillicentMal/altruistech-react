import React from 'react'
import { Fragment } from 'react'


import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import YelloButton
 from './YelloButton'
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
              <img src={image} alt='Founder' className="rounded-lg lg:w-1/3 h-full sm:w-full lg:ms-0 lg:me-6 pop-image lg:object-cover" />
              <div className="flex flex-col">
                <p className='my-10'>
                  {founderDescription}

                  </p>
           <YelloButton link={link} />
              </div>
            </div>
       

       
        </PopoverContent>
    
    </>
    </Popover>
    </div>
    
  )
}

export default TeamCard;