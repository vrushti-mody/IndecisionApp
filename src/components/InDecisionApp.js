import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'
import Modal from './Modal'

export default class IndecisionApp extends React.Component {
    state={
        options:[],
        selectedOption:undefined
    }

    deleteAll=()=>{
        this.setState(()=>{
            return{
                options: []
            }
        })
    }
    handlePick=()=>{
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(()=>{
            return{
                selectedOption: option
            }
        })
    }
    handleAddOption=(option)=>{
        if(!option){
            return 'Please enter a valid option'
        }
        else if (this.state.options.indexOf(option)>-1){
            return 'Cannot enter duplicate option'
        }
        this.setState((prevState)=>{
            return {
                options: prevState.options.concat(option)
            }
        })
    }
    handleDeleteOne=(option)=>{
        this.setState((prevState)=>{
            return{
            options: prevState.options.filter((optionText)=> option!== optionText)
        }
        })
    }

    closeModal =()=>{
        this.setState(()=>{
            return{
            selectedOption: undefined
        }
        })
    }
    render(){
        
        return (
            <div>
            <Header/>
            <Action 
            hasOptions = {this.state.options.length>0}
            handlePick={this.handlePick}/>
            <Options 
            options={this.state.options}
            deleteAll = {this.deleteAll}
            handleDeleteOne = {this.handleDeleteOne}
            />
            <AddOption
            handleAddOption = {this.handleAddOption}/>
            <Modal
            selectedOption={this.state.selectedOption}
            closeModal ={this.closeModal}/>
        </div>
        );
    }

    componentDidMount(){
        try{
        const json = localStorage.getItem('optionsArray');
        const options = JSON.parse(json)
        console.log(options)
        if (options.length>0){
            this.setState(()=> {
                return {
                    options: options
                }
            }) 
    }
}
    catch(e){
    }}

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length!== this.state.options.length){
            const json =JSON.stringify(this.state.options);
            console.log(json)
            localStorage.setItem('optionsArray',json)
        }
    }

}
