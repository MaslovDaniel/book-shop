 
 export function BooksPreview({book}) {
  return <article className="book-preview">

    <h2>{book.title}</h2>
    <h3>{book.listPrice.amount}</h3>

  </article>

 }