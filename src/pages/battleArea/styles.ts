import styled from "styled-components";

import arena from '../../assets/arena/arena.png';

export const container = styled.div`
    margin: 0px;
    padding: 0px;
    width: 100dvw;
    height: 100dvh;
    background-image: url(${arena});
    background-position: center;
    overflow-x: hidden;
    @media (max-width: 1000px) {
        .log {
            display: none;
        }
    }

    @media (max-width: 700px) {
        .log {
            display: none;
        }
    }
`

export const battleArena = styled.div`
    display: flex;
    flex:1;
    height: 100dvh;
    flex-direction: column;
    justify-content: space-between;
    backdrop-filter: blur(8px);
`

export const header = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 8px 16px;
`

export const competitors = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 32px;
    @media (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 700px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const VS = styled.span`
    font-size: 60px;
`

export const log = styled.div`
justify-items: center;
`

export const modalContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`
export const winner = styled.p`
    font-size: 60px;
    text-align: center;
`