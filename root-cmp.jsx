const { useState } = React
import { AboutUs } from './views/about.jsx'
import { BooksIndex } from './views/books-index.jsx'
import { HomePage } from './views/home.jsx'
import { AppHeader } from './cmps/app-header.jsx'

export function App() {
    const [page, setPage] = useState('book')

    function onSetPage(ev, page) {
        ev.preventDefault()
        setPage(page)
    }
    return <section className="main-layout app">
        <header className="app-header full main-layout">
            <AppHeader onSetPage={onSetPage} />
        </header>

        <main>
            {page === 'home' && <HomePage />}
            {page === 'about' && <AboutUs />}
            {page === 'book' && <BooksIndex />}
        </main>
    </section>
}