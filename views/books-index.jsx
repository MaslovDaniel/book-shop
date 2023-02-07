const { useState, useEffect } = React

import { BooksList } from '../cmps/books-list.jsx'
import { booksService } from '../services/books.service.js'

export function BooksIndex() {

    const [books, setBooks] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        booksService.query().then(booksToUpdate => setBooks(booksToUpdate))
    }

    
    if (!books) return // without this nothing works !


    return (

        <section className = "books-index">

            <BooksList books={books} />



        </section>
    )
}