import './App.css';
import 'react-dropdown/style.css';
import React, { useState } from 'react';
import Size from './size';

function Cake() {
  const data = {"data":[
    {"cakeName":"Cheese Cakes","cakes":[{"cakeName":"Japanese Cotton Cheesecake","cakeId":2742},{"cakeName":"New york cheesecake","cakeId":2746},{"cakeName":"Redvelvet Cheesecake","cakeId":2750},{"cakeName":"Ricatto Cheesecake","cakeId":2754},{"cakeName":"Strawberry Cheesecake","cakeId":2758}]},
    {"cakeName":"Cup Cakes","cakes":[{"cakeName":"Carrot cupcake","cakeId":2742},{"cakeName":"Chocolate hazzlenut","cakeId":2746}]},
    {"cakeName":"Glutten Free Cakes","cakes":[{"cakeName":"Glutten Free Blackforest cake","cakeId":2742},{"cakeName":"Glutten Free Bannanana walnut cake","cakeId":2746}]},
    {"cakeName":"Muffins","cakes":[{"cakeName":"Blueberry puffin","cakeId":2742},{"cakeName":"Chocolate chip puffin","cakeId":2746}]},
    {"cakeName":"puddings","cakes":[{"cakeName":"Banana pudding","cakeId":2742},{"cakeName":"Caramel Flan","cakeId":2746}]}, 
    {"cakeName":"Traditional cakes","cakes":[{"cakeName":"RumFruit cake","cakeId":2742}]},
    {"cakeName":"Wedding cakes","cakes":[{"cakeName":"Two layered cake","cakeId":2742},{"cakeName":"Three layered cake","cakeId":2746},{"cakeName":"Four layered cake","cakeId":2750}]}
  ]}
  
var [maxdecor, setmaxdecor] = useState(13)

 
  return (
    <div>
    <select>
    <option selected disabled>Select...</option>
    {
      data.data.map(({cakeName, cakes}, key) => (
        <optgroup label={cakeName} key={key}>
          {
            cakes.map(({cakeId, cakeName}) => (
              <option key={cakeId}>
                {cakeName}
              </option>
            ))
          }
        </optgroup>
      ))
    }
  </select>
  <div >
  <input type="radio" value={6} name="radiovalues" onChange={(e)=>setmaxdecor(e.target.value)}/>6 inch
  <input type="radio" value={9} name="radiovalues" onChange={(e)=>{maxdecor=e.target.value; setmaxdecor(maxdecor)}}/>8 inch
  <input type="radio" value={13} name="radiovalues" onChange={(e)=>setmaxdecor(e.target.value)}/>9 inch
  <input type="radio" value={16} name="radiovalues" onChange={(e)=>setmaxdecor(e.target.value)}/>10 inch
  <input type="radio" value={35} name="radiovalues" onChange={(e)=>setmaxdecor(e.target.value)}/>18x32 inch
        </div>
  <Size maxdecor={maxdecor}/>
  </div>
  );
}

export default Cake;
