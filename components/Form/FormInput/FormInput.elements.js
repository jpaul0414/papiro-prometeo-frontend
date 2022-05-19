import styled from "styled-components";

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
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.size.md};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 0 ${({ theme }) => theme.spacing.sm};

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
    font-weight: 300;
  }
`;
