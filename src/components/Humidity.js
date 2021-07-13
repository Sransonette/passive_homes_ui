import React, { Component } from 'react';
import HumidDown from '../components/humidDown';
import HumidUp from '../components/humidUp';

class Humidity extends Component {

    state = {
        hum: "50"
    }

    render() {
        return (
            <div className={"currentHumid"}>
                <HumidUp hum={this.state.hum}/>
                Current Humidity Level<br/>
                {this.state.hum}
                <HumidDown hum={this.state.hum}/>
            </div>
        )
    }
   
}

export default Humidity;
