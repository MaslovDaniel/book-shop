const { useState, useEffect } = React

import { booksService } from './../services/books.service.js';

export function BooksFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(booksService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    return <section className="books-filter">
        <h2>Filter Our Books</h2>
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="title">Book Title:</label>
            <input type="text"
                id="title"
                name="txt"
                placeholder="By Title"
                value={filterByToEdit.txt}
                onChange={handleChange}
            />

            <label htmlFor="maxPrice">Max Price: </label>
            <input type="number"
                id="maxPrice"
                name="maxPrice"
                placeholder="By Max Price"
                value={filterByToEdit.maxPrice}
                onChange={handleChange}
            />
        </form>

    </section>
}