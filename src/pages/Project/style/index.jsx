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
  --auto-grid-min-size: 16rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 2fr));
    grid-gap: 1rem;
    
    width : 95%;
    margin: 15px auto 0 auto;
`