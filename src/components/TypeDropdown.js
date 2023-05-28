import React, { useState, useEffect, useContext } from 'react';
// Icons
import { RiHome3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// Headless UI
import { Menu } from '@headlessui/react';
// Item Context
import { ItemContext } from './ItemContext';

const TypeDropdown = () => {
  // use Context
  const { type, setType, types } = useContext(ItemContext);
  // Use State
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
        <RiHome3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium">{type}</div>
          <div className="text-[13px]">Select your item</div>
        </div>
        {isOpen ? <RiArrowUpSLine className="dropdown-icon-secondary" /> : <RiArrowDownSLine className="dropdown-icon-secondary" />}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {types.map((type, index) => {
          return (
            <Menu.Item onClick={() => setType(type)} className="cursor-pointer hover:text-[var(--primary)] transition" as="li" key={index}>
              {type}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
export default TypeDropdown;
