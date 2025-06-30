import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 24px;
  padding: 20px;
  color: #3a2e1f;
`;

export const PixelText = styled.div`
  margin-bottom: 10px;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  span {
    animation: ${bounce} 1.4s infinite ease-in-out both;
    background-color: #3a2e1f;
    width: 8px;
    height: 8px;
    margin: 0 4px;
    border-radius: 50%;
  }
  span:nth-child(1) {
    animation-delay: -0.32s;
  }
  span:nth-child(2) {
    animation-delay: -0.16s;
  }
  span:nth-child(3) {
    animation-delay: 0s;
  }
`;