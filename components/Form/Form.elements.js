import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FormActions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  outline: none;
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
`;
