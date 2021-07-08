import React, { Component } from 'react';

class Humidity extends Component {

    state = {
        hum : "50"
    }



    render() {
        return (
            <div className={"currentHumid"}>
                Current Humidity Level<br/>
                {this.state.hum}
            </div>
        );
    }
}

export default Humidity;
