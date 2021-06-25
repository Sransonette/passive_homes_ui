import React, { Component } from 'react'

class Temp extends Component{

    state = {
        temp: "75"

    }


    render() {
        return (
            <div className={"currentTemp"}>
                Current Temperature<br/>
                {this.state.temp}
            </div>
        )
    }

    







}

export default Temp; 