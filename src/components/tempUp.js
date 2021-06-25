import React, { Component } from 'react'

class TempUp extends Component {

    onClick = () => {
        let tempUp = this.props === + 1
        this.setState({
            temp: tempUp
        })

    }


    render() {
        return (
            <div className={"tempUp"}>
                <button onClick={this.onClick}>TempUp test</button>
            </div>
        )
    }


}

export default TempUp; 