import React from "react";
import {
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
 
import { useState } from "react";
import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";

function WaitlistModal({size, position, styleclass}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
 
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // Create form data object
    const formData = {
      fullName,
      email
    };

    // Save form data to Firebase
    try {
      const docRef = await addDoc(collection(db, "waitlistSubmissions"), formData);
      console.log("Document written with ID: ", docRef.id);
      // Reset form fields
      setFullName("");
      setEmail("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
 
  return (
    <>
 <button onClick={handleOpen} className={`bg-altru-blue px-6 w-${size} ${styleclass} place-self-${position} text-white font-button rounded-lg py-4 my-6`}>
          Join Waitlist
        </button>      
        <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography color="blue-gray" className="font-display">
            Join our Waitlist and be the first to know when we release the Product.            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              
            </Typography>
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Typography className="-mb-2 font-display text-sm">
              Full Name <span className="text-red-700 font-display">*</span>
            </Typography>
            <input value={fullName} 
        onChange={(e) => setFullName(e.target.value)}  className="px-2 font-body rounded-md" label="Full Name" size="lg" />
            <Typography className="-mb-2 font-display text-sm">
              Email <span className="text-red-700 font-display">*</span>
            </Typography>
            <input  value={email}  
        onChange={(e) => setEmail(e.target.value)} className="px-2 font-body rounded-md"  label="Email" size="lg" />
            <button type="submit" className="bg-altru-blue place-self-center submit-button w-full text-white font-button mx-auto button-star rounded-lg py-4 my-6 ">
          Join Waitlist
        </button>
        
        </form> 
          </CardBody>
          <CardFooter className="pt-0">
          
       
          
          </CardFooter>
          
        </Card>
        

      </Dialog>
    </>
  );
}

export default WaitlistModal;