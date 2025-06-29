import styled from "styled-components";

export const container = styled.div`
    margin: 0px;
    padding: 0px;
    width: 100dvw;
    height: 100dvh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-x: hidden;
`

export const header = styled.div`
    display: flex;
    width: 100dvw;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 16px;
    margin-bottom: 32px;

    @media (max-width: 1000px) {
       flex-direction: row;
       height: 150px;
    }

    @media (max-width: 700px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 150px;
    }
`

export const buttonWrapper = styled.div`
    width: 200px;
`

export const title = styled.h1``

export const list = styled.div`
    width: 100dvw;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
`

export const modalContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
`

export const form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const formLine = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
`

export const monsterLine = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const empty = styled.span``