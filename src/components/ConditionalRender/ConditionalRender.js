import React, { Component } from 'react';

class ConditionalRender extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handleLoginClick = this.handleLoginClick.bind(this); 
        this.handleLogoutClick = this.handleLogoutClick.bind(this); 
    }


    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        })
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        const { isLoggedIn } = this.state;
        let button;
        if(isLoggedIn) {
            button = <button onClick={this.handleLogoutClick}>Logout now</button>
        } else {
            button = <button  onClick={this.handleLoginClick}>Login plz</button>
        }

        return (
            <div>

                { button }

            </div>
        );
    }
}

export default ConditionalRender;