import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";

import Roboto from '../font/roboto/Roboto-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto}) format('Roboto');
        font-weight: 300;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', Helvetica, sans-serif;

    }

    ul, li{
        list-style: none;
    }

    
    .middel {
        vertical-align: middle;
    }

    .NoMargin{
        margin: 0 !important;
    }
`
/*
    ? main constainer
*/
export const MainContainerStyle = styled.div`
    margin: auto;
    display:flex;
    justify-content: space-between;
    flex-direction: column;

    height: 93vh;
`