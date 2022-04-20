import React from 'react';
import * as Text from './style'

export class H1 extends React.Component{
    render() {
        const {children} = this.props;
        
        return(
            <Text.H1>
                {children}
            </Text.H1>
        )
    }
}