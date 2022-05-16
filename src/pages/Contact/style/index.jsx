import styled from "styled-components";
import colors from "../../../utils/style/library/color";
import shadow from "../../../utils/style/library/shadow";
import { device } from "../../../utils/style/library/size";


export const Container = styled.div`
    height: 95%;
    width: 90%;
    margin: auto;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Box = styled.div `
    display: flex;
    margin: auto;
    box-shadow: ${shadow.fence};
    border-radius: 2%;

    @media ${device.laptop} { 
        width: 100%;
    }
`;

export const Form =  styled.div`
    padding: 15px;
    width : 100%;
    display: flex;
    flex-direction: column;

    border-radius: 6px 0 0 6px;

    @media ${device.laptop} { 
        width : 100%;
        margin: auto;
    }

    & h1{
        color: ${colors.primary};
        height: 10%;
        text-align: center;
    }
`;

export const Side= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 25px;
    margin: 8px;
    border-radius: 2%;
    width: 700px;

    background-color: ${props => colors.primary};
    box-shadow: ${shadow.fence};

    color: ${colors.white};
   
    @media ${device.laptop} { 
        display: none;
    }
`;

export const Title= styled.h1`
    color: ${colors.white};
    margin: 0 0 30px 0;
`;

export const BaseLine= styled.p`
    font-size: 1em;
    font-weight: lighter;
`;

export const Other= styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-grow: 4;

    margin-top: 30%;
`;

export const Option = styled.div`
    & span{
        line-height: 50px; 
        vertical-align: middle;
        text-align: left;
        padding-left: 20px;
    }

    & svg{
        background-color: ${colors.secondary};

        height: 50px;
        width: 50px;
        padding: 15px;
        float: left;
        border-radius: 50%;
    }
`

export const CTA = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 15px;
`

export const Reset = styled.div`
   font-weight: bold;
   cursor: pointer;
`

