import axiosClient from "../../config/axios/axios";

//? Get all books
export const getBooks = async () => {
  try {
    const response = await axiosClient.get("/books?populate=*");
    const { data } = response;
    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting books");
  }
};
