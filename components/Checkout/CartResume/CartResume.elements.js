import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.niceGray};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const Title = styled.h2`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const ResumeItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Label = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const PlaceOrderButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.spacing.sm};

  &:hover {
    opacity: 0.9;
  }
`;

export const TyC = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 300;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const WompiTyC = styled.a`
  color: ${({ theme }) => theme.colors.red};

  &:hover {
    color: ${({ theme }) => theme.colors.red};
    text-decoration: underline;
  }
`;
