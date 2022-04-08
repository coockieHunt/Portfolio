import styled from "styled-components";
import colors from "../../library/color";
import { device } from "../../library/size";


export const ContactContainer = styled.div `
    display: flex;
    height: 720px;
`;

export const ContactFormulaire =  styled.div`
    padding: 15px;
    width : 50%;
    @media ${device.laptop} { 
        width : 100%;
    }

    h1{
        color: ${colors.primary};
    }
`;

export const ContactSide= styled.div`
    background-color: green;
    width : 50%;

    @media ${device.laptop} { 
        display: none;
    }
`;

