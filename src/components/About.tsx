import React from 'react'
import Heading from './Heading';


const About = () => {
  return (
    <div id='about' className='container pt-32 pl-[30px]'>
        <Heading title='About'/>
        <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">About Me</h2>
        <p className='text-gray-500 pt-4' data-aos="zoom-in-up">
            I am a Student at GIAIC, pursuing a course In Artificial Intelligence, Web 3.0, & Metaverse.
            Passionate about technology and constantly learning new skills to stay up to date with the latest innovations. 
        </p>


    </div>
  )
}

export default About
