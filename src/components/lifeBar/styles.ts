import styled from "styled-components";

export const container = styled.div<{ side: "left" | "right" }>`
    font-family: "Pixelify Sans", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: ${({ side }) => side == "left" ? "flex-start" : "flex-end"};
`

export const lifeBarWraper = styled.div<{ side: "left" | "right" }>`
    width: 200px;
    height: 50px;
    background-color: #663A26;
    justify-items: ${({ side }) => side == "left" ? "flex-start" : "flex-end"};
    align-content: center;
    padding: 0px 5px;
    @media (max-width: 1000px) {
       width: 150px;
    }

    @media (max-width: 700px) {
        width: 150px;
    }
`
export const lifeBar = styled.div<{ life: string }>`
    width: ${({ life }) => life};
    height: 40px;
    background-color:#04bc2c;
    transition: width 0.5s ease-in-out;
`

export const name = styled.span`
    font-size: 22;
`