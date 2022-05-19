import { useEffect, useContext } from "react";
import Checkout from "../components/Checkout/Checkout";
import { ShoppingCartContext } from "../contexts/ShoppingCart/ShoppingCart";
import Head from "next/head";

const CheckoutPage = () => {
  const { paymentInfo, setPaymentInfo } = useContext(ShoppingCartContext);

  useEffect(() => {});

  return (
    <>
      <Head>
        <title>Resumen de compra | Papiro Prometeo</title>
        <meta
          name="description"
          content="Resumen de compra en Papiro Prometeo"
        ></meta>
      </Head>
      <Checkout />
    </>
  );
};

export default CheckoutPage;
