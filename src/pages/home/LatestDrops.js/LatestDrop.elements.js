import styled from "styled-components";
import back from './images/back.jpg'

export const Main=styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`;

export const Title=styled.div`
margin-bottom: 25px;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
nav{
    max-width: 100px;
    width: 100%;
    height: 2px;
    background-color: orangered;
}
h1{
    font-size: 2rem;
    text-align: center;
}
h5{
    color: orangered;
}
`;
export const Text=styled.div`
margin-bottom: 25px;
display: flex;
justify-content: center;
width: 100%;
p{
    font-size: 0.9rem;
    width: 50%;
    text-align: center;
    @media screen and (max-width:598px){
    padding: 10px 10px;
    width: 100%;
}

}
`;

export const ProductList = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
@media screen and (max-width:1150px){
    width: 100%;
    
}

@media screen and (max-width:850px){
    flex-wrap: wrap;
    justify-content: space-around;
}
`;

export const Cart=styled.div`
box-sizing: border-box;
box-shadow:0px 0px 2px gray;
padding: 10px 10px;
max-width: 280px;
width: 100%;
display: flex;
flex-direction: column;
border-top: 1px solid gray;
margin-bottom: 25px;
transition: all 0.8s;
@media screen and (max-width:598px){
    padding: 5px 5px;
    max-width: 90%;
}
:hover{
    box-shadow:0px 0px 5px green;
    transform:scale(1.06);
   
}
button{
    margin-top: 25px;
    outline: none;
    border: none;
    font-weight: 600;
}
`;
export const Img=styled.div`
width: 100%;
height: 400px;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
align-items: center;
cursor: pointer;
margin-bottom: 25px;
transition: all 0.8s;
@media screen and (max-width:598px){
    height:500px;
}
:hover{
    transform:scale(1.01);
    box-shadow: 0px 0px 5px orangered;
}

`;
export const CartText=styled.div`

width: 100%;

h5{
    text-transform: uppercase;
}
h2{
    display: flex;
    nav{
        color: green;
    }
}
`;


export const Zero=styled.div`
padding: 50px 0px;
width: 100%;
background-image:url(${back});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
height: 75vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;


h1{
    color: orangered;
    font-size: 4rem;
    width: 100%;
    text-align:center;
    @media screen and (max-width:550px){
        font-size:3rem;
    }
}
h5{
    font-size: 3rem;
    color: white;
    text-transform:uppercase;
    width: 100%;
    text-align:center;
    @media screen and (max-width:550px){
        font-size:2rem;
    }
}
p{
    letter-spacing: 5px;
    color: black;
    font-size: 2rem;
    width: 100%;
    text-align:center;
    @media screen and (max-width:550px){
        font-size:1.5rem;
    }
   
}

`;

