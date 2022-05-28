import styled from "styled-components";

// Section
export const Section = styled.section `
    width: 100%;
    margin: ${props => props.overflow && "30px 0"};
    padding: ${props => props.overflow ? "20px 10px" : "20px 10px"};


    & div{
        margin: ${props => props.overflow && " -30px 0"};
    }

`