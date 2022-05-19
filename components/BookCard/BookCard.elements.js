import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
`;

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
`;

export const BookTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  height: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.85;
  }
`;

export const PriceLabel = styled.p`
  font-size: 1rem;
  width: 100%;
  color: #bababa;
  margin: 0;
`;
