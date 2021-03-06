import BookCard from "../components/BookCard/BookCard";
import Container from "../components/Container/Container";
import useBooks from "../hooks/useBooks/useBooks";
import Head from "next/head";

export default function Home() {
  const { books, loading } = useBooks();
  return (
    <>
      <Head>
        <title>Inicio | Papiro Prometeo</title>
        <meta
          name="description"
          content="Tienda de libros Papiro Prometeo"
        ></meta>
      </Head>
      {loading && <p>Loading...</p>}
      <Container>
        {books &&
          books.map((book, i) => (
            <BookCard key={`book-${book.id}`} book={book} />
          ))}
      </Container>
    </>
  );
}
