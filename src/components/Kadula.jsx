import React from 'react'
import Topbar from './Topbar'
import Header from '../assets/images/kadula.png'
import SdgIcon from '../assets/images/sdg-icon.svg'

function Kadula() {
  return (
    <div>
      <div className="bg-light-blue">
        <Topbar/>
        <div className="lg:flex lg:flex-row mx-auto sm:mt-20 pb-20 justify-evenly content-center">
        <div className='hero-div lg:flex lg:flex-row gap-16 lg:ms-16 lg:me-16 lg:py-20'>

            <div className='self-center'>
              <div className="bg-altru-pink w-max px-4 py-2 my-4 rounded-2xl">
                <p className="text-altru-blue">
                S.D.G. 1, 2, 9, 10, 12, 13, 17               </p>
              </div>
                <div className="relative h-24">
               
                <p className='font-logo text-3xl'>
                Tackling Post-Harvest Losses with <span className="text-altru-blue"> Kadula Farms</span> 
                </p>
                </div>
  <p className='pb-4'>
  Kadula farms provide real-time supply chain traceability solutions that empower stakeholders to make informed decisions, minimize waste, and ensure food safety.  </p>
 
  <button className="button bg-altru-blue hover:bg-blue-700 w-2/3 mt-6 text-white py-2 px-4 rounded">
        Make Enquiry
    </button>
            </div>
            <img src={Header} alt="" className='lg:w-1/2 rounded-md border-8 border-altru-pink' />

        </div>
    </div>
      </div>
      <div className="bg-altru-pink flex flex-col pt-10">
      <div className="bg-red-100 text-red-400 rounded-3xl w-max px-4 py-2 self-center">
      About the Project
      </div>
      <p className="font-logo text-3xl self-center mt-6">
        Why <span className='text-altru-blue'>
          Kadula Farms.
        </span>
      </p>
        <div className="lg:flex lg:flex-row self-center sm:flex sm:flex-col sm:gap-10 my-16 mx-16">
     
     
      <div className='lg:me-6 bg-white p-6 rounded-lg'>
                <img src={SdgIcon} alt="" className='pb-6 h-20 w-20'/>
               
                <p className="font-body">
                We believe in the power of innovation to transform societies and protect our planet. Our dedicated experts and innovators collaborate to develop cutting-edge solutions that address complex global issues. From technology-driven solutions to community-based interventions, we explore various approaches to achieve our goals.
                </p>            </div>
                <div className='lg:me-6 bg-black text-white p-6 rounded-lg'>
                <img src={SdgIcon} alt="" className='pb-6 h-20 w-20'/>
               
                <p className="font-body">
                We believe in the power of innovation to transform societies and protect our planet. Our dedicated experts and innovators collaborate to develop cutting-edge solutions that address complex global issues. From technology-driven solutions to community-based interventions, we explore various approaches to achieve our goals.
                </p>            </div>
                <div className='lg:me-6 bg-white p-6 rounded-lg'>
                <img src={SdgIcon} alt="" className='pb-6 h-20 w-20'/>
                
                <p className="font-body">
                We believe in the power of innovation to transform societies and protect our planet. Our dedicated experts and innovators collaborate to develop cutting-edge solutions that address complex global issues. From technology-driven solutions to community-based interventions, we explore various approaches to achieve our goals.
                </p>            </div>
      </div>
      </div>
    </div>
  )
}

export default Kadula