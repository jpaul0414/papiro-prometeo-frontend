import { useState, useEffect, useCallback, useContext } from "react";
import AuthContext from "../../contexts/Auth/AuthContext";
import { ShoppingCartContext } from "../../contexts/ShoppingCart/ShoppingCart";
import { message } from "antd";
import {
  getAcceptanceToken as getAcceptanceTokenService,
  placeOrder as placeOrderService,
} from "../../services/orders/orderServices";
import { useRouter } from "next/router";

const useShoppingCart = () => {
  const { jwt, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const { paymentInfo, setPaymentInfo, cartItems, setCartItems } =
    useContext(ShoppingCartContext);
  const router = useRouter();

  useEffect(() => {
    getAcceptanceToken();
  }, []);

  const getAcceptanceToken = useCallback(() => {
    getAcceptanceTokenService().then((res) => {
      setPaymentInfo({
        ...paymentInfo,
        acceptance_token: res.acceptance_token,
        wompi_tyc: res.permalink,
      });
    });
  }, [paymentInfo, setPaymentInfo]);

  const placeOrder = useCallback(
    ({ data }) => {
      setLoading(true);
      placeOrderService({ data, jwt })
        .then((res) => {
          setLoading(false);
          message.success(
            "Orden generada con éxito. En breve recibiras un correo de confirmación",
            5
          );
          setCartItems([]);
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          message.error("Error generando la orden. Intenta de nuevo");
        });
    },
    [jwt]
  );

  return { loading, placeOrder, paymentInfo, setPaymentInfo, cartItems };
};

export default useShoppingCart;
