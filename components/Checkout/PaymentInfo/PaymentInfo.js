import { useState } from "react";
import {
  CreditCardBack,
  CreditCardContainer,
  CreditCardFront,
  PaymentMethod,
  PaymentMethodIconContainer,
  PaymentMethodLabel,
  Title,
  Input,
  Wrapper,
  InputGroup,
  InputLabel,
} from "./PaymentInfo.elements";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FaCcPaypal } from "react-icons/fa";

const PaymentInfo = ({ handleChange }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("creditCard");
  return (
    <Wrapper>
      <Title>Método de pago</Title>
      <PaymentMethod
        onClick={() => {
          setSelectedPaymentMethod("creditCard");
        }}
      >
        <PaymentMethodIconContainer>
          <AiOutlineCreditCard></AiOutlineCreditCard>
        </PaymentMethodIconContainer>
        <PaymentMethodLabel>Tarjeta de crédito</PaymentMethodLabel>
      </PaymentMethod>
      {selectedPaymentMethod === "creditCard" && (
        <CreditCardContainer>
          <CreditCardFront>
            <InputGroup>
              <InputLabel htmlFor="number">Número de la tarjeta</InputLabel>
              <Input
                id="number"
                name="number"
                placeholder="4242 4242 4242 4242"
                required
                autoComplete="cc-number"
                onChange={handleChange}
              ></Input>
            </InputGroup>
            <InputGroup>
              <InputLabel htmlFor="card_holder">Nombre del titular</InputLabel>
              <Input
                id="card_holder"
                name="card_holder"
                placeholder="John Doe"
                required
                autoComplete="cc-name"
                onChange={handleChange}
              ></Input>
            </InputGroup>
            <InputGroup>
              <InputLabel htmlFor="exp_month">Mes de caducidad</InputLabel>
              <Input
                id="exp_month"
                name="exp_month"
                placeholder="MM"
                required
                autoComplete="off"
                onChange={handleChange}
              ></Input>
            </InputGroup>
            <InputGroup>
              <InputLabel htmlFor="exp_year">Año de caducidad</InputLabel>
              <Input
                id="exp_year"
                name="exp_year"
                placeholder="YY"
                required
                autoComplete="off"
                onChange={handleChange}
              ></Input>
            </InputGroup>
          </CreditCardFront>
          <CreditCardBack>
            <InputGroup>
              <InputLabel htmlFor="cvc">Código de seguridad</InputLabel>
              <Input
                id="cvc"
                name="cvc"
                placeholder="CVC"
                required
                autoComplete="cc-csc"
                onChange={handleChange}
              ></Input>
            </InputGroup>
          </CreditCardBack>
        </CreditCardContainer>
      )}
      <PaymentMethod
        onClick={() => {
          setSelectedPaymentMethod("paypal");
        }}
      >
        <PaymentMethodIconContainer>
          <FaCcPaypal></FaCcPaypal>
        </PaymentMethodIconContainer>
        <PaymentMethodLabel>Paypal</PaymentMethodLabel>
      </PaymentMethod>
      {selectedPaymentMethod === "paypal" && (
        <CreditCardContainer>Proximamente...</CreditCardContainer>
      )}
    </Wrapper>
  );
};

export default PaymentInfo;
