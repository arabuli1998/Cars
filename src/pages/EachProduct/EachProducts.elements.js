import styled from "styled-components";

export const Main=styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

export const Card=styled.div`
justify-content: space-between;
margin-top: 60px;
width: 90%;
border: 1px solid gray;
padding: 20px 20px;
display: flex;
@media screen and (max-width:750px){
    width: 100%;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
}

`;

export const Img=styled.div`
max-width: 400px;
width: 100%;
height: 550px;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media screen and (max-width:450px){
    max-width: 100%;

}
`;

export const Text=styled.div`
width: 100%;
display: flex;
flex-direction: column;

h2{
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    display: flex;
    width: 100%;
    justify-content: center;
    @media screen and (max-width:450px){
   font-size: 2rem;

}
}
h1{
    display: flex;
    color: orangered;
    width: 100%;
    justify-content: center;
    nav{
        color: green;
    }
}
h5{
    line-height: 40px;
    padding: 0 10px;
}
`;

export const Images=styled.div`
display: flex;
width: 100%;
justify-content: space-between;
img{
    max-width: 100px;
    width: 100%;
    height: 150px;
    @media screen and (max-width:320px){
    width: 30%;
}
}
`;

export const Info =styled.div`
padding:0 20px;
min-height: 550px;
justify-content: space-between;
display: flex;
max-width: 400px;
width: 100%;
flex-direction: column;
@media screen and (max-width:650px){
    width: 100%;
    padding: 20px 0;
}
`;