import React, {useState} from 'react';
import {Button} from '../utils/style/components/button'

class ButtonConponents extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        };
      }

    render() {
        const {type, children, disabled} = this.props;
        return(
            <Button type={type} disabled={disabled}>
                {children}
            </Button>
        )
    }
}


export default ButtonConponents