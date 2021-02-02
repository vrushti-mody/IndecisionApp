import React from 'react'
import Option from './Option'


const Options = (props)=> {
   
    {
         return (
         <div>
         <button onClick={props.deleteAll}>RemoveAll</button>
         {props.options.map((option)=>{
             return <Option key={option} optionText={option}
             handleDeleteOne = {props.handleDeleteOne}
             ></Option>;
         })}
        
         </div>
         )
     }
 }

 export default Options