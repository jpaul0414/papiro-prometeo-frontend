import { useContext, useEffect } from "react";
import { SideSheet } from "evergreen-ui";
import {
  DrawerBody,
  DrawerHead,
  DrawerTitle,
  DrawerFooter,
  CheckoutButton,
  FooterElement,
} from "./CartDrawer.elements";
import ItemResume from "./ItemResume/ItemResume";
import { useRouter } from "next/router";
import { ShoppingCartContext } from "../../contexts/ShoppingCart/ShoppingCart";

const numberFormat = Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
});

const CartDrawer = () => {
  const router = useRouter();
  const {
    showDrawer,
    setShowDrawer,
    cartItems,
    setCartItems,
    paymentInfo,
    setSubtotal,
    setTotal,
    subtotal,
    total,
  } = useContext(ShoppingCartContext);

  const handleDelete = ({ id }) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
    newCartItems.length === 0 && setShowDrawer(false);
  };

  useEffect(() => {
    setSubtotal(cartItems.reduce((acc, item) => acc + item.price, 0));
    setTotal(subtotal);
  }, [cartItems, setSubtotal, setTotal, subtotal]);

  return (
    <SideSheet
      isShown={showDrawer}
      onCloseComplete={() => setShowDrawer(false)}
      containerProps={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        width: "100%",
        paddingTop: "96px",
        gap: "1rem",
      }}
    >
      <DrawerHead>
        <DrawerTitle>Carrito de compras</DrawerTitle>
      </DrawerHead>
      <DrawerBody>
        {cartItems.length > 0
          ? cartItems.map((item) => (
              <ItemResume
                key={`item-${item.id}`}
                item={item}
                handleDelete={handleDelete}
              />
            ))
          : "No hay productos en el carrito"}
      </DrawerBody>
      <DrawerFooter>
        <FooterElement>
          <strong>Subtotal:</strong> {numberFormat.format(subtotal)}
        </FooterElement>
        <FooterElement>
          <strong>Total:</strong> {numberFormat.format(total)}
        </FooterElement>
        <CheckoutButton
          onClick={() => {
            router.push("/checkout");
            setShowDrawer(false);
          }}
        >
          Ir a pagar
        </CheckoutButton>
      </DrawerFooter>
    </SideSheet>
  );
};

export default CartDrawer;
