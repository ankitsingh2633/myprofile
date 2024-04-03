import React from 'react';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import {SiC} from 'react-icons/si';
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { GrOracle } from "react-icons/gr";


import CountUp from 'react-countup';
const services =[
  {
    name:'Front-end',
    icons:[<FaReact/>,<FaBootstrap/>,<FaHtml5 />,<FaCss3Alt />,<SiTailwindcss />], 
    description:" React BootStrap HTML CSS tailwind"
    ,
    start: 0,
    end:81,
    link : 'learn more',
  },
  {
    name:'Back-End',
    icons:[<FaNodeJs/>,<DiJavascript/>,<FaPython/>,<FaJava/>],
    start:0,
    end:72,
    description:
    ' Node JavaScript Python Java',
    link : 'learn more',
  },
  {
    name:' Programmer languages',
    icons:[<FaPython/>,<FaJava/>,<SiCplusplus/>,<SiC/>],
    start:0,
    end:85,
    description:
    ' Python Java C++ . C   ',
    link : 'learn more',
  },
  {
    name:'Database',
    icons:[<GrMysql/>,<SiMongodb/>,<GrOracle/>,],
    start:0,
    end:78,

    description:
    'MYSQL MongoDB Oracle',
    link : 'learn more',
  },
];

const Services = () => {
  const [ref,inView]=useInView({
    threshold: 0.5
    
  }
  );
  
  return (
  <section className='section' id='services' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false,amount:0.3}}
        
         className='flex-1 lg:bg-services lg:bg-top bg-no-repeat
         mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-[50px] text-accent mb-6'>
           <b> SKILLS </b>
          </h2>
          <h3 className='h3 max-w-[455px] mb-16'> Technical skills <br/>Tools</h3>
          <button className='btn btn-sm'>
          See my work

          </button>
        </motion.div>
        <motion.div
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false,amount:0.3}}
        
         className='flex-1'>
           <div >
             {services.map((service, index)=>{
              const {name,description,link,icons,start,end} = service;
              return(
                <div className='border-b border-white/20 h-[146px] mb-[38px]
                 flex' key={index}> 
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary 
                     font-semibold mb-6'>{name}</h4>
                    <p className='flex font-secondary text-[50px] text-accent  leading-tight mb-5 space-x-10'>
                      {icons}
                      
                    </p>
                    <p className='font-secondary text-[15px]  leading-tight mb-2 space-x-50'style={{ wordSpacing: '3em' }}>
                    {description}
                    </p>
                    
                    
                   
                  </div>
                  
                  <div className='flex flex-col flex-1 items-end'>
                  <div className='text-[40px] bottom-6 font-tertiary text-gradient
                   mb-2 '>
                  {
                   inView ?
                   <CountUp start={start} end={end} duration={4}/> :
                   null
                  }
                  %
                  </div>
                    
                    <a href='#' className='text-gradient text-sm'>
                      {link}
                    </a>
                  </div>
                </div> 
              );  
             })}
           </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Services;
