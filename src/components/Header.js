import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

const Header = () => {
  return (
    <header className="py-6 mb-6 border-b-2">
      <div className="px-4 flex items-center justify-between lg:px-8">
        <Link to="/">
          <h1 className="font-semibold tracking-wider text-lg lg:text-4xl lg:tracking-widest">ULUN SYAHRONI</h1>
        </Link>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <Link
            className="hover:text-blue-300 transition cursor-pointer flex items-center gap-x-1 text-2xl"
            to="https://api.whatsapp.com/send?phone=6281228134488&text=Halo+Pak+Saya+Ingin+Order&fbclid=PAAaZeoWwaBTH1cX3m6X7aqpUO0uXDKD5KBBGB1YuZahb34MO1_GDaNa-W8Uo"
            target="_blank"
          >
            <AiOutlineWhatsApp className="text-green-600" /> 
          </Link>
          <Link className="flex items-center gap-x-1 bg-[var(--secondary)] py-1 px-2 rounded-lg hover:bg-[var(--primary)] transition cursor-pointer lg:px-4 lg:py-3" to="https://goo.gl/maps/sbcLPUqYKHuMbmTGA" target="_blank">
            <CiLocationOn /> Location
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
