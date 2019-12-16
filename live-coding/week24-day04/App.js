import React from 'react';


class App extends React.Component{
  
  constructor(props){
    super(props);
    this.firstName = null;
    this.lastName = null;
    this.email = null;
  }

  componentDidMount(){
    console.log("ref: ", this.myRef);
  }

  onClick = () => {
    this.myRef.focus();
  }

  onKeyUp = (inputElement, event) => {
    console.log("event: ", event.keyCode);
    if(event.keyCode == 13){
      switch(inputElement){
        case "firstName": 
          this.lastName.focus();
          break;
        case "lastName": 
          this.email.focus();
          break;
        default: 
          this.firstName.focus();
      }
    }
  }

  render(){
    return (
      <div>
        <div>
          <div>
            <InputComponet firstNameRef={(element) => {this.firstName = element}} onKeyUp={this.onKeyUp}/>
            {/* <input type="text" placeholder="firstName" ref={(element) => {this.firstName = element}} onKeyUp={this.onKeyUp.bind(this, "firstName")}/> */}
          </div>
          <div>
            <input type="text" placeholder="lastName" ref={(element) => {this.lastName = element}} onKeyUp={this.onKeyUp.bind(this, "lastName")}/>
          </div>
          <div>
            <input type="text" placeholder="email" ref={(element) => {this.email = element}} onKeyUp={this.onKeyUp.bind(this, "email")}/>
          </div>
          <FunComponent />
        </div>
        <button onClick={this.onClick}>Change Background</button>
      </div>
    )
  }
}

const InputComponet = (props) => {
  let onKeyUp = (inputElement, event) => {
    console.log("event: ", event);
    props.onKeyUp(inputElement, event);
  }
  return <input type="text" placeholder="firstName" ref={props.firstNameRef} onKeyUp={onKeyUp.bind(this, "firstName")}/>
}

class FunComponent extends React.Component {

  onClick(){
    console.log("on click of fun component");
  }

  render(){
    return <div> Functional Component </div>
  }
}

export default App;
