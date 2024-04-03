import React from 'react';
import Image from "../assets/ankit2.svg";

import {FaGithub,FaLinkedin,FaInstagram} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Banner = () => {
  return (

    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
         lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
             variants={fadeIn('up',0.3)} 
             initial="hidden" whileInView={'show'} 
             viewport={{once: false,amount: 0.7}}
             className='text-[55px] font-bold leading-[0.8]
              lg:text-[110px]'
             
             >ANKIT <span> KUMAR </span> SINGH </motion.h1>
            
          
            <motion.div 
             variants={fadeIn('up',0.3)} 
             initial="hidden" whileInView={'show'} 
             viewport={{once: false,amount: 0.7}}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>
                I am a 
              </span>
              <TypeAnimation 
              sequence={['Developer',2000,'Designer',2000,'Programmer',2000,]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            
            </motion.div>
              <motion.p 
              variants={fadeIn('up',0.5)} 
              initial="hidden" whileInView={'show'} 
              viewport={{once: false,amount: 0.7}}
              className='mb-8 max-w-lg mx-auto lg:mx-0'> 
              <h3 className='font-primary text-sm tracking-[5px]'>
              I'm Ankit Kumar Singh, a passionate Computer Science and Engineering student
              from Chandigarh University. With a fervor for innovation and a knack for 
              problem-solvingI dive into the realm of technology with a creative edge.</h3>
              </motion.p>
              <motion.div
              variants={fadeIn('up',0.6)} 
              initial="hidden" whileInView={'show'} 
              viewport={{once: false,amount: 0.7}}
               className='flex max-w-max gap-x-6 item-center
               mb-12 mx-auto lg:mx-0'>
                <button className='btn btn-lg'>
                   contact me
                </button>
                <a href='https://example.com' className='p-4 text-[20px] text-gradient btn-link'>MY PORTFOLIO</a>
              </motion.div>
              <motion.div
               variants={fadeIn('up',0.7)} 
               initial="hidden" whileInView={'show'} 
               viewport={{once: false,amount: 0.7}} 
              className='flex text-[60px] text-purple-500 gap-x-6 max-w-max 
                mx-auto lg:mx-0 space-x-5'>
                <a href='https://www.linkedin.com/in/ankit-kumar-singh-5916a4200/' alt='no'>
                  <FaLinkedin/>
                </a>
                <a href='https://github.com/ankitsingh2633' alt='no'>
                  <FaGithub/>
                </a>
                <a href='https://www.instagram.com/ankit_singh2633/?hl=en' alt='no'>
                  <FaInstagram/>
                </a>
              </motion.div>
          </div>
          
          
          <motion.div
             variants={fadeIn('down',0.5)} 
             initial="hidden" whileInView={'show'} 
            
           className='hidden lg:flex flex-1 max-w-[320px] max lg:max-w-[482px]
            '>
            <img  src={Image} alt=""/>

          </motion.div>
        </div>
      </div>
    </section>
  );
  };
export default Banner;
