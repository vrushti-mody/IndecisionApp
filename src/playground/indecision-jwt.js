let app ={
    title: 'InDecision App',
    subtitle:'Put your life in the hands of a computer!',
    options:[]
}

const onFormSubmit =(e)=>{
    e.preventDefault()
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option)
        e.target.elements.option.value=''
    }
    render()

}

const onMakeDecision =()=>{
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}



const removeAll =()=>{
    app.options =[]
    render()
}

const render = ()=>{
var template = 
    <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle }</p>
    <ol>
    {app.options.map((option)=>{
        return <li key={option}>{option}</li>
    })}
    </ol>
    <form onSubmit={onFormSubmit}> 
        <input type="text" name="option"></input>
        <button type="submit">Add Option</button>
        <button disabled={app.options.length>0? false: true} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All</button>
    </form>
    </div>;

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
}

render()