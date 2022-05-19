import Image from "next/image";
import styled from "styled-components";

export const ItemResume = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 60px;
  /* height: 90px; */
  aspect-ratio: 9/16;
  position: relative;
  overflow: hidden;
`;

export const CoverImage = styled(Image)``;

export const ItemBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ItemTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const ItemPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const ItemActions = styled.div`
  width: 100%;
  max-width: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ActionButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 2px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.red};
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.md};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
`;
