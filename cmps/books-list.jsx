import { BooksPreview } from "./books-preview.jsx";


export function BooksList({ books, onRemoveBook , onSelectBook}) {

    console.log('books:', books);

    return <ul className="books-list">
        {books.map(book => <li key={book.id}>
            <BooksPreview book={book} />
            <div className="buttons">
                <button onClick={() => onRemoveBook(book.id)} >Remove Book</button>
                <button onClick={() => onSelectBook(book.id)} >Select Book</button>


            </div>

        </li>)}
    </ul>
}