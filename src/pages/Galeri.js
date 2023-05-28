import react from 'react';
// Icons
import { BsGear } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { SlEnvolopeLetter } from 'react-icons/sl';
// Data
import { itemTerjual, testimoniData } from '../data';

const Galeri = () => {
  return (
    <section className='lg:px-16'>
      <div className="bg-white w-full min-h-[800px] shadow-1 mx-auto rounded-lg p-10 mb-12">
        {/* Galeri */}
        <div>
          <h1 className="text-center text-xl lg:text-2xl font-semibold tracking-widest uppercase mb-4">Have been Sold</h1>
        </div>
        {/* Image */}
        <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide flex relative items-center gap-5">
          {itemTerjual.map((item, index) => {
            return (
              <div className="relative bg-white p-5 shadow-1 w-[500px] mx-auto rounded-lg rounded-tl-[90px] hover:shadow-2xl transition cursor-pointer" key={index}>
                <img className="mb-4 h-[200px] object-cover mx-auto" src={item.image} />
                <div className="flex gap-x-2 text-sm">
                  <div className="bg-[var(--primary)] text-white px-3 rounded-xl">{item.type}</div>
                  <div className="bg-red-500 text-white px-3 rounded-xl">{item.status}</div>
                </div>
                {/* Name */}
                <div className="text-lg font-semibold max-w-[350px]">{item.name}</div>
                {/* Detail */}
                <div className="flex gap-x-4 my-4">
                  <div className="flex items-center text-gray-600 gap-2">
                    <div className="text-[20px]">
                      <BsGear />
                    </div>
                    <div>{item.mesin}</div>
                  </div>
                  <div className="flex items-center text-gray-600 gap-1">
                    <div className="text-[20px]">
                      <SlEnvolopeLetter />
                    </div>
                    <div>{item.surat}</div>
                  </div>
                  <div className="flex items-center text-gray-600 gap-1">
                    <div className="text-[20px]">
                      <BiTime />
                    </div>
                    <div>{item.tahun}</div>
                  </div>
                </div>
                {/* Price */}
                <div className="text-lg font-semibold text-[var(--primary)] mb-4">Rp. {item.price}</div>
                {/* Overlay */}
                <div className="absolute bg-black/60 w-full h-full top-0 left-0 overflow-hidden flex rounded-lg">
                  <div className="w-[250px] h-[250px] mx-auto rounded-xl flex flex-col justify-center items-center">
                    <h1 className="font-bold text-gray-200 text-3xl">Sold Out</h1>
                    <h1 className="font-bold text-gray-200 text-2xl">To</h1>
                    <h1 className="font-bold text-gray-200 text-2xl">{item.city}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Testimoni */}
        <div className="mt-24 mb-24">
          <div>
            <h1 className="lg:text-2xl text-xl font-semibold tracking-widest text-center uppercase">Testimony</h1>
          </div>
          <div id="slider" className="w-full h-full overflow-x-scroll scroll scroll-smooth scrollbar-hide flex gap-5">
            {testimoniData.map((data, index) => {
              return (
                <div className="bg-gray-200 w-[300px] h-[500px] rounded-lg p-10 mx-auto mt-4">
                  <div className="flex flex-col items-center" key={index}>
                    <div className="w-36 h-36 rounded-full shadow-2xl shadow-black/60">
                      <img className='rounded-full w-36 h-36 object-cover' src={data.people.image} />
                    </div>
                    <div className="text-center mt-8">
                      <h2 className="font-semibold mb-2">{data.people.name}</h2>
                      <h3>{data.description}</h3>
                      <h4 className="mt-8 italic">{data.country}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeri;
