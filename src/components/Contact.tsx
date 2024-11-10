import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Heading from './Heading';

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container px-4 md:px-8 lg:px-16'>
      <Heading title='Contact'/>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-3xl md:text-5xl' data-aos="zoom-in-up">Get In Touch</h2>
            <p className='text-gray-600 text-[16px] md:text-[18px] pt-2' data-aos="zoom-in-up">
                Drop me a line, give me a call, or send me a message by submitting the form. 
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
              <AiOutlineMail size={30}/> hammad9078@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
              <BsTelephone size={30}/> 0307-7470595
            </div>
        </div>
        <div className='space-y-5' >
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text" className='bg-transparent border border-[#FABC3F] p-2' id="name" />
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text" className='bg-transparent border border-[#FABC3F] p-2' id="email" />
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="msg">Message</label>
                <textarea className='bg-transparent border border-[#FABC3F] p-2' id="msg" rows={8}></textarea>
            </div>
            <button className='bg-[#FABC3F] text-white p-2 px-6' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
