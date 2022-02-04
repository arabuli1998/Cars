import styled from "styled-components";

//  ********************* BottomBar ********************//
export const Main=styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top:100px;
`;
//  ********************* first Line of BottomBar ********************//

export const FirstLine=styled.div`
width: 90%;
padding: 20px 0;
border-bottom: 1px solid gray;
display: flex;
flex-wrap: wrap;

@media screen and (max-width:1150px){
    width: 100%;
}

nav{
    border-right: 1px solid gray;
   flex:1 2 150px;
   padding: 0 20px;
   @media screen and (max-width:450px){
    padding: 0px 0;
}
   p{
       font-size: 13px;
   }
    
}
div{
    flex:1 2 250px;
    padding:0 20px;
    display: flex;
    justify-content:flex-end;
    @media screen and (max-width:450px){
    padding: 0px 0;
}

    form{
        left:0;
        display: flex;
        align-items:center;
        justify-content:space-between;
        max-width:300px;
        width: 100%;
        flex-wrap:wrap; 
         @media screen and (max-width:450px){
    justify-content:center;
}
        input{
            padding: 10px 0px;
            outline:none;
            max-width:190px;
            width: 100%;
            flex: 1 2 100px;
        }
        button{
            background-color:orangered;
            color: white;
            font-weight:600;
            padding: 10px 15px;
            border-color: orangered;
            outline:none;
            max-width:80px;
           display:flex;
           justify-content:center;
            flex: 1 2 70px;
            :hover{
              background-color:white ;
              color:black
            }
        }
        }
    }
    
}
`;

//  ********************* second Line of BottomBar ********************//
export const SecondLine=styled.div`
width: 90%;
padding: 100px 0;
display: flex;
justify-content:space-between;
@media screen and (max-width:1150px){
    width: 100%;
}
@media screen and (max-width:650px){
    flex-direction:column;
}
`;

export const FirstDiv=styled.div`
flex: 1 2 200px;
padding: 0 20px;
@media screen and (max-width:450px){
    padding: 0px 0px;
    text-align:center;
}

h1{
    display: flex;
    color: red;
    nav{
        color: orangered;
    }
    @media screen and (max-width:450px){
justify-content:center;
}
};
ul{
    margin-top:50px;
    display: flex;
    justify-content:space-between;
    list-style:none;
    padding: 0;
    i{
    font-size:1.5rem;
    cursor:pointer;
    :hover{
        color: orangered;
    }
    }
}
p{
    margin-top:50px;
}
`;
export const SecondDiv=styled.div`
flex: 2 2 200px;
background-color:red ;
padding: 0 20px;
display: flex;
justify-content:space-between;


div{
    width: 100%;
    background-color:red ;
}
`;