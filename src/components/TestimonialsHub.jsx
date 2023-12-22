import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Musa from '../assets/images/testi-1.png'
import Daniel from '../assets/images/health-test-2.png'
import Tony from '../assets/images/health-test-3.png'
import Nengi from '../assets/images/health-test-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'


function TestimonialsHub() {
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
about the Creativity Hub  </span>    </p>
      </div>
  <Carousel arrows={false} className="mt-16" responsive={responsive} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
    <div className="card h-full bg-altru-pink p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Musa} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
          Fatima Kamara </p>
          <p className="font-body text-gray-900 text-xs">
          Student        </p>
        </div>
        </div>
        <p className="font-body text-sm">
        Altruistech & Creativity Hub has been an amazing journey for me. 
        <span className="text-altru-blue">I've learned so much about STEM and creativity.</span>It's not just a place to study; it's a place to dream and create.</p>
      
    </div>
    <div className="card h-full bg-altru-pink mx-6 p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Daniel} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
          Ibrahim Bangura       </p>
          <p className="font-body text-xs text-gray-700">
          Parent
          </p>
        </div>
        </div>
        <p className="font-body text-sm">
        As a parent, I couldn't be happier with what my daughter, Mariam, is gaining from this initiative. <span className="text-altru-blue"> It's wonderful to see her so enthusiastic about STEM </span>   and it's all thanks to Altruistech & Creativity Hub.    </p>
      
    </div>
    <div className="card h-full bg-altru-pink p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Tony} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
          Rashid Conteh
          </p>
          <p className="font-body text-xs text-gray-700 ">
          Local Entrepreneur
          </p>
        </div>
        </div>
        <p className="font-body text-sm">The solutions and innovations coming out of this program are remarkable.
<span className="text-altru-blue"> I'm always on the lookout for talent, and Altruistech & Creativity Hub consistently delivers.</span> 
 It's a win-win for the community       </p>
      
    </div>
    <div className="card bg-altru-pink h-full p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Nengi} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
          Aminata Mansaray
          </p>
          <p className="font-body text-xs ">
          Stem Educator
          </p>
        </div>
        </div>
        <p className="font-body text-sm">
        <span className="text-altru-blue">I've seen remarkable growth in the students at Altruistech & Creativity Hub</span>. The initiative is instrumental in shaping the next generation of innovators and problem solvers in Sierra Leone.
     </p>
      
    </div>
    
  </Carousel>
  </div>

)
}

export default TestimonialsHub;