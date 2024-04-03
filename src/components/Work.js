import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

import Img1 from '../assets/link.png';
import Img2 from '../assets/tik.png';
import Img3 from '../assets/port.png';

const Work = () => {
  return (
  <section
   className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div> 
            <h2 className='h2 text-[50px] leading-tight text-accent'>
              <b>My Latest <br/>
              Work.</b>
            </h2>
            <p className='max-w-sm mb-16'>
            
             I've engaged in a variety of projects that showcase my skills, creativity, and problem-solving abilities.
             Let's see some of my notable projects
             
            </p>
            <button className='btn btn-sm'>
              <a href='https://github.com/ankitsingh2633?tab=repositories'>View all projects</a>
            </button>
          </div>
           
        <motion.div
         variants={fadeIn('right',0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false,amount:0.3}}
          className='group relative overflow-hidden border-2
           border-white/50 rounded-xl'> 
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img  className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <a href='https://linkup-three-theta.vercel.app' className='text-3xl text-gradient'>LINKUP</a>
              
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-lxl text-white'> social media app. Using React, Vite, and TypeScript </span>
            </div>
          </motion.div>
        </div>
        <motion.div
         variants={fadeIn('left',0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false,amount:0.3}}
         className='flex-1 flex flex-col gap-y-10'>

        <div className='group relative overflow-hidden border-2
           border-white/50 rounded-xl mt-20'> 
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img  className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <a href='https://ankitsingh2633.github.io/tik-tac-toe-with-ai'><span className='text-3xl text-gradient'>Tic Tac Toe with Ai</span></a>
              
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-lxl text-white'> An intelligent computer opponent. Using HTML, CSS, and JavaScript, </span>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2
           border-white/50 rounded-xl'> 
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img  className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <a href='https://portfolio-navy-eight-24.vercel.app/'><span className='text-3xl text-gradient'>3D Porpolio</span></a>
              
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-lxl text-white'> 3D porfolio using vite , tailwind and react </span>
            </div>
          </div>
        
        </motion.div>
        </div> 
      </div>
  </section>
  );
};

export default Work;
