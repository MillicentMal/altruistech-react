import React from "react";
import {Navbar,   Collapse,   Typography,   
    IconButton,   List,   ListItem,   Menu,
  MenuHandler,   MenuList,   MenuItem, } from "@material-tailwind/react";
import CustomButton from './Button'
import { Link } from "react-router-dom";


import {  ChevronDownIcon,   Bars3Icon,   XMarkIcon, } from "@heroicons/react/24/outline";
import {

  SunIcon,
GlobeEuropeAfricaIcon,
  CogIcon,
  HeartIcon,
CloudIcon,

 
} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from '@fortawesome/free-solid-svg-icons'
import '../index.css'



const navListMenuItems = [
  {
    title: "Altruis-Health",
    description: "Find the perfect Bridging the gap between health professionals seeking rewarding opportunities.",
    icon: HeartIcon,
    link: "/altruis-health"
  },
  {
    title: "Creativity Hub",
    description: "Meet and Promoting gender equality by enhancing the creative and innovation power of young people.",
    icon: CogIcon,
    link: "/creativity-hub"
  },
  {
    title: "Clean Water Innovation",
    description: "Promoting access to clean water and sanitation in rural communities in Sierra Leone.",
    icon: CloudIcon,
    link: "/clean-water-innovation"
  },
  {
    title: "Environmental Compliance Innovation",
    description: "Advocating for a safer environment.",
    icon: GlobeEuropeAfricaIcon,
    link: "/environmental-compliance-innovation"
  },
 
  {
    title: "Kadula Farms",
    description: "revolutionizing post-harvest loss management in agriculture.",
    icon: SunIcon,
    link: "/kadula-farms"
   
    
  },
  
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
        <Link to={link} key={key}>
        
        <MenuItem className="flex items-center gap-3 rounded-none ">
          <div className="flex items-center justify-center !bg-blue-gray-50 p-2 hover:bg-altru-blue">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold font-logo"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
        </Link>
    
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:text-altru-blue"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
Our Projects              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-none shadow-none
          lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 bg-inherit p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link to={"/"}>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-altru-blue">Home</ListItem>
      </Typography>
      </Link>
      <Link to={"/about-us"}>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-altru-blue">About Us</ListItem>
      </Typography>
      </Link>
      <NavListMenu />
      <Link to={"/team"}>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-altru-blue">Our Team</ListItem>
      </Typography>
      </Link>
      <Link to={"/contact-us"}>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-altru-blue">
          Contact Us
        </ListItem>
      </Typography>
      </Link>
    </List>
  );
}
 
export function Topbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className="mx-auto rounded-none bg-inherit shadow-none  py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <span
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 font-logo  logo-span"
        >
         <p className="logo-text">Altruistech</p>  <FontAwesomeIcon icon={faCircle} size="20px" color="blue" className="logo-icon" />
        </span>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
   
          <CustomButton/>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
         
          <CustomButton variant="gradient" size="sm" fullWidth className="font-logo"/>
           
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Topbar;