import React from 'react'
import {
    Popover,
    PopoverHandler,
    PopoverContent,
  } from "@material-tailwind/react";


function Waitlist() {

    
  return (
    <div>
          <Popover placement="bottom">
      <PopoverHandler>
      <button className="bg-altru-blue container place-self-center text-white font-button mx-auto button-star rounded-lg py-4 my-6 ">
          Join Waitlist
        </button>
      </PopoverHandler>
      <PopoverContent className="w-96 text-black" >
      <p className="font-display">
            Join the Altruis-health WaitList
        </p>
        <p className="font-body">
            We'll let you know when we launch!
        </p>
       <form action="" className='flex flex-col gap-4 my-4'>
       <label htmlFor="name" className="font-display">Name<span className='text-red-900'>*</span> </label>
        <input type="text" id='name' className="border-none h-8 my-4" placeholder='Enter your full name' />
        <label htmlFor="email" className="font-display">Email<span className='text-red-900'>*</span> </label>
        <input type="text" className="border-none h-8 my-4" placeholder='Enter your email' />

        <select name="role" id="role" value="Select your role" className='py-4 hover:border-0'>
            <option value="select">Select your role</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="chw">Community Health Worker</option>
            <option value="hospitals">Hospitals</option>
        </select>
        <button className="bg-altru-blue container place-self-center text-white font-button mx-auto rounded-lg py-4 my-6 ">
         Submit
        </button>
       </form>
      </PopoverContent>
    </Popover>
    </div>
  )
}

export default Waitlist