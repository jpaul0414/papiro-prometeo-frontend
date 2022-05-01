import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
`;

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const BookTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: #bababa;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  height: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #bababa;
  color: #fff;
  font-size: 16px;
  outline: none;
`;

export const PriceLabel = styled.p`
  font-size: 1rem;
  color: #bababa;
`;
