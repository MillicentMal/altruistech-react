import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Musa from '../assets/images/testi-1.png'
import Daniel from '../assets/images/health-test-2.png'
import Tony from '../assets/images/health-test-3.png'
import Nengi from '../assets/images/health-test-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'


function TestimonialsEnv() {
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
      See What People are Saying  <br/> about the <span className="text-altru-blue">
 Environmental Compliance  </span> Innovation.  </p>
      </div>
  <Carousel arrows={false} className="mt-16" responsive={responsive} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
    <div className="card h-full bg-altru-pink p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Musa} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
          Sulaiman Kallon       </p>
          <p className="font-body text-gray-900 text-xs">
          Compliance Officer       </p>
        </div>
        </div>
        <p className="font-body text-sm">
        Altruistech Environmental Compliance Innovation has been a game-changer in my work.
        <span className="text-altru-blue">The use of sensors and data-driven analytics has made compliance monitoring more efficient</span>  and effective. </p>
      
    </div>
    <div className="card h-full bg-altru-pink mx-6 p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Daniel} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
         Hassan Kamara        </p>
          <p className="font-body text-xs text-gray-700">
         Data Analyst
          </p>
        </div>
        </div>
        <p className="font-body text-sm">
        I'm impressed with the data-driven approach of Altruistech Environmental Compliance Innovation. It's creating<span className="text-altru-blue"> 
        a wealth of information that informs responsible resource management.</span></p>
      
    </div>
    <div className="card h-full bg-altru-pink p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Nengi} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
          Ousman Koroma
          </p>
          <p className="font-body text-xs text-gray-700 ">
          Robotic Technician
          </p>
        </div>
        </div>
        <p className="font-body text-sm">
        Working with robotics in environmental compliance is fascinating. Altruistech's approach is not only effective but also inspiring for future generations. </p>      
    </div>
    <div className="card bg-altru-pink h-full p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Tony} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
          Mamadu Conteh
          </p>
          <p className="font-body text-xs ">
          Technology Enthusiast
          </p>
        </div>
        </div>
        <p className="font-body text-sm">
        As a tech enthusiast,<span className="text-altru-blue">
        I'm excited to see the intersection of technology and environmental advocacy.</span> Altruistech is pioneering a new era in sustainability.       </p>
    </div>
    
  </Carousel>
  </div>

)
}

export default TestimonialsEnv;