import styled from "styled-components";
import colors from "../../../utils/style/library/color";
import shadow from "../../../utils/style/library/shadow";
import { device } from "../../../utils/style/library/size";


export const Container = styled.div `
    display: flex;
    weight: 50%;
    margin:  0 auto 0 auto;
    box-shadow: ${shadow.fence};

    @media ${device.laptop} { 
        width : 90%;
        margin: auto;
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
    flex-direction: column;
    gap: 80px;
    flex-grow: 4;

    margin-top: 30%;

`;


