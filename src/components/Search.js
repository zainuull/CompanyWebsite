import React, { useContext } from 'react';
// Component
import TypeDropdown from './TypeDropdown';
import PriceRangeDropdown from '../components/PriceRangeDropdown';
// Icon
import { RiSearch2Line } from 'react-icons/ri';
// Item Context
import { ItemContext } from './ItemContext';

const Search = () => {
  const { handleClick } = useContext(ItemContext);

  return (
    <div
      className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-evenly gap-4 lg:gap-x-3 relative lg:shadow-1
  bg-white lg:bg-transparent lg:backdrop-blur rounded-lg lg:mt-6"
    >
      <TypeDropdown />
      <PriceRangeDropdown />
      <button onClick={() => handleClick()} className="w-full lg:max-w-[170px] h-16 rounded-lg flex flex-col justify-center items-center text-lg">
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
