import styled from "styled-components";

export const modalContainer = styled.div`
    font-family: "Pixelify Sans", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(8px);
    padding: 20px;
    width: 100dvw;
    height: 100dvh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`

export const modal = styled.div<{ size: "mid" | "lg" }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({ size }) => size == "mid" ? '600px' : '800px'};
    min-height: 400px;
    border: 2px solid #663A26;
    background-color:rgba(216, 186, 126, 0.67);
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px) {
        width: ${({ size }) => size == "mid" ? '400px' : '600px'};
        left: 49%;
    }

    @media (max-width: 700px) {
        width: ${({ size }) => size == "mid" ? '150px' : '200px'};
        left: 45%;
    }
`;

export const header = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80px;
`

export const close = styled.button`
    background-color: rgba(0,0,0,0);
    border: none;
    width: 40px;
    height: 40px;
    align-self: flex-end;
    font-family: "Pixelify Sans", sans-serif;
    cursor: pointer;
`

export const title = styled.p`
    align-self: center;
`

export const content = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
`