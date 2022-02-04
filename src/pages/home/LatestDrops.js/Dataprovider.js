import React,{createContext,useState} from 'react'
import nsx from './images/nsx.jpg'
import nsx1 from './images/nsx1.jpg'
import bmw from './images/bmw.jpg'
import bmw1 from './images/bmw1.jpg'
import nismo from './images/nismo.jpg'
import nismo1 from './images/nismo1.jpg'
import supra from './images/supra.jpg'
import supra1 from './images/supra1.webp'

export const DataContext= createContext();

export const Dataprovider = (props)=>{
    const[products,setProducts]=useState([



    {
        id:'1',
images:[
    nismo,
    nismo1,
    supra,
],
mark:'nissan',
years:'1990-2000',
country:'Japan',
hp:'350',
model:'r34',
price:'54.000',
describe:
'The Nissan Skyline GT-R is a sports car based on the Nissan Skyline range. The first cars named "Skyline GT-R were produced between 1969 and 1972'
},
{
    id:'2',
    images:[
        bmw,
        bmw1,
        nsx,
    ],
    mark:'bmw',
    years:'1990-2000',
    country:'Germany',
    hp:'360',
    model:'r46 m3',
    price:'25.070',
    describe:
    'The BMW E46 is the fourth generation of the BMW 3 Series range of compact executive cars, which was produced by the German automaker BMW from 1997 to 2006,'
    },
    {
        id:'3',
        images:[
            supra,
            supra1,
            nsx,
        ],
        mark:'Toyota',
        years:'1990-2000',
        country:'Japan',
        hp:'370',
        model:'supra',
        price:'72.340',
        describe:
        'Toyota Supra ; Overview ; Manufacturer, Toyota ; Also called. Toyota Celica XX (Japan, 1978–1986); Toyota Celica Supra (international, 1978–1986)'
        },
        {
            id:'4',
            images:[
                nsx,
                nsx1,
                bmw,
            ],
            mark:'Honda',
            years:'1990-2000',
            country:'Japan',
            hp:'350',
            model:'Nsx',
            price:'69.422',
            describe:
            'Toyota Supra ; Overview ; Manufacturer, Toyota ; Also called. Toyota Celica XX (Japan, 1978–1986); Toyota Celica Supra (international, 1978–1986)The Honda NSX, marketed in North America as the Acura NSX, is a two-seat, mid-engine coupe sports car manufactured by Honda. The origins of the NSX trace back to 1984, with the HP-X (Honda Pininfarina eXperimental) concept, which was a mid-engine 3.0 L V6 engine rear wheel drive sports car'
            },



])
return(
    <DataContext.Provider value={[products, setProducts]}>
        {props.children}
    </DataContext.Provider>
)
}