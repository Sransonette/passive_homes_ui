import React, { Component } from 'react'
import TempDown from '../components/tempDown'
import TempUp from '../components/tempUp'

class Temp extends Component{

    state = {
        temp: "75"

    }


    render() {
        return (
            <div className={"currentTemp"}>
                <TempUp temp={this.state.temp}/>
                Current Temperature<br/>
                {this.state.temp}
                <TempDown temp={this.state.temp}/>
            </div>
        )
    }

    







}

export default Temp; 