import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 3rem;
  #card:hover {
    transition: all 0.5s;
    transform: scale(1.05);
  }
  @media (max-width: 425px) {
    margin: 2rem 0;
    flex-direction: column;
    align-items: center;
  }
`;
