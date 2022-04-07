import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  ul, li{
    list-style: none;
  }
`

export const MainContainer = styled.div`
    width: 90%;
    height: 100vh;
    margin: auto;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
`
