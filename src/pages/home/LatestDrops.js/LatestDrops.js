import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import { DataContext } from './Dataprovider';
import { Main,Title,Text,ProductList,Cart,CartText,Img,Zero} from './LatestDrop.elements';

export default function LatesrDrops(){
const [products,setProducts]=useContext(DataContext)
console.log(products)

  return( <Main>
           <Title>
             <h5>Special Offer</h5>
             <h1>LATEST DROPS</h1>
             <nav></nav>
           </Title>
           <Text>
             <p>
             A new year will bring with it fresh energy. With a rough year behind them,
              the automotive industry will be looking to 2021 to get right back ...
              </p>
            </Text>
           <ProductList>
             {products.map(product =>(
               <Cart key={product.id}>
                 <Link to={`/products/${product.id}`}>
                 <Img style={{backgroundImage:`url(${product.images[0]})`}} />
                 </Link>
                 <CartText>
                   <h5>{product.mark}</h5>
                   <h2>{product.price} &nbsp; <nav>$</nav></h2>
                 </CartText>
                 <button>See More</button>
               </Cart>
             ))}
           </ProductList>
           <Zero>
             <h1>2022</h1>
             <h5>fashion trends</h5>
             <p>Special offer</p>
           </Zero>
  </Main>
  )
};

