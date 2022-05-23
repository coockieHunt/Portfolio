import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";
import Roboto from '../font/roboto/Roboto-Regular.ttf';
import colors from '../style/library/color'

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

    h1{
        color: ${colors.primary}
    }

    p{
        font-weight: 200;
    }

    body[data-theme='light']{
        transition: all 0.5s;
        background-color: white ;

        color: black;

        & .background{
            transition: all 0.5s;
            background-color: white;
        }

        & input, & textarea{
            transition: all 0.5s;
            background-color: white;
        }

        & .contrasting{
            color: #cecece;

            &:hover{
                color: #a8a8a8;
            }
        }
    }


    body[data-theme='dark']{
        transition: all 0.5s;
        background-color:  #121212  ;

        color: white;

        & .background{
            transition: all 0.5s;
            background-color: #202020;
        }

        & .backgroundInvert, & .backgroundInvert:after, & .backgroundInvert:before{
            background-color: white;
        }

        & input, & textarea{
            transition: all 0.5s;
            background-color: #303134;
            color: white;
        }


        & input:focus, & textarea:focus{
            color: white;
        }

        & .contrasting{
            color: #303134;

            &:hover{
                color: #45464a;
            }
        }
    }

    /* scroolbar */
    * {
        scrollbar-width: thin;
        scrollbar-color: #202020;
    }

    *::-webkit-scrollbar {
        width: 8px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #5943e4;
        border-radius: 5px;
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