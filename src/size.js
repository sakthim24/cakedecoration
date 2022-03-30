
import React, { useState,useEffect } from 'react';
import { Decoration } from './decoration';


export default function Size({maxdecor}) {
      
const namearr = [{name:"Flower",id:0},{name:"Star",id:1},{name:"Diamond",id:2},{name:"Heart",id:3}]
const [currentvalueArr, setcurrentvalueArr] = useState([0,0,0,0]);
const setrange = (maxdecor,curValue) => {
  var temparr = [[], [], [], []];
  let sum = 0;
  curValue.forEach((item) => (sum += Number(item)));
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j <= maxdecor - sum + curValue[i]; j++) {
      temparr[i].push(j);
    }
  }
  return temparr;
};

var [remaining, setremaining] = useState(maxdecor)

const [curValue, setcurValue] = useState([0,0,0,0])
const [DecorArr,  setDecorArr] = useState(setrange(maxdecor,curValue));


const Trii = (e) => {
    curValue[e.target.id] =parseInt(e.target.value);
    setDecorArr(setrange(maxdecor,curValue))
    let sum = 0;

    curValue.forEach((item) => (sum += Number(item)));
  remaining= maxdecor - sum;
  setremaining(remaining)
  let newArr = [...currentvalueArr];
    for (let i = 0; i < currentvalueArr.length; i++) {
      if (e.target.id == i) {
        newArr[i] = parseInt(e.target.value);
      }
     
      setcurrentvalueArr(newArr);
    }
   
}

const setlimit = () => {
  const arr=[0,0,0,0]
  setDecorArr(setrange(maxdecor,arr))
    
}

useEffect(() => {
  setlimit();
  setcurrentvalueArr([0,0,0,0])
  remaining=maxdecor
  setremaining(remaining)
}, [maxdecor]);
  return (
      <div>

        <h3>Maximum Limit {maxdecor} </h3>
      {
      namearr.map(((nam) =>
 <Decoration  key={nam.id} name={nam.name}  DecorArr={DecorArr[nam.id]}  selectid={nam.id} 
  Trii={Trii}  currentvalueArr={currentvalueArr} />
      ))}
        <div>
            <h3>{remaining} reamaining </h3>
        </div>
      </div>
    );
      }
    