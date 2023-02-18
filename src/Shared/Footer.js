import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import glamygirl from '../assets/logo.png'


const Footer = () => {
  return (


    <footer className="footer grid grid-cols-1 md:p-20 p-10 bg-black md:grid-cols-4 gap-6 items-start text-start text-white">
      <div className='mr-auto w-full lg:w-1/2'>
        <Link to='/' className="font-bold  lg:text-5xl text-4xl">
          <img className='' src={glamygirl} />
        </Link>
        {/* <p className='text-white-500'>Copyright © glamygirl. All Right Reserved.</p> */}
      </div>
     
      <div className='ml-auto'>
        <span className=" font-bold text-base text-white">ADDRESS:</span>
        <a className="link link-hover text-base text-white-500">Headquarters: Menlo Park, California, United States
          Revenue: 85.96 billion USD (2020)</a>
        <span className=" font-bold text-base text-white">SUBSIDIARIES:</span>
        <a className="link link-hover text-base text-white-500">WhatsApp, Giphy, Novi Financial, Inc.,</a>


      </div>
 
       <div className='md:mx-auto m-0'>
       <span className=" font-bold text-base normal-case text-white">INFORMATION</span>
        <a className="link link-hover text-base text-white-500">Home</a>
        <a className="link link-hover text-base text-white-500">About</a>
        <a className="link link-hover text-base text-white-500">Service</a>
        <a className="link link-hover text-base text-white-500">Contact US</a>
       </div>
      <div className='md:mx-auto m-0'>
        <span className=" font-bold normal-case text-white">IMPORTANT LINKS</span>
        <a className="link link-hover flex flex-row gap-4 items-center">

          <FaFacebook className='text-xl text-white'></FaFacebook> Facebook
        </a>
        <a className="link link-hover flex flex-row gap-4 items-center">

          <FaInstagram className='text-xl text-white'></FaInstagram> Instagram
        </a>
        <a className="link link-hover flex flex-row gap-4 items-center">

          <FaLinkedin className='text-xl text-white'></FaLinkedin> LinkedIn
        </a>
        <a className="link link-hover flex flex-row gap-4 items-center">

          <FaTwitter className='text-xl text-white'></FaTwitter> Twitter
        </a>
      </div>

    </footer>

  );
};

export default Footer;