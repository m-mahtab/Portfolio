import React from 'react';

function Footer({ contactInfo }) {
  return (
    <div className='px-5'>

        <div className='text-white text-3xl sm:text-4xl lg:text-6xl  xl:text-9xl mt-16'>
          <h1>Mishaal. Ltd</h1>
        </div>
      <div className="flex flex-col px-11 sm:px-5 text-white text-left sm:text-xs lg:text-base xl:text-xl justify-evenly sm:flex-row mt-7  md:px-7 xl:px-44 2xl:px-28 py-4 sm:py-11 bg-blue-100 font-light">
        <div className=" sm:w-1/2">
          <ul>
            <li className="font-semibold lg:pb-3 mt-5 md:mt-0 sm:mb-0">CONTACT</li>
            <li>{contactInfo.email}</li>
            <li>{contactInfo.phone1}</li>
            <li>{contactInfo.phone2}</li>
          </ul>
        </div>
        <div className=" sm:w-1/2 sm:pl-6">
          <ul>
            <li className="font-semibold lg:pb-3 mt-5 md:mt-0 sm:mb-0">COMPANY</li>
            <li>About Us</li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>Our Work</li>
          </ul>
        </div>
        <div className=" sm:w-1/2 sm:pl-6">
          <ul>
            <li className="font-semibold lg:pb-3 mt-5 md:mt-0 sm:pb-0">LEGAL</li>
            <li>Terms and Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Core Values</li>
          </ul>
        </div>
      </div>
      <div className='text-white mt-5 pb-11 sm:flex justify-between md:px-7 xl:px-44 text-xs sm:text-lg '>
        <h6>SERVICE AND WG SUPPORT</h6>
        <h6>&#169;Mahtab Test Portfolio 2023</h6>
      </div>
    </div>
  );
}

export default Footer;
