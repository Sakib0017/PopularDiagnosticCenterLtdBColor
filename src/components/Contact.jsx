import React from "react";
import {   Nav, Navbar,  Tech} from "../components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { printer ,downloads } from "../assets";
import { SectionWrapper } from "../hoc";
import { dhan  } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { Card, Typography} from "@material-tailwind/react";
import {
   
 
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";

import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="bg-white">
   <Nav />
     
      
     <Navbar />
     <div className={`justify-center  items-center p-2 text-center flex flex-col  text-white`}>
       <div className="flex flex-col mt-[200px] max-w-7xl container rounded block items-stretch md:flex-row  bg-[#f3f3f3]  mx-auto">
       <Card color="transparent" className="mx-auto w-full max-w-7xl" shadow={false}>
   

      <form className="mt-8 mb-2 w-full p-5 max-w-7xl  sm:w-300">
        <div className="mb-1 flex flex-col gap-6">
        <h5 className='text-[44px] p-5 font-ubuntu font-bold text-[#006642]'>Send us a message</h5> 
          <Typography variant="h6" color="blue-gray" className="-mb-3 text-[#006642] text-start">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 text-[#006642] p-2 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3 text-[#006642] text-start">
            Your FullName
          </Typography>
          <Input
            size="lg"
            placeholder="Name"
            className=" !border-t-blue-gray-200 text-[#006642] p-2 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3 text-[#006642] text-start">
            Your Mobile
          </Typography>
          <Input
            size="lg"
            placeholder="01712345678"
            className=" !border-t-blue-gray-200 text-[#006642] p-2 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3 text-[#006642] text-start">
            Your Messages
          </Typography>
          <Input
            size="lg"
            placeholder="Write Support Queries"
            className=" !border-t-blue-gray-200 text-[#006642] p-2 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          
          
        </div>
       
        <Link to="/report"><Button className="mt-6 bg-[#006642] " fullWidth>
          SEND MESSAGES
        </Button></Link>
        
      </form>
    </Card>
            
       
            </div>
            </div>
     <div className={`inset-0 justify-center items-center mb-[20px] text-center flex flex-wrap  text-white`}>
       
       
       
       
       <div className="flex flex-col  max-w-screen-xl container rounded block items-stretch md:flex-row  mt-[20px] mx-auto">
       
       
       
       <div className="relative flex flex-wrap p-2">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2197080792394!2d90.37959757619976!3d23.73954337867781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ca7af5f82b%3A0xce7d1ab6b16a027!2sPopular%20Diagnostic%20Centre%20Ltd.!5e0!3m2!1sen!2sbd!4v1706512680599!5m2!1sen!2sbd" width="1270" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
            </div>
           


            
        <div className="w-full">
        
          <ul
            className="flex mb-0 ml-2 mr-2 list-none flex-wrap pt-1 pb-2 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
    
            </li>
            </ul>
            </div>
            </div>
            </div>
            <div>
            <div className=' mx-auto p-2 '>
            
            <h5 className='text-[44px] text-center p-5 font-ubuntu font-bold text-[#006642]'>HOT LINE : 10636</h5>   
            <p className='text-[30px] text-center font-ubuntu text-[#006642]'>info@populardiagnostic.com</p>
            <p className='text-[30px] text-center font-ubuntu text-[#006642]'>House #16, Road # 2, Dhanmondi R/A, Dhaka-1205, Bangladesh</p>
          </div>
            </div>
     <Tech />

     
   </div>
  )
}

export default Contact