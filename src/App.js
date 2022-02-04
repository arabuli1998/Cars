import {useState,useEffect} from 'react'
import Navbars from "./components/navBar/Navbars";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import styled from "styled-components";
import { Dataprovider } from './pages/home/LatestDrops.js/Dataprovider';
import DetailedProducts from './pages/EachProduct/DetailedProducts';
import BottomBar from './components/bottombar/BottomBar';
import SecondBottomBar from './components/secondBottomBar/SecondBottomBar';
import Products from './pages/products/Products';



function App() {
const [color, setColor]=useState('white')
const [colorback, setColorback]=useState('black')

  const LeftSide=styled.div`
  width: 40px;
  height: 50vh;
  position: fixed;
  right:0;
  top:25%;
  display: flex;
  flex-direction: column;
  background-color: ${color};
  justify-content: space-around;
  align-items: center;
  z-index: 99;
  i{
    color: ${colorback};
    cursor: pointer;
    font-size: 1.5rem;
  }
  `;
  const App=styled.div`
  padding: 0;
margin: 0;
box-sizing:border-box;
width: 100%;
min-height: 100vh;

`;
  const changeColor=()=>{
    if(color=="black"){
      setColor('white');
      setColorback("black")
    }else{
      setColor('black');
      setColorback("white")
    }
    }
  useEffect(()=>{
changeColor();
},[]);


  return (
    <Dataprovider>
    <App style={{color:`${color}`,backgroundColor:`${colorback}`}}>
            <Navbars />
            <LeftSide>
      <i className="fas fa-palette" onClick={changeColor}></i>
      <i className="fas fa-map-signs"></i>
      </LeftSide>
      <Router >
        
      <Routes>

     
      <Route path="/" element={<Home />}/>
      <Route  path="products/:id" element={<DetailedProducts />}/>\
      <Route  path="home" element={<Products />}/>

      </Routes>
      </Router>
      <SecondBottomBar/>
      <BottomBar/>
    </App>
    </Dataprovider>
  );
}

export default App;
