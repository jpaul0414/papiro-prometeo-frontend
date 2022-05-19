import {
  ItemResume,
  ImageContainer,
  CoverImage,
  ItemBody,
  ItemTitle,
  ItemPrice,
  ItemActions,
  ActionButton,
} from "./ItemResume.elements";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const CartItem = ({ item, handleDelete }) => {
  return (
    <ItemResume>
      <ImageContainer>
        <CoverImage
          src={item.image}
          layout="fill"
          alt={item.title}
        ></CoverImage>
      </ImageContainer>
      <ItemBody>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemPrice>Cantidad: {item.ammount}</ItemPrice>
        <ItemPrice>{item.price}</ItemPrice>
      </ItemBody>
      <ItemActions>
        <ActionButton
          onClick={() => {
            handleDelete(item);
          }}
        >
          <AiOutlineDelete />
        </ActionButton>
      </ItemActions>
    </ItemResume>
  );
};

export default CartItem;
