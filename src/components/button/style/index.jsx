import styled from "styled-components";
import colors from "../../../utils/style/library/color";
import { BUTTON } from "../../../config"

export const Button = styled.button`
    padding : 15px;
    margin-top: 15px;
    color: ${colors.white};

    border: none;
    cursor: pointer;
    user-select: none;
    text-transform: uppercase;

    background-color: ${props => BUTTON.theme[props.theme].backgroundColor}; ;
    border-radius: ${props => BUTTON.theme[props.theme].borderRadius}; ;

    &:disabled{
        background-color: ${colors.grey};
        cursor: not-allowed;
    }
    
    &:hover{
        &:disabled{
            background-color: ${colors.grey};
        }
        
        background-color: ${props => BUTTON.theme[props.theme].HoverColor}; ;
    }
`;

export const Cp= styled.div`
    color: ${colors.grey};
    background-color: white;
    line-height: 2.5;
    padding: 0 0 0 15px;
    & span{
        background:#FFF;
        height :100%;
        float: right;
        width: 15%;
        color: white;

        text-align: center;

        background-color : ${colors.spot};

        cursor: pointer;

        &:hover{
            background-color: ${colors.secondary} ;
        }
    }
`;

export const BurgerBox = styled.div`
    width: 50px;
    height: 50px;
    position: relative;

    &.active {
        /* transform-origin: center center; */


        & span{
            background-color: white;

            /* transform: rotate(180deg); */

            &:before &:after{
            }

            &:before{
                transform: rotate(-45deg);
            }
            
            &:after{
                transform: rotate(45deg);
            }


        }
    }

    & span{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);


        display: block;
        width: 22px;
        height: 2px;

        background-color: black;
        transition: background-color 0.4s;
        transition: transform 0.5s;


        &:before, &:after{
            content:"";
            position: absolute;
            top: 0;
            left: 0;

            display: block;
            width: 22px;
            height: 2px;

            background-color: black;

            transform: translateY(-6px);

            transition: transform 0.5s




        }

        &:after{
            transform: translateY(6px);
        }
    }

    &:hover{

        & span:before{
            transform: ${props => props.className === "active" ?  "" : "translateY(-8px)"}; ;

        }

        & span:after{
            transform: ${props => props.className === "active" ? "" : "translateY(8px)"}; ;
        }
    }
`



