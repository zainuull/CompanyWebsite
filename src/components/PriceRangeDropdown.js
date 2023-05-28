import React, { useState, useEffect, useContext } from 'react';
// Icons
import { RiWallet2Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// Headless UI
import { Menu } from '@headlessui/react';
// House Context
import { ItemContext } from './ItemContext';

const PriceRange = () => {
  // use Context
  const { price, setPrice } = useContext(ItemContext);
  // Use State
  const [isOpen, setIsOpen] = useState(false);

  // Prices
  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '100.000.000 - 200.000.000',
    },
    {
      value: '200.000.000 - 300.000.000',
    },
    {
      value: '300.000.000 - 400.000.000',
    },
    {
      value: '400.000.000 - 500.000.000',
    },
    {
      value: '500.000.000 - 600.000.000',
    },
    {
      value: '600.000.000 - 700.000.000',
    },
    {
      value: '700.000.000 - 800.000.000',
    },
    {
      value: '800.000.000 - 900.000.000',
    },
    {
      value: '900.000.000 - 1.000.000.000',
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
        <RiWallet2Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium">{price}</div>
          <div className="text-[13px]">Price Range</div>
        </div>
        {isOpen ? <RiArrowUpSLine className="dropdown-icon-secondary" /> : <RiArrowDownSLine className="dropdown-icon-secondary" />}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item onClick={() => setPrice(price.value)} className="cursor-pointer hover:text-[var(--primary)] transition" as="li" key={index}>
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRange;
