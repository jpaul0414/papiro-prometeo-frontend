import React from "react";
import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
import Head from "next/head";

const FIELDS = [
  {
    label: "Nombre y apellido",
    type: "text",
    placeholder: "Ingrese su nombre y apellido",
    name: "name",
    id: "name",
    required: true,
    autocomplete: "name",
  },
  {
    label: "Correo",
    type: "email",
    placeholder: "Ingrese su email",
    name: "email",
    id: "email",
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
    autocomplete: "new-password",
  },
];

const register = () => {
  return (
    <>
      <Head>
        <title>Registro | Papiro Prometeo</title>
        <meta name="description" content="Registro Papiro Prometeo"></meta>
      </Head>
      <Container md={1} lg={1} xl={1}>
        <h1>Registrarse</h1>
        <Form
          fields={FIELDS}
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form Submitted");
          }}
          submitBtnText="Registrarse"
          loading={false}
          maxWidth="500px"
        ></Form>
      </Container>
    </>
  );
};

export default register;
