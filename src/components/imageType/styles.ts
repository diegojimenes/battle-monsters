import styled from "styled-components";

export const imageContainer = styled.div<{ active: boolean }>`
    width: 80px;
    height: 80px;
    border: 2px solid ${({ active }) => active ? '#71BF68' : '#663A26'};
    overflow: hidden;
    background-color: #fff;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

export const photo = styled.img`
    width: 80px;
    object-fit: cover;
`
