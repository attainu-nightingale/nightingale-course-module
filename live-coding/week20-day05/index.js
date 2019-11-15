import React from "react";
import ReactDOM from "react-dom";


// Componet State 

class Button extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            name: this.props.name + " From state",
            class: this.props.class,
            obj: {
                num1: 1,
                num2: 2
            }
        };
    }
    
    changeMyName () {
        console.log("state before update: ", this.state);
        
        this.setState({
            counter: this.state.counter +1
        }, () => {
            console.log("Updated state: ", this.state);
        });
    }

    render(){
        return <button className={"btn " + this.state.class} onClick={() => this.changeMyName()}>{this.state.name}</button>;
    }
}

class Input extends React.Component{
    
    updateValue = (e) => {
        console.log("value: ", e.target.value);
        this.props.updateValue(e.target.value);
    }
    render(){
        return <input type="text" placeholder={this.props.placeholder} onChange={this.updateValue} value={this.props.value}></input>
    }
}

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
    }

    updateValue = (value) => {
        console.log("value in parent: ", value);
        this.setState({
            value: value
        }, () => {
            console.log("value: ", this.state);
        });
    }

    render(){
        return (
            <div>
                <Input placeholder="number 1" value={this.state.value} updateValue={this.updateValue}/>
                <Input placeholder="number 2" value={this.state.value*2}/>
            </div>
        );
    }
}

ReactDOM.render(<App name="Gopi" email="gopi@gmail.com"/>, document.getElementById("root"));