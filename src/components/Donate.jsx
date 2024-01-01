import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
 
function Donate() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
       <button onClick={handleOpen} className="button bg-altru-blue lg:w-max sm:w-2/3  hover:bg-blue-700 text-white py-2 px-4 rounded">
        Donate Now
    </button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray" className="font-display">
            Thank you for your support!
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid gap-4">
         
          <Typography className="text-black text-left font-button" variant="h4">
            Coming Soon!
          </Typography>
          <Typography className="text-left font-normal font-body">
           We are currently working on our donation portal to ensure that your donations are secure. Please check back soon!
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" className="bg-gray-100 text-black font-button" onClick={handleOpen}>
            close
          </Button>
          <Button className="bg-altru-blue font-button text-white " onClick={handleOpen}>
            Ok, Got it
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Donate;