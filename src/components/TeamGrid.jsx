import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Abdul} from '../assets/images/abdul.svg'
import Abdulai from '../assets/images/abdulai.svg'
import Gabriel from '../assets/images/gabriel.svg'
import Axel from '../assets/images/axel.svg'
import {Daniel} from '../assets/images/daniel.svg'
import TeamCard from './TeamCard';

function TeamGrid() {
  return (
    <div className='team-grid lg:grid-cols-5 lg:grid-rows-2  bg-altru-yellow'>
        <div className="intro-text col-span-2">
        <div className="about bg-blue-50 w-max px-4 py-2 my-4 rounded-3xl text-blue-700 mx-40">Our Projects</div>
    <p className="font-logo">
    Our <span className='text-altru-blue'>Founding
        </span>   Innovators.
    </p>
    <p>
    We believe that technology can be a powerful force for good, and we are using our skills and expertise to develop solutions that can make a real difference in the world.
    </p>
        </div>
 
 <TeamCard/>

    </div>
  )
}

export default TeamGrid