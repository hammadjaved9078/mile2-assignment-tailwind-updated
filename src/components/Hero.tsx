import React from 'react';
import Navbar from './Navbar';
import Typewriter from 'react-typewriter-effect';

const Hero = () => {
  return (
    <div 
      id="hero" 
      className='min-h-screen bg-no-repeat bg-[url(/Hammad.png)] bg-cover '
      style={{backgroundSize: "30%", backgroundPosition: "left 130px top 150px" }}
    >
      <Navbar />    
      <div className='container grid lg:grid-cols-2 h-[calc(110vh-60px)] '>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div className="flex">
            <p className="inline-block" style={{ marginRight: '8px' }}>I&apos;m</p>
            <Typewriter
              textStyle={{
                fontFamily: 'Courier, monospace',
                fontSize: '3rem',
              }}
              startDelay={500}
              cursorColor="black"
              multiText={[
                'Hammad Javed',
                'Web Developer',
                'UI/UX Designer',
                'Hammad Javed',
              ]}
              loop={true}
              nextTextDelay={1000}
              typeSpeed={100}
              deleteSpeed={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
