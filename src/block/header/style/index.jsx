// STYLE FOR Header
import styled from "styled-components";
import colors from "../../../utils/style/library/color";
import { device } from "../../../utils/style/library/size";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    width: 100%;
    height: 50px;

    padding: 5px 20px;

    @media ${device.laptop} { 
        margin-bottom: 15px;
    }
`

export const Left = styled.div`
    display: flex;
    align-items: center;

    & img{
        width:  18px;
    }
`

export const Right = styled.div`
    display: flex;
    align-items: center;
    height: 90%;
    gap: 15px;
`

export const NavElement = styled.div`
    display: flex;

    display: flex;
    gap: 15px;
    padding-left: 10px;
    margin-left: 10px;

    border-left: 1px solid ${colors.primary_a};


    @media ${device.laptop} { 
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-left: 0;
        & a{
            height: 100px;
        }
    }
`


export const Nav = styled.div`
    @media ${device.laptop} { 
        display: block;
        position: absolute;
        top: 50px;
        left: 0;
        margin-left: 0;
        width: 100%;


        z-index: 1000;
    }

`



