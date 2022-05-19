import styled from "styled-components";

export const DrawerHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const DrawerTitle = styled.h2`
  width: 100%;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
`;

export const DrawerBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
`;

export const DrawerFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1rem;
  gap: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  position: sticky;
  bottom: 0;
`;

export const FooterElement = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 2px solid ${({ theme }) => theme.colors.white};
  outline: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.3s ease-in;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.red};
`;
