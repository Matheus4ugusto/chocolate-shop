import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  overflow-x: scroll;

  * {
    scrollbar-width: auto;
    scrollbar-color: #2b1700 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2b1700;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
`;
