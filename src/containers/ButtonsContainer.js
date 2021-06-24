import React, { Component } from 'react'
import Temp from '../components/Temperature.js'
import TempDown from '../components/tempDown'
import TempUp from '../components/tempUp'

class ButtonsContainer extends Component { 

    render() {
        return( 
            <div>
            <Temp/>
            <TempDown/>
            <TempUp/>
            </div>
        )
    }

}

export default ButtonsContainer