import styled from "styled-components";
import { device } from "../../../utils/style/library/size";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media ${device.laptop} { 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const CardContainer = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr; 
    gap: 10px 10px; 
    
    width : 95%;
    margin: 15px auto 0 auto;
`