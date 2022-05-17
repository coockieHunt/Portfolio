import styled from "styled-components";
import colors from "../../../utils/style/library/color";

export const Container = styled.div`
    position: fixed;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 10px 15px;
    border-radius: 10px;
    font-weight: bold;

    background-color: ${props => props.color !== undefined ? props.color : colors.primary}; ;
    text-align: center;
`