import React, {useContext} from 'react'
import {BurgerBox, Togglelabel, ToggleContainerSwitch, ToggleSvg, ToggleContainerSvg} from './style/ButtonUtils'
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

export function TogglerDarkModeSwitch(){
    const {toggleTheme, theme} = useContext(ThemeContext)

    let styleClass ="";
    if(theme){styleClass = ''}else{styleClass = "active"}

    return (
        <ToggleContainerSwitch>
            <Togglelabel onClick={toggleTheme} className={styleClass} ></Togglelabel>
        </ToggleContainerSwitch>
    )
}

export function TogglerDarkModeSvg(){
    const {toggleTheme, theme} = useContext(ThemeContext)

    let styleClass = {
        sun : '',
        mon: ''
    };
    if(theme){//light
        styleClass.sun = 'hide';
        styleClass.mon = '';
    }else{//dark
        styleClass.sun = '';
        styleClass.mon = 'hide';
    }

    return (
        <ToggleContainerSvg>
            <ToggleSvg onClick={toggleTheme} className="accentuatedHover">
            <svg
                className={styleClass.sun}
                width="100%" 
                height="100%" 
                viewBox="0 0 30 30" 
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0154 3.9617C16.0154 4.49237 15.5852 4.9226 15.0545 4.9226C14.5238 4.9226 14.0937 4.49231 14.0937 3.96164V0.960906C14.0937 0.430231 14.5238 0 15.0545 0C15.5852 0 16.0154 0.430231 16.0154 0.960906V3.9617ZM6.40618 15.0545C6.40618 10.2859 10.2859 6.40618 15.0545 6.40618C19.8232 6.40618 23.7029 10.2859 23.7029 15.0545C23.7029 19.8232 19.8232 23.7029 15.0545 23.7029C10.2859 23.7029 6.40618 19.8232 6.40618 15.0545ZM15.0545 25.1865C14.5238 25.1865 14.0937 25.6167 14.0937 26.1474V29.1482C14.0937 29.6788 14.5238 30.109 15.0545 30.109C15.5852 30.109 16.0154 29.6788 16.0154 29.1482V26.1474C16.0154 25.6167 15.5852 25.1865 15.0545 25.1865ZM7.89015 7.89015C7.51484 8.2654 6.90637 8.2654 6.53121 7.89015L4.40933 5.76836C4.03409 5.39306 4.03409 4.78458 4.40933 4.40939C4.78464 4.03415 5.39311 4.03415 5.7683 4.40939L7.89015 6.53121C8.2654 6.9065 8.2654 7.51497 7.89015 7.89015ZM23.5779 22.2189C23.2027 21.8437 22.5943 21.8438 22.2189 22.2189C21.8437 22.5941 21.8437 23.2026 22.2189 23.5779L24.3407 25.6997C24.7159 26.0751 25.3244 26.0751 25.6997 25.6997C26.075 25.3246 26.075 24.7161 25.6997 24.3408L23.5779 22.2189ZM3.9617 14.0937C4.49237 14.0937 4.9226 14.5238 4.9226 15.0545C4.9226 15.5852 4.49231 16.0154 3.96164 16.0154H0.960905C0.430231 16.0154 0 15.5852 0 15.0545C0 14.5238 0.430231 14.0937 0.960905 14.0937H3.9617ZM29.1482 14.0937H26.1475C25.6167 14.0937 25.1866 14.5238 25.1866 15.0545C25.1866 15.5852 25.6167 16.0154 26.1475 16.0154H29.1482C29.6789 16.0154 30.1091 15.5852 30.1091 15.0545C30.1091 14.5238 29.6789 14.0937 29.1482 14.0937ZM4.40939 24.3408L6.53121 22.2189C6.90644 21.8436 7.5149 21.8436 7.89015 22.2189C8.2654 22.5943 8.2654 23.2027 7.89015 23.5779L5.76836 25.6997C5.39305 26.0751 4.78458 26.0751 4.40939 25.6997C4.03415 25.3244 4.03415 24.7161 4.40939 24.3408ZM23.5779 7.89015L25.6997 5.7683C26.075 5.39306 26.075 4.78464 25.6997 4.40933C25.3245 4.03409 24.716 4.03409 24.3407 4.40933L22.2189 6.53121C21.8437 6.90644 21.8437 7.51484 22.2189 7.89015C22.5942 8.2654 23.2027 8.26547 23.5779 7.89015Z" fill="#45464a"/>
            </svg>

            <svg 
                className={styleClass.mon}
                width="100%" 
                height="100%" 
                viewBox="0 0 30 30" 
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.1531 14.2265C28.6927 14.0557 28.1713 14.1922 27.8571 14.5731C26.0948 16.7223 23.4949 17.9565 20.7193 17.9565C15.6305 17.9565 11.4941 13.8171 11.4941 8.73033C11.4941 6.16975 12.526 3.7859 14.4033 2.01961C14.7626 1.67891 14.8657 1.1507 14.6625 0.701028C14.4592 0.253319 13.9929 -0.0215898 13.5 0.0294648C5.80255 0.776628 0 7.17809 0 14.9177C0 23.167 6.71171 29.8787 14.9609 29.8787C23.113 29.8787 29.6774 23.491 29.9032 15.336C29.917 14.8431 29.6156 14.3974 29.1531 14.2265Z" fill="#b0a8a8"/>
            </svg>

            </ToggleSvg>
        </ToggleContainerSvg>
    )
}


