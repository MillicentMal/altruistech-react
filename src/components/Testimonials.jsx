import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Musa from '../assets/images/testi-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'


function Testimonials() {
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
    <div className="py-20 container relative">
  <Carousel arrows={false} className="" responsive={responsive} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
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
    <div className="card bg-altru-pink mx-6 p-6 rounded-lg flex flex-col gap-4">
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
  </Carousel>
  </div>

)
}

export default Testimonials;