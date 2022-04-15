import React from 'react';
import { AlertCompement } from '../utils/style/components/alert';
import { ALERT } from "../config"

export class Alert extends React.Component{
    constructor(props){
        super(props)

        this.TypeIsNotValid = this.TypeIsNotValid.bind(this);
    }

    TypeIsNotValid(type){
        let rslt = true;
        Object.keys(ALERT).map(key => {
            if(key === type){rslt = false}
	    return null
        });

        return rslt

    }

    render() {
        const {children, type} = this.props;

        if(this.TypeIsNotValid(this.props.type)){console.log('🚨 invalid alert type: ' + this.props.type); return null}
       
        return(
            <AlertCompement type={type}>
                {ALERT[type].icon}  <span>{children}</span>
            </AlertCompement>
        )
    }
}
