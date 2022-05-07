import React from 'react';
import {useNavigate} from 'react-router-dom';
import * as Nav from './style';


/**
 * * Create nav link
 * 
 * @param to go to uri or external link
 * @param accentuated add style outline boxes link 
 * @param children text dysplay
 */
 export class NavLink extends React.Component{
    constructor(props) {
        super(props);
        this.state = {to: null};
    }

    render() {
        const {to, onClick, accentuated, dysplay, icon, external, color} = this.props;

        let className;
        if(accentuated){className = 'accentuated'}
        if(external){
            return(
                <Nav.ExternalLink
                    href={to}
                    className = {className}
                    color={color}
                >
                    {icon} <span>{dysplay}</span> 
                </Nav.ExternalLink>
            )
         
        }else{
            return(
                <Nav.InterLink
                    to={to}
                    className = {className}
                    color={color}
                    onClick={onClick}
                >
                    {icon} <span>{dysplay}</span> 
                </Nav.InterLink>
            )
        }
     
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
    let To = props.to

    const navigate = useNavigate();
    const handleOnClick = function(){
        if(To !== undefined){
            navigate(To, {replace: false});
        }
    }
    return (
        <Nav.Img
            src = {props.src}
            alt = {props.alt}
            onClick={handleOnClick}
            href={props.to}
        >
        </Nav.Img>
    );
}


