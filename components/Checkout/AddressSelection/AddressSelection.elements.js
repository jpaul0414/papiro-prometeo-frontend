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

export const ExistingAddress = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm};
  gap: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export const AddressBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const AddressRadio = styled.input`
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
`;

export const AddressLabel = styled.label``;

export const AddressActions = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const NewAddressWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.sm};
`;

export const NewAddressButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  outline: none;
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  padding: 0.5rem 0;

  &:hover {
    text-decoration: underline;
  }
`;
