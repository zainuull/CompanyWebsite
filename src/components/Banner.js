import React from 'react';
import { Link } from 'react-router-dom';
// Image
import Image from '../assets/img/dashboard.png';
// Component
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center text-center px-8 justify-center flex-1 lg:items-start lg:text-left">
          <h1 className="text-4xl lg:text-[45px] leading-[50px] font-semibold mb-6">
            <span className="text-[var(--primary)]">Good Buildings</span> Are Built With Good Tools
          </h1>
          <p className="max-w-[600px] mb-4 text-lg lg:text-xl">Sale and Purchase of Heavy Equipment and Spare Parts.</p>
          <p className="max-w-[600px] mb-8 text-lg lg:text-xl">check the unit directly to the location, if you like it please buy it before someone else buys it.</p>
          {/* Button */}
          <Link to="/galeri">
            <button className="text-2xl tracking-widest mb-6">Workspace</button>
          </Link>
        </div>
        {/* Image */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} className="rounded-tl-[100px] w-[750px] object-cover" />
        </div>
      </div>
      {/* Search */}
      <Search />
    </section>
  );
};

export default Banner;
