import React from 'react';

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            showDiv: false 
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            showDiv: !state.showDiv
        }));
        console.log(this.state.showDiv)
    }

    render() {
        return (
            <div>
                {this.state.showDiv && <h1>Hello, it's my conditional rendered</h1>}
                <button onClick={this.handleClick}>
                    {this.state.showDiv ? 'Show' : 'Hide'} Title
                </button>
            </div>

        );
    }
}
