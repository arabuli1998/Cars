import React from 'react';
import Foryou from './Foryou.css'
import { data } from './ForYouData';

const ForYou = () => {
  return <div className='main-container'>
      <div className="texts">
          <h5>From The Blog</h5>
          <h2>FASHION FOR YOU</h2>
          <nav className='line'></nav>
      </div>


      <div className='images-container' >
      {
      data.map((item,index)=>(
<div className="container" key={index}>
  <img src={item.image} alt="Avatar" className="image"/>
  <div className="overlay">
    <div className="text">{item.model}</div>
  </div>
 
          <nav className='describe'>
              <h5>{item.title}</h5>
              <h4>{item.text}</h4>
          </nav>
          </div>  
      ))}
       </div>

  </div>;
};

export default ForYou;
