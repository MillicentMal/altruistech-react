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
        <DialogBody divider className="grid place-items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-16 w-16 text-blue-500"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          <Typography className="text-altru-blue font-button" variant="h4">
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