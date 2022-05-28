import { createGlobalStyle } from 'styled-components'
import Roboto from '../font/roboto/Roboto-Regular.ttf';
import inter_variable from '../font/inter/Inter-VariableFont_slnt,wght.ttf';
import colors, {theme}from '../style/library/color'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto}) format('Roboto');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'inter_variable';
        src: url(${inter_variable}) format('inter_variable');
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'inter_variable', Helvetica, sans-serif;
    }

    ul, li{
        list-style: none;
    }


    p{
        font-weight: 200;
    }


    li{
        padding-left: 15px;

        &::before{
            content: '#';
            color: ${colors.primary};
            padding-right: 5px;
        }
    }

    //THEME
    body[data-theme='light']{
        transition: all 0.5s;
        background-color: white ;

        color: black;

        & .background{
            transition: all 0.5s;
            background-color: ${theme.light.accentuated};
        }


        & .accentuatedHover:hover{
            background-color: ${theme.light.accentuated};
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
            background-color: ${theme.dark.accentuated};
        }

        & .backgroundInvert, & .backgroundInvert:after, & .backgroundInvert:before{
            background-color: white;
        }

        & .accentuatedHover:hover{
            background-color: ${theme.dark.accentuated};
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
