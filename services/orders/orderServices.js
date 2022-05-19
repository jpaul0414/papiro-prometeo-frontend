import axiosClent from "../../config/axios/axios";

export const placeOrder = async ({ data, jwt }) => {
  try {
    const result = await axiosClent.post(
      "/orders",
      { data },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return result.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al generar la orden");
  }
};

export const getAcceptanceToken = async () => {
  const apiURL = process.env.NEXT_PUBLIC_WOMPI_SANDBOX_URL;
  const publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;

  try {
    const result = await fetch(`${apiURL}/merchants/${publicKey}`);
    const { data } = await result.json();
    return data.presigned_acceptance;
  } catch (error) {
    console.log(error);
  }
};
