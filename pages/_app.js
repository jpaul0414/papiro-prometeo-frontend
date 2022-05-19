import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import NavBar from "../components/Navbar/Navbar";
import { GlobalStyles } from "../styles/globalStyles";
import { themes } from "../lib/Themes/Themes";
import ShoppingCartProvider from "../contexts/ShoppingCart/ShoppingCart";
import CartDrawer from "../components/CartDrawer/CartDrawer";
import BooksContextProvider from "../contexts/Books/BooksContext";
import "antd/dist/antd.css";
import { AuthContextProvider } from "../contexts/Auth/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />
      <AuthContextProvider>
        <ShoppingCartProvider>
          <NavBar />
          <BooksContextProvider>
            <CartDrawer />
            <Component {...pageProps} />
          </BooksContextProvider>
        </ShoppingCartProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
