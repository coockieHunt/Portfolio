import styled from "styled-components";
import { device } from "../../../utils/style/library/size";
import shadow from "../../../utils/style/library/shadow";
import colors from "../../../utils/style/library/color";


export const Container = styled.div`
    width: 100%;
    box-shadow: ${shadow.fence};
    border-radius: 15px;

    display: flex;
    flex-direction: column;

    &:hover{
        border: 1px solid ${colors.primary};

    }
    & p {
        padding: 10px;
    }
`

export const Header = styled.div`
    width: 100%;
    padding: 10px;

    & h2{
        float: left;
    }

    & span{
        float: right;
    }
`


export const Fotter = styled.div`
    width: 100%;
    padding: 5px 0;
    padding: 10px;


    display: flex;
    justify-content: space-between;
`