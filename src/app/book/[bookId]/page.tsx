import Image from "next/image";
import React from "react";
import DownloadButton from "./components/DownloadButton";
import { Book } from "@/types";

const page = async ({
  params,
}: { params: Promise<{ bookId: string }> }) => {
  let book: Book;
  const { bookId } = await params;
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/books/${bookId}`);
    if (!res.ok) {
      return `Failed to fetch book with id ${bookId}`;
    }
    book = await res.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return `Failed to fetch book with id ${bookId}`;
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.author}</span>
        {/* <p className="mt-5 text-lg leading-8">{book?.description}</p> */}
        <DownloadButton fileLink={book.file} />
      </div>
      <div className="flex justify-end">
        <Image
          src={book.coverImage}
          alt={book.title}
          className="rounded-md border"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default page;
