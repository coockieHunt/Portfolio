import styled from "styled-components";
import colors from "../../library/color";
import shadow from "../../library/shadow";
import { device } from "../../library/size";


export const Container = styled.div `
    display: flex;
    height: 720px;
    weight: 50%;

    @media ${device.laptop} { 
        width : 100%;
        margin: auto;
    }
    box-shadow: ${shadow.fence};
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

    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    width: 700px;

    background-color: ${colors.primary};
    color: ${colors.white};
    box-shadow: ${shadow.fence};
   
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
`;

export const Other= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    flex-grow: 4;
`;

export const OtherOption= styled.div`
    display: flex;
    color: ${colors.white};
    & svg{
        font-size: 50px;
        color: ${colors.secondary};
        vertical-align: middle;
    }
`;



