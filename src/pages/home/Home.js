import React from 'react';
import SpecialOffer from './TwoImage/SpecialOffer';
import Carousels from './Carousel/Carousels'
import {Main} from './Home.elements'
import LatesrDrops from './LatestDrops.js/LatestDrops';
import Exclusive from './ExclusiveProducts/Exclusive';
import ForYou from './ForYou/ForYou';
import ImagesList from './ImagesList/ImagesList';


const Home = () => {
  return (
  <Main>
      <Carousels/>
      <SpecialOffer/>
      <LatesrDrops/>
      <Exclusive />
      <ImagesList/>
      <ForYou />
  </Main>
      );
};

export default Home;
