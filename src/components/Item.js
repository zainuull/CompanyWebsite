import React from 'react';
// Icons
import { BsBag, BsGear } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { SlEnvolopeLetter } from 'react-icons/sl';

const House = ({ item }) => {
  const {type, status, name, mesin, surat, tahun, price } = item;
  return (
    <div className="bg-white, p-5 shadow-1 w-full max-w-[300px] mx-auto rounded-lg hover:shadow-2xl transition cursor-pointer">
      <img className="mb-4 h-[200px] object-cover mx-auto" src={item.image.slide1} />
      <div className="flex gap-x-2 text-sm">
        <div className="bg-[var(--primary)] text-white px-3 rounded-xl">{type}</div>
        <div className="bg-green-500 text-white px-3 rounded-xl">{status}</div>
      </div>
      {/* Name */}
      <div className="text-lg font-semibold max-w-[270px] mt-2">{name}</div>
      {/* Detail */}
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-2">
          <div className="text-[20px]">
            <BsGear />
          </div>
          <div>{mesin}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <SlEnvolopeLetter />
          </div>
          <div>{surat}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiTime />
          </div>
          <div>{tahun}</div>
        </div>
      </div>
      {/* Price */}
      <div className="text-lg font-semibold text-[var(--primary)] mb-4">Rp. {price}</div>
    </div>
  );
};

export default House;
