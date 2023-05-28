import React from 'react';
// Component
import Banner from "../components/Banner";
import ItemList from '../components/ItemList';

const Home = () => {
  return (
    <section className=''>
      <div>
        <Banner />
        <ItemList/>
      </div>
    </section>
  ); 
};

export default Home;
