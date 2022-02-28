import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    };

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000)
    };

    componentWillUnmount() {
        clearInterval(this.timerID)
    };

    tick() {
        this.setState({
            date: new Date()
        })
    };

    // should follow this pattern
    count() {
        this.setState((state, props) => ({
            counter: props.cnt + state.counter
        }))
    };

    render() {
        return (
            <div>
                <h1>What time is it?</h1>
                <h2>It is now, {this.state.date.toLocaleTimeString()} O'clock</h2>
                <Link to='/event'>Event Handler</Link>
                <br />
                <Link to='/condition'>Conditional Rendering</Link>
                <br />
                <Link to='/form-c'>Form Controller</Link>
            </div>
        );
    }
};


export default Clock;