import {ThemeContext} from '../../../context/ThemeContext';
import React, {useContext, useEffect} from 'react'


const themeColors = {
    light : {
        primary: '#5843E4',
        primary_a: 'rgba(88, 67, 228, 0.15)',
        primary_filter: 'invert(26%) sepia(83%) saturate(2356%) hue-rotate(239deg) brightness(88%) contrast(104%);',
        secondary: '#7563e9',
        spot: '#760ca4',
        Complementary: '#760ca4',
        white: '#FFFFFF',
        grey: '#737272',
    },

    dark : {
        primary: 'red',
        primary_a: 'rgba(88, 67, 228, 0.15)',
        primary_filter: 'invert(26%) sepia(83%) saturate(2356%) hue-rotate(239deg) brightness(88%) contrast(104%);',
        secondary: '#7563e9',
        spot: '#760ca4',
        Complementary: '#760ca4',
        white: '#FFFFFF',
        grey: '#737272',
    }

}

const ColorsTheme = () =>{
    const {theme} = useContext(ThemeContext)
    console.log(theme)
    return null
}

export default ColorsTheme
  