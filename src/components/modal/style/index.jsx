import styled from "styled-components";
import colors from "../../../utils/style/library/color";
import { device } from "../../../utils/style/library/size";


export const Box = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 30%;
    border-bottom: 1px solid ${colors.primary_a};
    border-radius: 10px;

    @media ${device.laptop} { 
        width: 80%;
    }

`

export const Title = styled.div`
    border-bottom: 1px solid ${colors.primary_a};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

`

export const Content = styled.div`
    padding: 15px;
`

export const Close = styled.div`
    cursor: pointer;
    width: 22px;
    height: 22px;

    position: relative;

    /* cross */
    &:hover{
            opacity: 75%;
    }

    & span{
        &::after, &::before{
            content: '';
            position: absolute;
            top: 50%;
            width: 22px;
            height: 2px;
            background-color: black;
        }

        &::after{transform: rotate(-45deg);}
        &::before{transform: rotate(45deg);}


    }
`

export const Background = styled.div`
    position: absolute;

    top: 0;
    left: 0;

    background-color: rgba(1,1,1, 0.75);
    width: 100vw;
    height: 100vh;
`