import React from 'react'
import Queen from '../assets/images/partners-1.svg'
import ALU from '../assets/images/partners-2.svg'
import REMA from '../assets/images/partners-3.svg'
import Innovation from '../assets/images/partners-4.svg'
import First from '../assets/images/partners-5.svg'
function Partners() {
  return (
    <div className='bg-white my-14 py-14'>
        <h2 className='font-logo text-center pb-14 partners-header'> <span className='text-altru-blue'>Partners        </span>
        Our 
          and <span className='text-altru-blue'> Sponsors.
            </span>

        </h2>
        <div className="lg:flex lg:flex-row lg:justify-evenly partner-images">
        <img src={Queen} alt="" />
        <img src={ALU} alt="" />
        <img src={REMA} alt="" />
        <img src={Innovation} alt="" />
        <img src={First} alt="" />
        </div>
    </div>
  )
}

export default Partners