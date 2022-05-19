import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 2rem auto;
  gap: 2rem;
  justify-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: ${({ md }) =>
      md ? `repeat(${md}, 1fr)` : `repeat(2, 1fr)`};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: ${({ lg }) =>
      lg ? `repeat(${lg}, 1fr)` : `repeat(3, 1fr)`};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: ${({ xl }) =>
      xl ? `repeat(${xl}, 1fr)` : `repeat(4, 1fr)`};
  }
`;
