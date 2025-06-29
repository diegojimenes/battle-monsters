import styled from "styled-components";

export const container = styled.div`
    font-family: "Pixelify Sans", sans-serif;
    background-color: #D8BA7E;
    border: 2px solid #663A26;
    height: 200px;
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
`

export const Title = styled.span`
    font-size: 16px;
    margin: 0px;
    padding: 0px;
    margin: 10px 0px;
`

export const logWrapper = styled.div`
    background-color: #BF9E68;
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    font-size: 12px;
    overflow-x: hidden;
`

export const logItem = styled.p`
    margin-left: 8px;
`
