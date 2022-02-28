import React, { Component } from 'react';

class EventHandling extends Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((preState) => {
            console.log(preState);
            return {isToggleOn: !preState.isToggleOn};
        })
    }


    // state = {isToggleOn: true};

    // handleClick = () => {
    //     this.setState({
    //         isToggleOn: false
    //     })
    // }

    render() {
        console.log(this.state.isToggleOn)
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default EventHandling;



