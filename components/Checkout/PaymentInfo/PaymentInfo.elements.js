import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const PaymentMethod = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  gap: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
`;

export const PaymentMethodIconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const PaymentMethodLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  margin: 0;
`;

export const CreditCardContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
`;

export const CreditCardFront = styled.div`
  width: 100%;
  min-height: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.niceGray};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const CreditCardBack = styled.div`
  width: 100%;
  min-height: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.niceGray};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const InputLabel = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;

  &::after {
    content: ${({ required }) => (required ? '"*"' : "")};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: ${({ maxW }) => (maxW ? maxW : "100%")};
  height: ${({ theme }) => theme.size.md};
  background-color: transparent;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 300;
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;
