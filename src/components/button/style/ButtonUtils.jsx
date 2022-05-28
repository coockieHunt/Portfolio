import styled from "styled-components";
import colors from "../../../utils/style/library/color"

// ? Burger
export const BurgerBox = styled.div`
    width: 22px;
    height: 22px;
    position: relative;

    cursor: pointer;

    &.active {
        visibility: hidden;
        & span{
            background-color: white;
            &:before, &:after{visibility: visible;}
            &:before{transform: rotate(-45deg);}
            &:after{transform: rotate(45deg);}
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

        &:after{transform: translateY(6px);}
    }

    &:hover{
        & span:before{transform: ${props => props.className === "active" ?  "" : "translateY(-8px)"};}
        & span:after{transform: ${props => props.className === "active" ? "" : "translateY(8px)"};}
    }
`

// ? Toggle theme swtich
export const ToggleContainerSwitch = styled.div`
    position: relative;
    width: 60px;
    height: 30px;
`

export const Togglelabel = styled.div`
    position: relative;
    content:"";

    &:before{
        content:"";
        position: absolute;

        background-color:#5843e4;

        display: block;
        width: 100%;
        height: 30px;
        border-radius: 30px;
    }


    &:after{
        content:"";
        position: absolute;
        top: 5px;
        left: 5px;

        background-color: white;

        display: block;
        width: 20px;
        height: 20px;
        border-radius: 15px;
        transition: transform 0.5s, background-color 0.5s;
    }

    a:after{
        background-color: ${colors.primary};
    }


    &.active:before{
        background-color: #202020;
    }

    &.active:after{
        transform: translate(30px);
    }
`

export const ToggleContainerSvg = styled.div`
    position: relative;
    width: 25px;
    height: 25px;
`

export const ToggleSvg = styled.div`
    width: 25px;
    height: 25px;

    opacity: 100%;
    border-radius: 50%;

    & svg{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 70%;

        transition: 0.4s opacity;
    }

    & .hide{
        opacity: 0%;
    }


`
