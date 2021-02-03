import React from 'react'
import Option from './Option'


const Options = (props)=> {
   
    {
         return (
         <div>
             <div className="widget-header">
        <h3  className="widget-header__title">Your Options</h3>
        <button 
        className="button button--link"
        onClick={props.deleteAll}>Remove All</button>
        </div>

        {props.options.length===0 && <p className="widget-header__message">Please enter an option to start</p>}
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
 