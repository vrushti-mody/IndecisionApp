class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.deleteAll = this.deleteAll.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOne = this.handleDeleteOne.bind(this);
        this.state={
            options:[]
        }
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
    catch(e)
    {

    }
       
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length!== this.state.options.length){
            const json =JSON.stringify(this.state.options);
            console.log(json)
            localStorage.setItem('optionsArray',json)
        }
    }

    deleteAll(){
        this.setState(()=>{
            return{
                options: []
            }
        })
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }
    handleAddOption(option){
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
    handleDeleteOne(option){
        this.setState((prevState)=>{
            return{
            options: prevState.options.filter((optionText)=> option!== optionText)
        }
        })
    }
    render(){
        
        return (
            <div>
            <Header/>
            <Action 
            hasOptions = {this.state.options>0}
            handlePick={this.handlePick}/>
            <Options 
            options={this.state.options}
            deleteAll = {this.deleteAll}
            handleDeleteOne = {this.handleDeleteOne}
            />
            <AddOption
            handleAddOption = {this.handleAddOption}/>
        </div>
        );
    }
}

const Header= ()=> {
    {
        return (
        <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of a computer!</h2>
        </div>
        )
    }
}

 const Action = (props)=> {
  
    {
        return (
        <div>
        <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
            What should I do?
        </button>
        </div>
        )
    }
}

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

const Option = (props)=>{
    {
        return(
            <div>
               <p > {props.optionText}</p>
               <button 
               onClick={(e)=>{
                props.handleDeleteOne(props.optionText)
               }
            }>Remove</button>
            </div>
        )
    }
}

class AddOption extends React.Component {
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



var appRoot = document.getElementById("app");
ReactDOM.render(<IndecisionApp options={[]}/>, appRoot);


