import React, { useContext, useState, useEffect, useCallback } from "react";
import { getBooks as getBooksService } from "../../services/books/booksServices";
import { BooksContext } from "../../contexts/Books/BooksContext";

const useBooks = () => {
  const { books, setBooks } = useContext(BooksContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = useCallback(() => {
    setLoading(true);
    getBooksService()
      .then((res) => {
        setLoading(false);
        setBooks(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [setBooks]);

  return {
    books,
    loading,
  };
};

export default useBooks;
