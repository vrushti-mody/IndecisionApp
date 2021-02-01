class Counter extends React.Component {
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.reset = this.reset.bind(this);
        this.subtractOne = this.subtractOne.bind(this);
        this.state = {
            count:0
        }
    }
    addOne(){
        this.setState((prevState)=>{
            return{
                count:prevState.count+1
            }
        })
    }
    subtractOne(){
        this.setState((prevState)=>{
            return{
                count:prevState.count-1
            }
        })
    }
    reset(){
        this.setState(()=>{
            return{
                count:0
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.subtractOne}>-1</button>
            </div>

        )
    }
}

var appRoot = document.getElementById("app");

ReactDOM.render(<Counter />, appRoot);

// let count=0
// const addOne=()=>{
//     count++;
// }

// const subtractOne=()=>{
//     count--;
// }

// const reset=()=>{
//     count=0
// }

// var template2 = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={reset}>Reset</button>
//         <button onClick={subtractOne}>-1</button>
//     </div>
// );

// var appRoot = document.getElementById("app");

// ReactDOM.render(template2, appRoot);