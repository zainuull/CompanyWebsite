import React, { useContext } from 'react';
// Link
import { Link } from 'react-router-dom';
// Item Context
import { ItemContext } from './ItemContext';
// Component Item
import Item from './Item';
// Icon
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  // Use Context
  const { items, loading } = useContext(ItemContext);
  // If loading is True
  // if (loading) {
  //   return (
  //     <div>
  //       <ImSpinner2 className="mx-auto animate-spin text-[var(--primary)] text-4xl mt-[200px]" />
  //       <p className="mx-auto text-xl text-gray-400 font-semibold mt-3 text-center mb-[500px]">Sabar ya kakak......</p>
  //     </div>
  //   );
  // }
  if (items.length < 1) {
    return <div className="mx-auto text-center mt-[120px] text-xl text-gray-400 font-semibold mb-[500px]">Sorry, Item not available.</div>;
  }
  return (
    <section className="mb-20 lg:mt-0">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {items.map((item, index) => {
            return (
              <Link to={`/product/${item.id}`} key={index}>
                <Item item={item} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
