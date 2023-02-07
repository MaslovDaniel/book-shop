
export function BookDetails({ book, onGoBack }) {

    console.log('book:', book);

    //  Show the price in color (using CSS classes): - amount > 150 - red
    // - amount < 20 - green

    const currYear = (new Date).getFullYear()

    let bookPage = pageCount()
    let publishDate = checkDate()


    function checkDate() {
        let dateStr = book.publishedDate
        if (currYear - dateStr > 10) dateStr += ' Vintage'
        else if (currYear - dateStr < 1) dateStr += ' New'
        return dateStr
    }





    function pageCount() {
        let pageStr = book.pageCount
        if (book.pageCount > 500) pageStr += ' Searious Reading'
        else if (book.pageCount > 200) pageStr += ' Descent Reading'
        else if (book.pageCount < 100) pageStr += ' Light Reading'
        return pageStr

    }

    return (
        <div className="book-details">
            <p>{book.title}</p>
            <p>{book.subtitle}</p>
            <p>{bookPage}</p>
            <p>{publishDate}</p>
            <button onClick={onGoBack}>Go Back</button>
        </div>
    )
}