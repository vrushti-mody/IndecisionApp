import React from 'react'

export default class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state ={
            error: undefined
        }
    }
    onFormSubmit(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
         e.target.elements.option.value = '';
        this.setState(()=>{
            return{error}
        })
    }
    
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error} </p>}
            <form onSubmit={this.onFormSubmit}> 
            <input type="text" name="option"></input>
            <button type="submit">Add Option</button>
        </form>
        </div>
        )
    }
}

