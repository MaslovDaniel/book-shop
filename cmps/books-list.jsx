import { BooksPreview } from "./books-preview.jsx";


export function BooksList( {books} ){

    console.log('books:', books);
    
    return <ul className="books-list">
        {books.map(book => <li key={book.id}>
            <BooksPreview book={book}  />
           
        </li>)}
    </ul>
}