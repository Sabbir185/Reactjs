import React, { Component } from 'react';

class FormController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            library: 'Vuejs',
            isAwesome: true
        }
    }

    handleOnChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked
            });
        }
        else {
            console.log('Nothing happened!')
        }
    }

    handleForm = (e) => {
        e.preventDefault();

        const { title: input, text, library, isAwesome } = this.state;

        console.log(input, text, library, isAwesome)
    }


    render() {
        const { title: input, text, library, isAwesome } = this.state;

        return (
            <div>

                <form onSubmit={this.handleForm}>
                    <input type="text" placeholder='Enter title' value={input} onChange={this.handleOnChange} />
                    <br />
                    <br />
                    <textarea value={text} onChange={this.handleOnChange} cols="15" rows="5"></textarea>
                    <br />
                    <br />
                    <select value={library} onChange={this.handleOnChange}>
                        <option value="Reactjs">Reactjs</option>
                        <option value="Vuejs">Vuejs</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" value={isAwesome} onChange={this.handleOnChange} />

                    <input type="submit" value="Submit" />
                </form>


                <h1> {input} </h1>

            </div>
        );
    }
}

export default FormController;