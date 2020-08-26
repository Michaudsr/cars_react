import React, {Component} from 'react';
import model_y from './Model_y.jpeg'

class Tesla extends Component {
    render () {
        return (
            <div>
                <h1>Tesla</h1>
                <img src={model_y} alt='Model Y photo'></img>
                <p>Model: Model Y</p>
            </div>
        )
    }
}

export default Tesla;