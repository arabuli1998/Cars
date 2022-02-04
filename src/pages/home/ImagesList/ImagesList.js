import React from 'react';
import Imageslist from './Imageslist.css'
import { data } from './ImagesListData';

const ImagesList = () => {
  return <div className='imagesList'>
{
    data.map((item, index)=>(
        <div className='each-image' style={{backgroundImage:`url(${item.img})`}} key={index}/>
    ))
}

  </div>;
};

export default ImagesList;
