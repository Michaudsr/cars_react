import React, {Component} from 'react';
import Silverado_1500 from './Silverado_1500.jpg'

class Chevy extends Component {
    render () {
        return (
            <div>
                <h1>Chevy</h1>
                <img src={Silverado_1500} alt='silverado photo'></img>
                <p>Model: Silverado 1500</p>
            </div>
        )
    }
}

export default Chevy;