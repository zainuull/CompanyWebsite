import React from 'react';
// Component
import Banner from "../components/Banner";
import ItemList from '../components/ItemList';

const Home = () => {
  return (
    <section className='px-4'>
      <div>
        <Banner />
        <ItemList/>
      </div>
    </section>
  ); 
};

export default Home;
