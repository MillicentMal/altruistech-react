import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import '../index.css'
import Musa from '../assets/images/testi-1.png'
function Testimonial() {
  return (
  
       
        
 
          <Card color="transparent" shadow={false} className="w-full max-w-[26rem] px-6 py-8 bg-altru-pink">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar
                size="lg"
                variant="circular"
src={Musa}                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray" className='font-logo'>
                  Musa Bangura                  </Typography>
                </div>
                <Typography color="blue-gray">Farmer</Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0 font-body">
              <Typography>
              As a farmer, clean water is vital for my crops and my family. <span className='text-altru-blue'>
               Altruistech's solution has made it so much easier to access clean and safe water </span>, which benefits our entire village.
              </Typography>
            </CardBody>
          </Card>
        );
      }


export default Testimonial