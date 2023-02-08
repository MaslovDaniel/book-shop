const { useState, useEffect } = React

import { BookDetails } from '../cmps/book-details.jsx'
import { BooksList } from '../cmps/books-list.jsx'
import { BooksFilter } from '../cmps/books.filter.jsx'
import { booksService } from '../services/books.service.js'

export function BooksIndex() {
    const [books, setBooks] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(booksService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        booksService.query(filterBy)
            .then(booksToUpdate => setBooks(booksToUpdate))
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
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
                <BooksFilter onSetFilter={onSetFilter} />
                <BooksList books={books} onRemoveBook={onRemoveBook} onSelectBook={onSelectBook} />
            </div>}
            {selectedBook && <BookDetails
                book={selectedBook}
                onGoBack={() => setSelectedBook(null)}
            />}
        </section>
    )
}