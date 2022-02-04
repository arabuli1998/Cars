import React from 'react';
import {Row1,Cols } from './SpecialOffer.elements';
import { FirstRowData } from './SpecialOffer.Data';

const SpecialOffer = () => {
  return <Row1>
  {FirstRowData.map((item, index)=>(
      <Cols key={index} style={{backgroundImage:`url(${item.img})`}}>
      
      <h5>{item.price} &nbsp;<nav>{item.sale}</nav></h5>
      <h3>{item.for}</h3>
      </Cols>
  ))}
  
  </Row1>
        ;
};

export default SpecialOffer;
