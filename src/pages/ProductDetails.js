import React from 'react';
// useParams & Link
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// Data
import { itemReady } from '../data';
// Icons
import { BsBag, BsGear } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { SlEnvolopeLetter } from 'react-icons/sl';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';


const ProductDetails = () => {
  // get id
  const { id } = useParams();
  // get house based on id
  const items = itemReady.find((item) => {
    return item.id === parseInt(id);
  });
  
  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        {/* Header */}
        <div className="flex flex-col justify-between lg:flex-row lg:items-center mb-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-widest">{items.name}</h3>
          </div>
          <div className="flex gap-x-2">
            <h4 className="bg-[var(--primary)] text-white px-3 rounded-xl">{items.type}</h4>
            <h4 className="bg-green-500 text-white px-3 rounded-xl">{items.status}</h4>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-[var(--primary)]">Rp. {items.price}</h3>
          </div>
        </div>
        {/* Image */}
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          {/* Left */}
          <div className="max-w-[760px]">
            <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth flex relative items-center gap-5">
              <img src={items.image.slide1} alt="" />
              <img src={items.image.slide2} alt="" />
              <img src={items.image.slide3} alt="" />
              <img src={items.image.slide4} alt="" />
              {/* <h1 className="absolute left-1/2 font-bold text-white bottom-5 text-2xl tracking-widest"></h1> */}
            </div>
            {/* Icons */}
            <div className="flex gap-x-6 mb-6 mt-6">
              <div className="flex gap-x-2 items-center">
                <BsGear className="text-2xl" />
                <div>{items.mesin}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <SlEnvolopeLetter className="text-2xl" />
                <div>{items.surat}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiTime className="text-2xl" />
                <div>{items.tahun}</div>
              </div>
            </div>
            {/* Description */}
            <div>
              <h3>Brand : {items.detail.merek}</h3>
              <h3>Type : {items.detail.tipe}</h3>
              <h3>Condition : {items.detail.kondisi}</h3>
              <h3>Unit condition : {items.detail.unit}</h3>
              <h3>Heavy : {items.detail.berat}</h3>
              <h3 className="mt-3">{items.detail.deskripsi}</h3>
            </div>
          </div>
          {/* Right */}
          <div className="flex-1 bg-white w-full border border-[var(--secondary)] px-8 py-6 mb-8 rounded-lg">
            {/* Profil Agent */}
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-[var(--secondary)] rounded-full">
                <img src={items.agent.image} alt="agent" className="rounded-full" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{items.agent.name}</h3>
                <Link to="https://www.instagram.com/ulunsyahroni/" className="text-[var(--primary)] text-sm hover:text-blue-500 transition" target="_blank">
                  View Listings
                </Link>
              </div>
            </div>
            {/* Form */}
            <form className="flex flex-col gap-y-4">
              <input className="border border-gray-300 focus:border-[var(--primary)] outline-none rounded-lg w-full px-4 h-14 text-sm" type="text" placeholder="Name" />
              <input className="border border-gray-300 focus:border-[var(--primary)] outline-none rounded-lg w-full px-4 h-14 text-sm" type="text" placeholder="Email" />
              <input className="border border-gray-300 focus:border-[var(--primary)] outline-none rounded-lg w-full px-4 h-14 text-sm" type="text" placeholder="No Hp" />
              <textarea className="border border-gray-300 focus:border-[var(--primary)] outline-none rounded-lg w-full px-4 h-20 text-sm" placeholder="Message"></textarea>
              <div className="flex gap-x-2">
                <button className="w-full">Send Message</button>
                <Link to="https://api.whatsapp.com/send?phone=6282114487163&text=Halo+Pak+Saya+Ingin+Order&fbclid=PAAaZeoWwaBTH1cX3m6X7aqpUO0uXDKD5KBBGB1YuZahb34MO1_GDaNa-W8Uo" target="_blank">
                  <h2 className="bg-white border-2 border-[var(--secondary)] px-6 py-2 rounded-lg hover:bg-transparent transition cursor-pointer">Call</h2>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
