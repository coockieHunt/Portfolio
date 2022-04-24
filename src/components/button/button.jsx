import React, {useCallback} from 'react';
import {useNavigate, useLocation } from 'react-router-dom';
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

    HandelOnClick({ OnClick }){
        if(this.props.disabled){return null}
    }

    render() {
        const {type, theme, OnClick, icon, children, disabled, className} = this.props;

        if(this.TypeIsNotValid(this.props.type)){console.log('🚨 invalid button type: ' + this.props.type); return null}

        let ThemeSet = theme
        if(ThemeSet === undefined){ThemeSet = BUTTON.defultTheme}

        return(
            <Button type={type} className={className} disabled={disabled} theme={ThemeSet} onClick={OnClick}>
                {children} {icon}
            </Button>
        )
    }
}

export function Link(props) {
    let To = props.to
    const navigate = useNavigate();
    const handleOnClick = () => 
        navigate(To, {replace: false});

    let ThemeSet = props.theme
    if(ThemeSet === undefined){ThemeSet = BUTTON.defultTheme}

    return (
      <Button type="button" onClick={handleOnClick} theme={ThemeSet} >
        {props.children} 
      </Button>
    );
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

