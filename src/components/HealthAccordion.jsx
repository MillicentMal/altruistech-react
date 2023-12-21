import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
function HealthAccordion() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="font-display text-lg" onClick={() => handleOpen(1)}>How does the app ensure the privacy and security of patient information?</AccordionHeader>
        <AccordionBody className="font-body">
        Our app follows strict data protection measures and complies with relevant healthcare regulations. We employ encryption techniques, secure servers, and stringent access controls to safeguard patient information.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className="font-display text-lg" onClick={() => handleOpen(2)}>
        Can health professionals and community health workers create profiles to showcase their qualifications?
        </AccordionHeader>
        <AccordionBody className="font-body">
        Absolutely! Our platform enables health professionals and community health workers to create profiles, showcasing their qualifications. This feature fosters trust and transparency, allowing clients to make informed decisions when seeking healthcare services. Join us, and let your expertise shine!
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader className="font-display text-lg" onClick={() => handleOpen(3)}>
        Can patients schedule appointments and receive online medications through the app?        </AccordionHeader>
        <AccordionBody className="font-body">
        Yes, indeed! Patients can conveniently schedule appointments with healthcare professionals. Additionally, our app facilitates online medication delivery, ensuring healthcare is accessible and efficient. Experience seamless healthcare at your fingertips!
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader className="font-display text-lg" onClick={() => handleOpen(4)}>
        What features does the app provide for community health workers seeking job opportunities?      </AccordionHeader>
        <AccordionBody className="font-body">
        Our app offers a dynamic job board for community health workers. It lists opportunities from various healthcare organizations. Workers can apply directly, connect with potential employers, and even receive job alerts tailored to their qualifications and interests. Your next opportunity awaits!
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader className="font-display text-lg" onClick={() => handleOpen(5)}>
        Can health professionals and hospitals communicate and collaborate through the app?       </AccordionHeader>
        <AccordionBody className="font-body">
        Absolutely! Our app fosters communication and collaboration between health professionals and hospitals. It provides a secure platform for sharing updates, discussing patient care, and coordinating services. Enhance your healthcare delivery with our collaborative features!
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader className="font-display text-lg" onClick={() => handleOpen(6)}>
        Can health professionals customize their notifications and preferences on the app?     </AccordionHeader>
        <AccordionBody className="font-body">
        Yes, they can! Health professionals can customize notifications and preferences on our app. This feature allows them to stay updated on what matters most to them, ensuring a personalized user experience. Tailor your app experience to suit your professional needs!
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader className="font-display text-lg" onClick={() => handleOpen(7)}>
        How does the app handle licensing and credential verification for health professionals?     </AccordionHeader>
        <AccordionBody className="font-body">
        Our app has a robust system for verifying the licensing and credentials of health professionals. It requires professionals to upload relevant documents during registration. These documents are then reviewed by our team of experts to ensure authenticity. This process upholds the integrity of our platform and the safety of our users.
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default HealthAccordion;