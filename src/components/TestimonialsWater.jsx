import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Musa from '../assets/images/testi-1.png'
import Daniel from '../assets/images/health-test-2.png'
import Tony from '../assets/images/health-test-3.png'
import Nengi from '../assets/images/health-test-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'


function TestimonialsWater() {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
const ButtonGroup = ({ next, previous }) => {
    return (
      
      <div className="custom-button-group !absolute">
        <button onClick={previous} className="carousel-button carousel-button-left">
        <FontAwesomeIcon icon={faArrowLeft}   className='text-altru-blue border-altru-blue p-2 border-2 rounded-full'/>
        </button>
        <button onClick={next} className="carousel-button carousel-button-right">
        <FontAwesomeIcon icon={faArrowRight}  className='text-altru-blue border-2 p-2 rounded-full border-altru-blue '/>
        </button>
      </div>
  
    )
  };
return (
    <div className="py-20 container my-24 relative bg-white">
      <div className="flex flex-col justify-between !absolute top-0">
      <p className="font-body bg-altru-pink px-4 py-2 w-max rounded-2xl text-altru-blue">Testimonials</p>
      <p className="font-display text-2xl">
      See What People are Saying <br/> <span className="text-altru-blue">
about the Clean Water Innovation.  </span>    </p>
      </div>
  <Carousel arrows={false} className="mt-16" responsive={responsive} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
    <div className="card h-full bg-altru-pink p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Musa} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
          Musa Bangura       </p>
          <p className="font-body text-gray-900 text-xs">
          Farmer         </p>
        </div>
        </div>
        <p className="font-body text-sm">
        As a farmer, clean water is vital for my crops and my family. 
        <span className="text-altru-blue">Altruistech's solution has made it so much easier to access clean and safe water</span> which benefits our entire village. </p>
      
    </div>
    <div className="card h-full bg-altru-pink mx-6 p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Daniel} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
         Aminata Jalloh         </p>
          <p className="font-body text-xs text-gray-700">
          IoT Technician
          </p>
        </div>
        </div>
        <p className="font-body text-sm">
        Working with Altruistech Clean Water Innovation has been a rewarding experience. <span className="text-altru-blue"> The use of IoT and AI to ensure water safety is cutting-edge, and I'm proud to be a part of it. </span>      </p>
      
    </div>
    <div className="card h-full bg-altru-pink p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Tony} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
          Omar Mansaray
          </p>
          <p className="font-body text-xs text-gray-700 ">
           Local Health Worker
          </p>
        </div>
        </div>
        <p className="font-body text-sm">
<span className="text-altru-blue"> Access to clean water is a key to preventing waterborne diseases. </span> Altruistech Clean Water Innovation has significantly improved the health of our community.        </p>
      
    </div>
    <div className="card bg-altru-pink h-full p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Nengi} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
          Kadiatu Kamara
          </p>
          <p className="font-body text-xs ">
            Community Leader
          </p>
        </div>
        </div>
        <p className="font-body text-sm">
        The Altruistech Clean Water Innovation has transformed our community.<span className="text-altru-blue">
        Clean water was a dream, and now it's a reality.</span> We're grateful for this life-changing solution.        </p>
      
    </div>
    
  </Carousel>
  </div>

)
}

export default TestimonialsWater;