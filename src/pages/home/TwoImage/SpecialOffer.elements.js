import styled from "styled-components";

export const Row1 =styled.div`
display:flex;
width: 90%;
justify-content: space-between;
padding: 60px 0;
@media screen and (max-width:650px){
    flex-direction: column;
    width: 100%;
}

`;
export const Cols =styled.div`
text-align: center;
display: flex;
align-items: center;
justify-content: flex-end;
cursor: pointer;
flex-direction: column;
max-width: 49%;
width: 100%;
height: 300px;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
margin-top: 20px;

transition: all 0.8s;
:hover{
    transform:scale(1.2);
}
@media screen and (max-width:650px){
    max-width: 100%;
    min-height: 200px;
    height: auto;
}

h5{
    color: white;
    display: flex;

    nav{
        color: green;
    }
}
h3{
    text-transform:uppercase;
    color: black;
    font-weight: 600;
}
img{
    width: 100%;
    height: 100%;
}
`;