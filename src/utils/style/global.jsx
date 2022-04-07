import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";
import colors from './library/color';


export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    ul, li{
        list-style: none;
    }

    .active {
        border-radius: 20px;
        box-shadow:inset 0px 0px 0px 3px ${colors.primary};
        background-color: ${colors.primary};
        color: ${colors.white} !important;
    }
`

export const MainContainer = styled.div`
    width: 90%;
    height: 100vh;
    margin: auto;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
`
