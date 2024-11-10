import React from 'react'
import Heading from './Heading';


const Skills = () => {
  return (
    <div id='skills' className='container pt-32 pl-[30px]'>
            <Heading title='Skills'/>
      
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500 pt-4'>
                    I have a solid foundation in Web development, specializing in HTML, CSS, and TypeScript.
                    My Experience extends to using frameworks like React and Next.js to Create dynamic and user-friendly
                    application. I'm also Proficient in Tailwind CSS for efficinet styling and design. With a Passion for learning,
                    I stay updated on the latest Technologies to enhance my skill set and contribute effectively to projects.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-[#FABC3F] text-3xl sm:text-4xl pt-4'>
                    <div className='space-y-2 pt-4'>
                        <h2 data-aos="zoom-in-up">TypeScript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div className='space-y-2 pt-4'>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>
                    </div>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default Skills
