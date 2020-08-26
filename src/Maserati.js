import React, {Component} from 'react';
import granturismo from './granturismo_sport.jpg'

class Maserati extends Component {
    render () {
        return (
            <div>
                <h1>Maserati</h1>
                <img src={granturismo} alt='maserati photo'></img>
                <p>Model: grandturismo</p>
            </div>
        )
    }
}

export default Maserati;