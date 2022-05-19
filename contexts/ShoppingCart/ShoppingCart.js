import React, { useState } from "react";
import Cookies from "js-cookie";

export const ShoppingCartContext = React.createContext({});

const ShoppingCartProvider = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState(() => {
    const cookie = Cookies.get("session");
    if (cookie) {
      return {
        acceptance_token: "",
        payment_method: "CARD",
        number: "",
        cvc: "",
        exp_month: "",
        exp_year: "",
        installments: 1,
        card_holder: "",
        customer_email: JSON.parse(cookie).user.email,
      };
    } else {
      return {
        acceptance_token: "",
        payment_method: "CARD",
        number: "",
        cvc: "",
        exp_month: "",
        exp_year: "",
        installments: 1,
        card_holder: "",
        customer_email: "",
      };
    }
  });
  const [taxes, setTaxes] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <ShoppingCartContext.Provider
      value={{
        showDrawer,
        setShowDrawer,
        cartItems,
        setCartItems,
        subtotal,
        setSubtotal,
        total,
        setTotal,
        taxes,
        setTaxes,
        paymentInfo,
        setPaymentInfo,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
