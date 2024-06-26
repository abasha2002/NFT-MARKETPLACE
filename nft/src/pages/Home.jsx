import React from 'react';

import HomeSection1 from '../components/HomePageComponents/HomeSection1';
import HomeSection2 from '../components/HomePageComponents/HomeSection2';
import HomeSection3 from '../components/HomePageComponents/HomeSection3';
import HomeSection4 from '../components/HomePageComponents/HomeSection4';
import HomeSection5 from '../components/HomePageComponents/HomeSection5';
import HomeSection6 from '../components/HomePageComponents/HomeSection6';
import HomeSection7 from '../components/HomePageComponents/HomeSection7';
import HomeSection8 from '../components/HomePageComponents/HomeSection8';

import Header from '../components/Header';
import Footer from '../components/Footer';


function Home() {  
  return (
    <div className='mainWrapper'>
      <Header />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
      <Footer />
    </div>
  )
}

export default Home