import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function YelloButton({link}) {
  return (
    <div className='relative bg-altru-yellow rounded-full w-10 h-10 text-nowrap'>
        <Link to={link} className='absolute w-max top-2 left-2 text-nowrap'>
        Link to Linkedin Profile <FontAwesomeIcon icon={faArrowRight} className='text-black text-center ps-1' />
        </Link>
        

    </div>
  )
}

export default YelloButton