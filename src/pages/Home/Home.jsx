import React from 'react'

import LiveStream from '../../components/LiveStream/LiveStream';
import NewsContainer from '../../components/NewsContainer/NewsContainer';
import Games from '../../components/Games/Games';
import SimpleSlider from '../../components/SimpleSlider/SimpleSlider';
import Cards from '../../components/Cards/Cards';
import Quotes from '../../components/Quotes/Quotes';
import Hero from '../../components/Hero/Hero';

const Home = () => {
  return (
    <>
        <Hero/>
        <Cards/>
        <Games/>
        <LiveStream/>
        <NewsContainer/>
        <Quotes/>
        <SimpleSlider/>
    </>
  )
}

export default Home;