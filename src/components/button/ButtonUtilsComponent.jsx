import React, {useContext} from 'react'
import {BurgerBox, Togglelabel, ToggleContainer} from './style/ButtonUtils'
import {ThemeContext} from '../../context/ThemeContext';

export function Burger(props){
    return (
        <BurgerBox 
            onClick={() => {props.OnClick()}}
            className={props.ActiveNav ? "active" : null}>
            <span className='backgroundInvert'></span>
        </BurgerBox>
    )
}

export function TogglerDarkMode(props){
    const {toggleTheme, theme} = useContext(ThemeContext)

    let styleClass ="";
    if(theme){styleClass = ''}else{styleClass = "active"}

    return (
        <ToggleContainer>
            <Togglelabel onClick={toggleTheme} className={styleClass} ></Togglelabel>
        </ToggleContainer>
    )
}


