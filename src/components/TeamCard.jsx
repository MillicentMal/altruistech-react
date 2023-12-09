import React from 'react'
import { Typography } from "@material-tailwind/react";
import Abdul from '../assets/images/abdul.png'
import { Fragment, useState } from 'react'

import { Link } from 'react-router-dom'
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

function TeamCard ({ image, founderName, founderDescription, link, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
  <div>

<div className="team-card relative mt-10">
  <img src={image} alt="" className="rounded-lg w-full" />
  <button className="bg-altru-pink absolute bottom-10 w-4/5 text-center px-6 py-2 left-1/2 transform flex flex-col -translate-x-1/2 rounded-lg" onClick={onOpen}>
    <p className='font-display text-sm'>
    {founderName}
      </p>
      <p className='font-body text-xs'>
      {title}
      </p>
   
  </button>
</div>
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-row w-full text-xs">
              <img src={image} alt='Founder' className="rounded-lg w-1/3 ms-0 me-6 object-cover" />
              <div className="flex flex-col">
                <p className='my-10'>
                  {founderDescription}

                  </p>
                  <div className='relative
         rounded-full bg-altru-yellow h-10 w-10'> 

        </div>
        <div className='text-altru-blue absolute bottom-4 right-28'>
          <Link to={link}>
Link to Linkedin Profile          <span>
            <FontAwesomeIcon icon={faArrowRight} className='text-altru-blue text-center ps-2' />
          </span>
          </Link>
        </div>
              </div>
            </div>
          </ModalBody>

       
        </ModalContent>
      </Modal>
    </>
    </div>
  )
}

export default TeamCard;