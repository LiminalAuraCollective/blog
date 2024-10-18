import HeaderBox from "@/components/HeaderBox";
import books from "@/lib/books";

export default function Books() {
  return (
    <div className="list_table">
      <HeaderBox />
      <table>
        <tbody>
          <tr>
            <td>
              <strong>书名</strong>
            </td>
            <td>
              <strong>作者</strong>
            </td>
            <td>
              <strong>标签</strong>
            </td>
            <td>
              <strong>状态</strong>
            </td>
          </tr>
          {books.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.labels.join("，")}</td>
              <td>{book.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
