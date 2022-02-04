import React,{useContext} from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../home/LatestDrops.js/Dataprovider';
import { Main,Img,Card,Text,Images,Info} from './EachProducts.elements';

export default function DetailedProducts(){
const {id}=useParams();
const[products,setProducts]=useContext(DataContext)
const details = products.filter((product,index)=>{
    return product.id === id
})
console.log(details)

  return <Main>
      {
          details.map(product=>(
              <Card key={product.id}>
                  
                     <Img  style={{backgroundImage:`url(${product.images[0]})`}}  />
                     <Info>
                     <Text>
                         <h2>{product.mark}</h2>
                         <h5>model: &nbsp; {product.model}</h5>
                         <h5>Years: &nbsp; {product.years}</h5>
                         <h5>Hp: &nbsp; {product.hp}</h5>
                         <h5>Producer: &nbsp; {product.country}</h5>
                         <h1>{product.price}<nav>$</nav></h1>
                     </Text>
                  <Images>
                      {
                          product.images.map((img,index)=>(
                              <img src={img} alt="/" key={index}/>
                          ))
                      }
                  </Images>
                  </Info>
              </Card>
          ))
      }
  </Main>;
};


