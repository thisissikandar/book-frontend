import { Book } from "@/types";
import React from "react";
import BookCard from "./BookCard";

const Booklist = async () => {
  let book;
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/books`);
    if (!res.ok) {
      return "something went wrong while Book data fetching";
    }
    book = await res.json();
  } catch (error:unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return "Error while fetching Book data";
  }
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
      {book?.map((book: Book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default Booklist;
