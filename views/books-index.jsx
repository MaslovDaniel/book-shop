const { useState, useEffect } = React

import { BookDetails } from '../cmps/book-details.jsx'
import { BooksList } from '../cmps/books-list.jsx'
import { booksService } from '../services/books.service.js'


export function BooksIndex() {

    const [books, setBooks] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        booksService.query().then(booksToUpdate => setBooks(booksToUpdate))
    }

    function onRemoveBook(bookId) {
        booksService.remove(bookId)
            .then(() => {
                const upddatedBooks = books.filter(book => book.id !== bookId)
                setBooks(upddatedBooks)

            })
    }

    function onSelectBook(bookId) {
        booksService.get(bookId).then((book) => {
            setSelectedBook(book)
        })
    }


    if (!books) return // without this nothing works !


    return (

        <section className="books-index">

            {!selectedBook && <div>

                <BooksList books={books} onRemoveBook={onRemoveBook} onSelectBook={onSelectBook} />

            </div>}

            {selectedBook && <BookDetails
            book={selectedBook}
            onGoBack={() => setSelectedBook(null)}
        />}


        </section>
    )
}