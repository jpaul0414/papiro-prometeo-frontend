import { useState } from "react";
import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
import useAuth from "../../hooks/useAuth/useAuth";
import Head from "next/head";

const FIELDS = [
  {
    label: "Correo",
    type: "email",
    placeholder: "Ingrese su email",
    name: "identifier",
    id: "identifier",
    required: true,
    autocomplete: "email",
  },
  {
    label: "Contraseña",
    type: "password",
    placeholder: "Ingrese su contraseña",
    name: "password",
    id: "password",
    required: true,
    autocomplete: "current-password",
  },
];

const Login = () => {
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    login({
      identifier: e.target.identifier.value,
      password: e.target.password.value,
    });
  };

  return (
    <>
      <Head>
        <title>Ingreso | Papiro Prometeo</title>
        <meta
          name="description"
          content="Inicio de sesión Papiro Prometeo"
        ></meta>
      </Head>
      <Container md={1} lg={1} xl={1}>
        <h1>Iniciar Sesión</h1>
        <Form
          fields={FIELDS}
          onSubmit={handleLogin}
          submitBtnText="Iniciar Sesión"
          loading={false}
          maxWidth="500px"
        ></Form>
      </Container>
    </>
  );
};

export default Login;
