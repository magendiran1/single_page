import React, { Component } from 'react'

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.Logout = this.Logout.bind(this);
        this.logIn = this.logIn.bind(this);
        this.state = { isLogged: false };
    }

    Logout() { this.setState({ isLogged: false }) }

    logIn() { this.setState({ isLogged: true }) }

    render() {
        const isLogged = this.state.isLogged
        let button
        if (isLogged) {
            button = <LogoutButton onClick={this.Logout} />
        } else {
            button = <LoginButton onClick={this.logIn} />
        }
        return (
            <div>
                <Greeting isLogged={isLogged} />
                {button}
            </div>
        )
    }

}

function UserGreeting(props) { return <h1>Welcome back!</h1> }

function GuestGreeting(props) { return (<div><h1>Please Sign In</h1> </div>) }

function Greeting(props) {
    const isLogged = props.isLogged
    if (isLogged) { return <UserGreeting /> }
    else { return <GuestGreeting /> }
}

function LoginButton(props) {
    return (        <button onClick={props.onClick}>LogIn</button>    )
}

function LogoutButton(props) {
  return  <button onClick={props.onClick}>Logout</button>
}

export default LoginControl;