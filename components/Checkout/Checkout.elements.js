import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 2rem auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const AddressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const CartResumeContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.md};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 500px;
  }
`;
