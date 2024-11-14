import Banner from "./components/Banner";
import Booklist from "./components/Booklist";

export default async function Home() {
  const data = await fetch(`${process.env.BACKEND_URL}/books`);
  if (!data.ok) {
    throw new Error("something went wrong while Book data fetching");
  }
  const book = await data.json();
  console.log("book", book);

  return (
    <div>
      <Banner />
      <Booklist books={book} />
    </div>
  );
}
