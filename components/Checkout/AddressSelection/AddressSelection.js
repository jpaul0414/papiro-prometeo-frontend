import { useState } from "react";
import {
  AddressActions,
  AddressBox,
  AddressLabel,
  AddressRadio,
  EditButton,
  ExistingAddress,
  NewAddressButton,
  NewAddressWrapper,
  Title,
  Wrapper,
} from "./AddressSelection.elements";
import Form from "../../Form/Form";

const FIELDS = [
  {
    label: "Nombre de la direccion",
    type: "text",
    placeholder: "ej. Casa",
    name: "name",
    id: "email",
    required: true,
    autocomplete: "off",
  },
  {
    label: "Dirección",
    type: "text",
    placeholder: "ej. calle 12 #34 - 56",
    name: "address",
    id: "address",
    required: true,
    autocomplete: "address-line1",
  },
  {
    label: "Barrio (opcional)",
    type: "text",
    placeholder: "ej. Belén",
    name: "neighborhood",
    id: "neighborhood",
    required: false,
    autocomplete: "off",
  },
  {
    label: "Ciudad",
    type: "text",
    placeholder: "ej. Medellín",
    name: "city",
    id: "city",
    required: true,
    autocomplete: "address-level2",
  },
  {
    label: "Departamento",
    type: "text",
    placeholder: "ej. Antioquia",
    name: "region",
    id: "region",
    required: true,
    autocomplete: "address-level1",
  },
  {
    label: "Teléfono de contacto",
    type: "tel",
    placeholder: "ej. 3133456789",
    name: "contact_phone",
    id: "contact_phone",
    required: true,
    autocomplete: "tel-national",
    pattern: "[0-9]{10}",
  },
];

const AddressSelection = () => {
  const [creatingAddress, setCreatingAddress] = useState(false);
  return (
    <Wrapper>
      <Title>Dirección de envío</Title>
      <ExistingAddress>
        <AddressBox>
          <AddressRadio
            type={"radio"}
            id="address1"
            name="address"
            value={"1"}
          />
          <AddressLabel htmlFor="address1">
            Calle 3bSur. Medellin, Antioquia
          </AddressLabel>
        </AddressBox>
        <AddressActions>
          <EditButton>Editar</EditButton>
        </AddressActions>
      </ExistingAddress>
      {!creatingAddress && (
        <NewAddressButton
          onClick={() => {
            setCreatingAddress(true);
          }}
        >
          Agregar una nueva dirección
        </NewAddressButton>
      )}
      {creatingAddress && (
        <NewAddressWrapper>
          <Form
            fields={FIELDS}
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Address Form Submitted");
            }}
            submitBtnText="Agregar dirección"
            hasCancel={true}
            cancelBtnText="Cancelar"
            onCancel={() => {
              console.log("Canceled!");
              setCreatingAddress(false);
            }}
            loading={false}
          />
        </NewAddressWrapper>
      )}
    </Wrapper>
  );
};

export default AddressSelection;
