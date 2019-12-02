import React from 'react';
import { GoogleLogin } from 'react-google-login';


class Login extends React.Component{

  googleCallback = (response) => {
    console.log("response: ", response);

    let user = {
      accessToken: response.accessToken,
      name: response.profileObj.name
    };

    localStorage.setItem("user", JSON.stringify(user));

    this.props.history.push("/app/trending");
  }
  
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h2 className="text-danger"> Login using your google account </h2>
            <hr/>
            <GoogleLogin
            clientId="404236263522-edq7umek3duikp8pup7dma1e6ceg24qm.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.googleCallback}
            onFailure={this.googleCallback}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;