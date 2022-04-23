import React from 'react';
import {Button, Cp} from './style'
import { BUTTON } from "../../config"
import { HiOutlineClipboardCopy } from 'react-icons/hi';


export class CTA extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        };

        this.HandelOnClick = this.HandelOnClick.bind(this);
    }

    TypeIsNotValid(type){
        let rslt = true;
        BUTTON["type"].map(key => {
            if(key === type){rslt = false}
	    return null
        });

        return rslt
    }

    HandelOnClick(func){
        if(this.props.disabled){return null}
    }

    render() {
        const {type, theme, OnClick, icon, children, disabled} = this.props;

        if(this.TypeIsNotValid(this.props.type)){console.log('🚨 invalid button type: ' + this.props.type); return null}

        let ThemeSet = theme
        if(ThemeSet === undefined){ThemeSet = BUTTON.defultTheme}

        return(
            <Button type={type} disabled={disabled} theme={ThemeSet} onClick={this.HandelOnClick(OnClick)}>
                {children} {icon}
            </Button>
        )
    }
}

export class CP extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        };

        this.HandelOnClick = this.HandelOnClick.bind(this);
    }
    

    HandelOnClick(func){
        if(this.props.disabled){return null}


        let text  = this.props.children
        if ('clipboard' in navigator) {
            return navigator.clipboard.writeText(text);
          } else {
            return document.execCommand('copy', true, text);
          }
    }

    render(){
        const {children, disabled} = this.props;

        return(
            <Cp>{children} <span disabled={disabled} onClick={this.HandelOnClick}><HiOutlineClipboardCopy/></span></Cp>
        )
    }
}

