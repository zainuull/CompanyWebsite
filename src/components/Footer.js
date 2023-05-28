import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/80 py-4 text-center text-white">
      <div className="container mx-auto">
        <Link to="https://api.whatsapp.com/send?phone=6281228134488&text=Halo+Pak+Saya+Ingin+Order&fbclid=PAAaZeoWwaBTH1cX3m6X7aqpUO0uXDKD5KBBGB1YuZahb34MO1_GDaNa-W8Uo" target="_blank">
          <h1 className="hover:text-[var(--primary)] transition cursor-pointer">Ulun : 081228134488</h1>
        </Link>
        <Link to="https://api.whatsapp.com/send?phone=6282114487163&text=Halo+Pak+Saya+Ingin+Order&fbclid=PAAaZeoWwaBTH1cX3m6X7aqpUO0uXDKD5KBBGB1YuZahb34MO1_GDaNa-W8Uo" target="_blank">
          <h1 className="hover:text-[var(--primary)] transition cursor-pointer">Syahriza : 082114487163</h1>
        </Link>
        <h1>syahrizaalsistani@gmail.com</h1>
        <h1 className="mt-6">Copyright &copy; 2023 All right reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
