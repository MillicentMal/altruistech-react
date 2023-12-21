import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Musa from '../assets/images/testi-1.png'
import Daniel from '../assets/images/health-test-2.png'
import Tony from '../assets/images/health-test-3.png'
import Nengi from '../assets/images/health-test-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'


function TestimonialsHealth() {
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
    <div className="py-20 container my-20 relative bg-white">
      <div className="flex flex-col justify-between !absolute top-0">
      <p className="font-body bg-altru-pink px-4 py-2 w-max rounded-2xl text-altru-blue">Testimonials</p>
      <p className="font-display text-2xl">
        See what people are saying about Altruis-Health
      </p>
      </div>
  <Carousel arrows={false} className="mt-8" responsive={responsive} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
    <div className="card h-full bg-light-blue p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Musa} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
          Ivy Getanda          </p>
          <p className="font-body text-gray-900 text-xs">
          Respiratory Therapist          </p>
        </div>
        </div>
        <p className="font-body text-sm">
        Highly recommendable solution for health professionals looking for rewarding opportunities.
        <span className="text-altru-blue">The solution provides a wide range of job openings tailored to your expertise and career goals.</span>  It's a valuable resource for anyone seeking to advance their career in the healthcare industry.        </p>
      
    </div>
    <div className="card h-full bg-light-blue mx-6 p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Daniel} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
          Daniel James          </p>
          <p className="font-body text-xs text-gray-700">
          Chief Medical Officer
          </p>
        </div>
        </div>
        <p className="font-body text-sm">
        I highly recommend utilizing this app for recruiting top talent. The platform offers a vast pool of highly qualified health professionals, making the hiring process efficient and effective. <span className="text-altru-blue"> The detailed profiles and real-time availability information helps you identify the best-fit candidates for your organization. </span>      </p>
      
    </div>
    <div className="card h-full bg-light-blue p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Tony} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
            Tony Bryan
          </p>
          <p className="font-body text-xs text-gray-700 ">
            Community Health Worker
          </p>
        </div>
        </div>
        <p className="font-body text-sm">
        Through the Altruistech app, I've <span className="text-altru-blue"> connected with other dedicated professionals, collaborated on community health initiatives, and expanded my knowledge base. </span> It's a supportive platform that empowers you to make a lasting difference in the lives of those you serve. Join the community and embark on a fulfilling journey in community health.        </p>
      
    </div>
    <div className="card bg-light-blue h-full p-6 rounded-lg flex flex-col gap-4">
      <div className="card-img flex flex-row gap-4">
        <img src={Nengi} alt="" className='w-24 h-24 rounded-full' />
        <div className="card-img-text self-center">
          <p className="font-display">
            Nengi Phillips
          </p>
          <p className="font-body text-xs ">
            Trader
          </p>
        </div>
        </div>
        <p className="font-body text-sm">
        Altruistech is a game-changer in terms of convenience and access to quality healthcare. <span className="text-altru-blue">The app connects you with skilled and compassionate health professionals who provide expert advice and care.</span>I've received prompt and thorough consultations from the comfort of my home.        </p>
      
    </div>
    
  </Carousel>
  </div>

)
}

export default TestimonialsHealth;