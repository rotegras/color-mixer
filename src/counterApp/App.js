import React, { Component } from 'react';
import Counter from './counter.js';
import PlusButton from './plusbutton.js';
import MinusButton from './minusbutton.js';


class App extends Component {
    constructor(props) {
        super(props);

        this.state={ count: 0 };

    }
    
    render () {
        return (
            <div>
                <Counter count={this.state.count} />
                <PlusButton count={this.state.count} increaseCount={(count) => this.setState({count})} />
                <MinusButton count={this.state.count} decreaseCount={(count) => this.setState({count})}/>
            </div>
        );

    }
}



export default App;
