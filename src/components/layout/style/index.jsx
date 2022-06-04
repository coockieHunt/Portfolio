import styled from "styled-components";

export const SplitLayout = styled.div`
    display: flex;
    background-color: ${props => props.bg};
    & div{

        & > .content{
            padding: 15px;
        }
    }
`

export const SplitLayoutLeft = styled.div`
    width: ${props => props.leftWidth ? props.leftWidth : null};
`

export const SplitLayoutRight = styled.div`
    width: ${props => props.rightWidth? props.rightWidth : null};
`