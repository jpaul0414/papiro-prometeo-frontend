import { useState, useEffect, useContext, useCallback } from "react";
import {
  login as loginService,
  logout as logoutService,
} from "../../services/auth/authServices";
import AuthContext from "../../contexts/Auth/AuthContext";
import { ShoppingCartContext } from "../../contexts/ShoppingCart/ShoppingCart";
import { useRouter } from "next/router";

const useAuth = () => {
  const { paymentInfo, setPaymentInfo } = useContext(ShoppingCartContext);
  const router = useRouter();
  const [loadingState, setLoadingState] = useState({
    loading: false,
    error: false,
    errorMessage: "",
  });
  const { user, setUser, jwt, setJwt, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const login = useCallback(
    ({ identifier, password, remember }) => {
      setLoadingState({
        loading: true,
        error: false,
        errorMessage: "",
      });
      loginService({ identifier, password, remember })
        .then((res) => {
          setUser(res.user);
          setJwt(res.jwt);
          setPaymentInfo({ ...paymentInfo, customer_email: res.user.email });
          setLoadingState({
            loading: false,
            error: false,
            errorMessage: "",
          });
          setIsAuthenticated(true);
          router.back();
        })
        .catch((err) => {
          console.log("error on hook", err.message);
          setLoadingState({
            loading: false,
            error: true,
            errorMessage: err.message,
          });
        });
    },
    [setJwt, setUser]
  );

  const logout = useCallback(() => {
    logoutService()
      .then(() => {
        setUser(null);
        setJwt(null);
        setIsAuthenticated(false);
        router.push("/auth/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setJwt, setUser]);

  return {
    user,
    loadingState,
    login,
    logout,
    isAuthenticated,
  };
};

export default useAuth;
