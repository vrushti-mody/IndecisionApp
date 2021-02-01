class VisibilityToggle extends React.Component{
    constructor(props){
        super(props)
        this.visibility = this.visibility.bind(this)
        this.state ={
            visible: false
        }
    }
    visibility(){
        this.setState((prevState)=>{
            return{
                visible: !prevState.visible
            }  
        })
    }
    render(){
        return(
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.visibility}>{this.state.visible? 'Hide Details': 'Show Details'}</button>
            {
                this.state.visible && (
                    <div>
                        <p>Secret Message</p>
                    </div>
                )
            }
        </div>
        )
    }

}
var appRoot = document.getElementById("app");

ReactDOM.render(<VisibilityToggle />, appRoot);