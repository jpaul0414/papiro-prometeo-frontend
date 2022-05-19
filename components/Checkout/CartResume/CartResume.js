import { useContext, useEffect } from "react";
import {
  Label,
  PlaceOrderButton,
  ResumeItem,
  Title,
  TyC,
  WompiTyC,
  Wrapper,
} from "./CartResume.elements";
import { ShoppingCartContext } from "../../../contexts/ShoppingCart/ShoppingCart";

const numberFormat = Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
});

const CartResume = ({ handleSubmit }) => {
  const { cartItems, subtotal, setSubtotal, total, setTotal, paymentInfo } =
    useContext(ShoppingCartContext);

  useEffect(() => {
    setSubtotal(cartItems.reduce((acc, item) => acc + item.price, 0));
    setTotal(subtotal + 10000);
  }, [cartItems, setSubtotal, setTotal, subtotal]);

  return (
    <Wrapper>
      <Title>Resumen de la orden</Title>
      <ResumeItem>
        <Label fontWeight="500">
          {"Productos: "}
          <em>{cartItems.length}</em>
        </Label>
        <Label>{numberFormat.format(subtotal)}</Label>
      </ResumeItem>
      <ResumeItem>
        <Label fontWeight="500">Envío</Label>
        <Label>{numberFormat.format(10000)}</Label>
      </ResumeItem>
      <ResumeItem>
        <Label fontWeight="500">Total:</Label>
        <Label fontWeight="500"> {numberFormat.format(total)}</Label>
      </ResumeItem>
      <TyC>
        {" "}
        Al hacer click en el botón de pagar, acepta los términos y condiciones y
        la política de privacidad de Papiro Prometeo y de la{" "}
        <WompiTyC
          href={paymentInfo?.wompi_tyc}
          target="_blank"
          rel="noopener noreferrer"
        >
          pasarela de pagos Wompi
        </WompiTyC>
        . Todos los datos personales que nos proporcione serán utilizados para
        el envío de la orden.
      </TyC>
      <PlaceOrderButton onClick={handleSubmit}>Comprar</PlaceOrderButton>
    </Wrapper>
  );
};

export default CartResume;
