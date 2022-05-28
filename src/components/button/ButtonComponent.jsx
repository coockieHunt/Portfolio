import React from "react";
import {useNavigate } from 'react-router-dom';
import {Button, Cp, Img} from './style'
import { BUTTON } from "../../config"
import { HiOutlineClipboardCopy } from 'react-icons/hi';

/**
 * * CallToAction button
 * 
 * @param Type Type of button submit or button
 * @param theme Color of theme
 * @param icon icon of button <svg>
 * @param disabled if button dissabled
 */
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

    HandelOnClick(){
        if(this.props.disabled){return null}
    }

    render() {
        const {type, theme, onClick, icon, children, disabled, className} = this.props;

        if(this.TypeIsNotValid(this.props.type)){console.log('🚨 invalid button type: ' + this.props.type); return null}

        let ThemeSet = theme
        if(ThemeSet === undefined){ThemeSet = BUTTON.defultTheme}

        return(
            <Button type={type} className={className} disabled={disabled} theme={ThemeSet} onClick={onClick}>
                {children} {icon}
            </Button>
        )
    }
}

/**
 * * create internal link
 * 
 * @param theme Color of theme
 * @param icon icon of button <svg>
 * @param disabled if button dissabled
 */
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
    

    HandelOnClick(){
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


/**
 * * Create nav link img
 * 
 * @param src uri on image or svg
 * @param alt description of image
 * @param to url on click 
 */
 export function NavImg(props) {
  
    return (
        <Img className="accentuatedHover" clahref={props.to} color={props.color}>{props.icon}</Img>
    );
}

