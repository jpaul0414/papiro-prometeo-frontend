import useAuth from "../../hooks/useAuth/useAuth";
import useShoppingCart from "../../hooks/useShoppingCart/useShoppingCart";
import AddressSelection from "./AddressSelection/AddressSelection";
import CartResume from "./CartResume/CartResume";
import {
  AddressContainer,
  CartResumeContainer,
  CheckoutContainer,
} from "./Checkout.elements";
import PaymentInfo from "./PaymentInfo/PaymentInfo";
import Link from "next/link";

const Checkout = () => {
  const { isAuthenticated } = useAuth();

  const { placeOrder, paymentInfo, setPaymentInfo, cartItems } =
    useShoppingCart();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    placeOrder({
      data: { payment_info: paymentInfo, products: cartItems, ship_address: 1 },
    });
  };

  if (!cartItems.length) {
    return (
      <CheckoutContainer>
        <p>No hay productos en el carrito.</p>
      </CheckoutContainer>
    );
  }

  return (
    <CheckoutContainer>
      {!isAuthenticated && (
        <Link href={"/auth/login"}>
          <a
            style={{
              fontSize: "18px",
              fontWeight: "500",
              textDecoration: "underline",
              color: "#CD2626",
            }}
          >
            Inicia sesión para continuar
          </a>
        </Link>
      )}
      {isAuthenticated && (
        <>
          <AddressContainer>
            <AddressSelection />
            <PaymentInfo handleChange={handleChange}></PaymentInfo>
          </AddressContainer>

          <CartResumeContainer>
            <CartResume handleSubmit={handleSubmit}></CartResume>
          </CartResumeContainer>
        </>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
