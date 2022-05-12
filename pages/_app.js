import NavBar from "../components/Navbar/NavBar";
import "../styles/globals.css";
import { GlobalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
