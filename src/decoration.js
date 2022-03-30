import React from 'react'


export const Decoration = ({name,selectid,DecorArr,Trii,currentvalueArr}) => {

 



  return (
    <div>
    <span>{name}</span>
     
    <select id={selectid}  value={currentvalueArr[selectid]} onChange={(e) => Trii(e)}>
   
            {DecorArr.map((decor, index) => (
                        
                        <option key={index} >{decor}</option>
                    ))}
                
          </select>
</div>
  )
}

