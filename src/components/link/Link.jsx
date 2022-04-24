import React, {useCallback} from 'react';
import {useNavigate, useLocation } from 'react-router-dom';
import * as Nav from './style';


/**
 * * Create link
 * 
 * @param to go to uri or external link
 * @param accentuated add style outline boxes link 
 * @param children text dysplay
 */
 export class NavLink extends React.Component{
    render() {
        const {to, accentuated, children} = this.props;

        let className;
        if(accentuated){className = 'accentuated'}
        
        return(
            <Nav.Link
                to={to}
                className = {className}
            >
            {children}
            </Nav.Link>
        )
    }
}


/**
 * * Create link
 * 
 * @param src uri on image or svg
 * @param alt description of image
 * @param to url on click 
 */
export function Img(props) {
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


