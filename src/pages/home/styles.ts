import styled from "styled-components";
import golem from '../../assets/back-home.png';

export const container = styled.div`
    margin: 0px;
    padding: 0px;
    width: 100dvw;
    height: 100dvh;
    background-image: url(${golem});
    background-position: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const logoWrapper = styled.div`
    flex: 1;
    justify-content: space-between;
`

export const logo = styled.img`
    height: 400px;
`

export const buttonGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    margin: 10px 10px;
    gap: 8px;
`

export const modalContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
`

export const monstersPanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 1000px) {
       flex-direction: column;
        align-items: center;
        .monsterCard{
            display: none;
        }
    }

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        .monsterCard{
            display: none;
        }
    }
`

export const monster = styled.div``

export const VS = styled.span`
    font-size: 60px;
`

export const Error = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    p {
        color: #FFF;
    }
`