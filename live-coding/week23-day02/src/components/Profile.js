import React from 'react';

class Profile extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      name: ""
    }
  }

  componentDidMount(){
    let name = JSON.parse(localStorage.getItem("user")).name;

    this.setState({
      name: name
    })
  }

  render(){
    return (
      <div>
        <h2 className="text-danger">Your Profile</h2>
        <hr/>
        You have logged in as <strong>{this.state.name}</strong>
      </div>
    )
  }
}

export default Profile;