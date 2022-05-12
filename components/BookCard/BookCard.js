import React from "react";
import Image from "next/image";
import {
  AddToCartButton,
  BookTitle,
  CardBody,
  CardContainer,
  ImageContainer,
  InfoContainer,
  PriceLabel,
} from "./BookCard.elements";

const BookCard = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image
          src={"/img/HarryPotterAndTheSorcerersStone.webp"}
          layout="fill"
          alt="harry potter y la piedra filosofal"
        />
      </ImageContainer>
      <CardBody>
        <InfoContainer>
          <PriceLabel>$ 5000</PriceLabel>
          <AddToCartButton>Add to cart</AddToCartButton>
        </InfoContainer>
      </CardBody>
    </CardContainer>
  );
};

export default BookCard;
