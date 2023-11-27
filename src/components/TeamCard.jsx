import React from 'react'
import Abdul from '../assets/images/abdul.png'
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from "@material-tailwind/react";

function TeamCard() {
  return (
    <div>
      <div className="card">
 
 

      <Popover placement='left-end'>
      <PopoverHandler>
        <div className='relative'>
        <img src={Abdul} alt="" className='relative ' />
        <Button className='absolute bottom-10 left-10 bg-altru-pink text-black shadow-none'>
          <p className="font-logo capitalize">Abdul Kareem Sesay</p>
          <p className='font-body'>
            Co-Founder
          </p>
        </Button>
        </div>
      </PopoverHandler>

      <PopoverContent className="z-[999] grid w-4/5 h-1/3 overflow-hidden p-0">
      <div className="min-h-full !w-full p-3">
          <img
src={Abdul}            alt="Abdul"
            className="h-full w-1/3 rounded-lg"
          />
        </div>
        <div className="p-4 w-2/3">
          <Typography color="blue-gray" className="mb-2 text-lg font-bold">
            Material Tailwind
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="mb-14 font-normal text-blue-gray-500"
          >
           Abdul Karim Sesay is a creative technologist, an aspiring researcher, and a practicing data analyst with over a decade of experience in technology innovation. He has completed half a dozen projects, mostly climate tech and awareness related in his home country, and the success of these projects inspired a movement that supported the founding of the Altruistech Group of Innovations.
          </Typography>
          <a href="#" className="-ml-3 inline-block">
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-x-2 capitalize"
            >
              Read More
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.91669L5.33333 6.00002L1.25 10.0834"
                  stroke="#212121"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </a>
        </div>
 
      
      </PopoverContent>
    </Popover>

      </div>
    </div>
  )

}


export default TeamCard