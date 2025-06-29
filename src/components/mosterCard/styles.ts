import styled from "styled-components";

export const container = styled.div`
    font-family: "Pixelify Sans", sans-serif;
    padding: 10px;
    background-color: #D8BA7E;
    border: 2px solid #663A26;
    cursor: pointer;
    width: 155px;
    height: 240px;
`

export const imageContainer = styled.div`
    width: 150px;
    height: 150px;
    border: 2px solid #fff;
    overflow: hidden;
    background-color: #fff;
    display: flex;
    justify-content: center;
`

export const photo = styled.img`
    width: 250px;
    object-fit: cover;
`

export const name = styled.p`
    margin: 0px;
    padding: 10px 0px;
`

export const statsList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const stats = styled.div`
    width: 70px;
    height: 40px;
    background-color: #BF9E68;
    border: 2px solid #A7784B;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const statsText = styled.p`
    font-size: 9px;
    margin: 0px;
    padding: 0px;
    padding-left: 8px;
`

export const actionWraper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16px;
`