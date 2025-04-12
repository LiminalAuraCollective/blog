import type { Metadata } from "next";
import { booksArr } from "@/lib/books";
import Image from "next/image";

export default function BooksPage() {
  return (
    <main className="books">
      <p className="text-sm my-2">
        文字更利于深度学习和独立思考，而视频则更适合娱乐消遣与信息传播。
      </p>
      <div className="flex flex-wrap gap-4">
        {booksArr.map((book, index) => (
          <div
            key={index}
            className="book-card cursor-pointer rounded-sm relative"
          >
            <a href={book.src} target="_blank">
              <Image src={book.src} alt={book.name} fill className="block" />
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "书籍",
  description: "A collection of my book",
  keywords: ["书籍", "book"],
};
