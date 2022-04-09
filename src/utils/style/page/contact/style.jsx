import styled from "styled-components";
import colors from "../../library/color";
import { device } from "../../library/size";


export const ContactContainer = styled.div `
    display: flex;
    height: 720px;
`;

export const ContactFormulaire =  styled.div`
    padding: 15px;
    width : 40%;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    border-radius: 6px;

    @media ${device.laptop} { 
        width : 100%;
    }

    h1{
        color: ${colors.primary};
        height: 10%;
        text-align: center;
    }
`;

export const ContactSide= styled.div`
    width : 60%;
    padding: 15px;

    @media ${device.laptop} { 
        display: none;
    }
`;

export const ContactTitle= styled.h1`
    color: ${colors.primary}
`;

export const ContactContent= styled.p`
    text-align: justify;
`;


