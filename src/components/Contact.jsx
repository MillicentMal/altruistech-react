import React from 'react'
import Topbar from './Topbar'
import Star from '../assets/images/Shape.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

function Contact() {
    const [phone, setPhone] = useState('');

  return (
<div>
    <div className='contact-div bg-light-blue'>
        <Topbar className="mb-0" background='light-blue'/>
        <div className='text-center mt-0 pb-40'>
            <div className="relative mt-10 mb-2 h-20 mx-auto w-96">
        <img src={Star} alt="Star"  className='absolute top-0 left-0 w-20 h-16'/>
        <p className="font-logo text-2xl absolute top-6 left-12">
        Get in <span className="text-altru-blue">Touch</span>  with Us 
        </p>
        </div>
        <p className='w-1/2 mx-auto font-body'>
        We're here to assist you! Whether you have questions, feedback, or simply want to connect, our team is ready to engage in meaningful conversations with you
        </p>
        </div>
        </div>
        <div className="contact lg:m-24 bg-white lg:flex lg:flex-row lg:justify-between sm:flex-col sm:flex">
            <div className="social-media">
            <div className='mb-10'>
                <p className="font-display">
                    Call Us
                </p>
                <p className='font-body'>
                Call our Team <strong>Mon-Fri</strong>  from <strong>8am-5pm (CAT)</strong> 
                </p>

                <p>
                <FontAwesomeIcon icon={faPhone} /> +234 901 512 5930
                </p>
            </div>
            <div className="social ">
                <p className="font-display">
                    
                Chat with Us
                </p>
                <p className="font-body mb-5">
                Speak with our friendly team
                </p>
                <div className="flex flex-col">
                <Link className='pb-2 font-body'>
                <FontAwesomeIcon icon={faFacebookF} className='pe-2 font-body'  /> Message on Facebook
                </Link>
                <Link className='pb-2 font-body'>
                <FontAwesomeIcon icon={faTwitter} className='pe-2 font-body' /> Message on Twitter
                </Link>
                <Link className='pb-2 font-body'>
                <FontAwesomeIcon icon={faInstagram} className='pe-2 font-body' /> Follow Us on Instagram
                </Link>
                <Link className='pb-2 font-body'>
                <FontAwesomeIcon icon={faEnvelope} className='pe-2 '/> Shoot us an Email
                </Link>
                <Link className='pb-2 font-body'>
                <FontAwesomeIcon icon={faLinkedin} className='pe-2 font-body' /> Connect on Linkedin
                </Link>
                </div>
            </div>
            </div>
<div className="contact-form">
<form action="" className='flex flex-col gap-6'>
    <div className="names lg:flex lg:flex-row sm:flex gap-14 sm:flex-col">
        <fieldset className='flex flex-col'>
            <label htmlFor="first_name" className=''>First Name <span className="text-red-800 font-bold">*</span> </label>
            <input className='rounded-lg px-4 py-2' type="text" name="name" id="first_name" placeholder='Enter your First Name' />
        </fieldset>
        <fieldset className='flex flex-col'>
            <label htmlFor="last_name" className=''>Last Name <span className="text-red-800 font-bold">*</span> </label>
            <input className='rounded-lg px-4 py-2' type="text" name="name" id="last_name" placeholder='Enter your Last Name' />
        </fieldset>
    </div>
    <fieldset className='flex flex-col'>
            <label htmlFor="email" className=''>Email<span className="text-red-800 font-bold">*</span> </label>
            <input className='rounded-lg px-4 py-2 w-full' type="text" name="email" id="email" placeholder='Enter your Email' />
        </fieldset>
        <fieldset className='flex flex-col'>
            <label htmlFor="phone" className=''>Phone<span className="text-red-800 font-bold">*</span> </label>
            <input className='rounded-lg px-4 py-2 w-full' type="text" name="phone" id="phone" placeholder='Enter your Phone Number' />
            </fieldset>
            <fieldset>
                <label htmlFor="message" className=''>Message <span className="text-red-800 font-bold">*</span> </label>
                <textarea className='rounded-lg px-4 py-2 w-full' name="message" id="message" cols="30" rows="10" placeholder='Enter your Message'></textarea>
            </fieldset>

            <button className="button bg-altru-blue w-full hover:bg-blue-700 text-white py-2 px-4 rounded">
        Send Message
    </button>
</form>

</div>
        </div>
    </div>
    
  )
}

export default Contact