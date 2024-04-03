import React from 'react';
const Header = () => {
  return (
  <header className='py-8' >
    <div className='container mx-auto'>
       <div className='flex justify-between items-center'>
        <a href='https://example.com' className='text-[30px] text-gradient btn-link'>
          <b>ANKIT<br/></b>
          <b className='text-white'>SINGH</b>
        </a>
        <button className='btn btn-sm'> Hire Me</button>

       </div>

    </div>

    
  </header>
  );
};

export default Header;
