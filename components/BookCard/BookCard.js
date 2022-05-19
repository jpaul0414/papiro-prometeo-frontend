import React, { useContext } from "react";
import Image from "next/image";
import { message } from "antd";
import {
  AddToCartButton,
  BookTitle,
  CardBody,
  CardContainer,
  ImageContainer,
  InfoContainer,
  PriceLabel,
} from "./BookCard.elements";
import { ShoppingCartContext } from "../../contexts/ShoppingCart/ShoppingCart";

const numberFormat = Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
});

const BookCard = ({ book }) => {
  const { cartItems, setCartItems, setShowDrawer, setTotal } =
    useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    const product = {
      id: book.id,
      title: book.attributes.title,
      price: book.attributes.total_price,
      image: book.attributes.image.data.attributes.url,
      ammount: 1,
    };

    const existingItem = cartItems.some((item) => item.id === product.id);
    if (existingItem) {
      message.warning("El producto ya está en el carrito");
      return;
    }

    setCartItems([...cartItems, product]);
    setShowDrawer(true);
    message.success("Producto agregado al carrito", 1);
  };
  return (
    <CardContainer>
      <ImageContainer>
        <Image
          src={book.attributes.image.data.attributes.url}
          layout="fill"
          alt={book.attributes.image.data.attributes.alternativeText}
        />
      </ImageContainer>
      <CardBody>
        <InfoContainer>
          <PriceLabel>
            {numberFormat.format(book.attributes.total_price)}
          </PriceLabel>
          <AddToCartButton onClick={handleAddToCart}>Comprar</AddToCartButton>
        </InfoContainer>
      </CardBody>
    </CardContainer>
  );
};

export default BookCard;
