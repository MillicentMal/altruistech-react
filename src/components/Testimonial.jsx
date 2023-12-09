import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'


  import '../index.css'
import Musa from '../assets/images/testi-1.png'
function Testimonial() {
  return (
  
       <div className='my-20'>
<div className="container">
  <div className="test-header my-4">
    <div className="rounded-3xl mb-4 bg-altru-pink text-altru-blue w-max px-4 py-2 font-body">
      Testimonials
    </div>
    <div className='lg:flex lg:flex-row lg:justify-between'>
      <p className="font-display">
      See What People are Saying 
about the Clean Water Innovation.
      </p>
      <div className="buttons sm:hidden lg:flex lg:flex-row gap-4 self-end ">
      <div className='arrow-div border-altru-blue rounded-full border-2'>

     
<FontAwesomeIcon icon={faArrowLeft}  className='text-altru-blue'/>
</div>
        <div className='arrow-div border-altru-blue rounded-full border-2'>

     
      <FontAwesomeIcon icon={faArrowRight}  className='text-altru-blue'/>
      </div>
      
      </div>
    </div>
  </div>

  <div className="cards lg:grid lg:grid-cols-3 lg:gap-6">
    <div className="card bg-altru-pink p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Musa} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
            Musa Bangura
          </p>
          <p className="font-body">
            Farmer
          </p>
        </div>
        </div>
        <p className="font-body">
        As a farmer, clean water is vital for my crops and my family. Altruistech's solution has made it so much easier to access clean and safe water, which benefits our entire village.
        </p>
      
    </div>
    <div className="card bg-altru-pink p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Musa} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
            Musa Bangura
          </p>
          <p className="font-body">
            Farmer
          </p>
        </div>
        </div>
        <p className="font-body">
        As a farmer, clean water is vital for my crops and my family. Altruistech's solution has made it so much easier to access clean and safe water, which benefits our entire village.
        </p>
      
    </div>
    <div className="card bg-altru-pink p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Musa} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
            Musa Bangura
          </p>
          <p className="font-body">
            Farmer
          </p>
        </div>
        </div>
        <p className="font-body">
        As a farmer, clean water is vital for my crops and my family. Altruistech's solution has made it so much easier to access clean and safe water, which benefits our entire village.
        </p>
      
    </div>
  </div>
</div>
       </div>
        
 
        
        );
      }


export default Testimonial