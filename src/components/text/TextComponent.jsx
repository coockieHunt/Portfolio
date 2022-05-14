import React from 'react';
import * as Text from './style'


export class BackLine extends React.Component{
    render() {
        const {children} = this.props;
        
        return(
            <Text.BackLine>
                {children}
            </Text.BackLine>
        )
    }
}