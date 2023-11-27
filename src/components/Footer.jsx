import React from 'react'
import { Typography } from "@material-tailwind/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebookF, faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom';


const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <div className=''>
        <footer className='bg-black text-white'>
            <div className='footer-div px-6 py-20 sm:flex md:flex lg:justify-around lg:content-start lg:flex lg:flex-row md:flex-col sm:flex-col sm:justify-around md:justify-around sm:gap-5 md:gap-5'>
                <div>
             
                <span
          as="a"
          href="#"
          className="mr-4 cursor-pointer lg:ml-2 font-logo logo-span"
        >
         <p className="footer-logo text-white ">Altruistech</p>  <FontAwesomeIcon icon={faCircle} size="20px" color="blue" className="logo-icon" />
        </span>
        
   <p>
   Empowering a more sustainable world.

   </p>

   <p className='pt-4'>
    Follow us
   </p>
   <div className="flex gap-4 text-blue-gray-900">
            <Link>
            
            <Typography>
            <FontAwesomeIcon icon={faFacebookF} style={{color: "#e9ff61",}} />
            </Typography>
            </Link>
            <Link>
           
            <Typography as="a" href="#" className="opacity-80 text-altru-yellow transition-opacity hover:opacity-100">
            <FontAwesomeIcon icon={faInstagram} style={{color: "#e9ff61",}} />
            </Typography>
            </Link>
           <Link>
           
           <Typography>
              <FontAwesomeIcon icon={faTwitter} style={{color: "#e9ff61",}} />
           </Typography>
           </Link>
           <Link to={"https://www.linkedin.com/in/abdul-karim-sesay-2858b6203"}>
           
            <Typography>
            <FontAwesomeIcon icon={faLinkedin} style={{color: "#e9ff61",}} />
            </Typography>
            </Link>
            
</div>        
                </div>
                <div className='company-div flex flex-col sm:gap-0 md:gap-0 lg:gap-3'>
                    <p className='font-logo text-altru-yellow pb-2' >
                        Company
                    </p>
                    <Link to={'/'}>
                        Home
                    </Link>
                    <Link to={'/about'}>
About Us                    </Link>

<Link to={'/team'}>

Our Team              </Link>
                </div>
    
                <div className='company-div flex flex-col sm:gap-0 md:gap-0 lg:gap-3'>
                    <p className='font-logo text-altru-yellow'>
                        Projects
                    </p>
                    <Link to={"/creativity-hub"}>
                    Altruistech & Creativity Hub
                    </Link>
                    <Link to={"/altruis-health"}>
                    Altruis-Health
                   </Link>

<Link to={"/clean-water-innovation"}>

Altruistech Clean Water Innovation             </Link>

<Link to={"/environmental-compliance-innovation"}>

Altruistech Environmental Compliance Guage             </Link>
                </div>
       <div className="company-div flex flex-col sm:gap-0 md:gap-0 lg:gap-3">
       <p className='font-logo text-altru-yellow'>
                       Featured
                    </p>
        <Link to={"/faqs"}>
            FAQs
        </Link>
        <Link to={"/contact-us"}>
Contact Us        </Link>
       </div>
               
               
            </div>
    
<div className="bottoms py-20 px-6 lg:mx-10 sm:px-0 sm:mx-6 border-t flex lg:flex lg:flex-row lg:justify-center lg:gap-5">
<Typography
            variant="small"
            className="mb-4 lg:text-center font-normal text-footer-text md:mb-0"
          >
            &copy; {currentYear} <a href="https://altru-is.tech/">Altruistech</a>. All
            Rights Reserved.
          </Typography>

          <Link>
            <Typography
                variant="small"
                className="mb-4 lg:text-center font-normal text-footer-text md:mb-0">
                Privacy Policy
                </Typography>
          </Link>
          <Link>
          <Typography variant='small' className='mb-4 lg:text-center font-normal text-footer-text md:mb-0'>
            Terms of Use
          </Typography>
          </Link>

</div>
        </footer>
    </div>
  )
}

export default Footer