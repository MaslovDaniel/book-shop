import { booksService } from "../services/books.service.js";
import { AddReview } from "./add-review.jsx";
import { LongTxt } from "./long-txt.jsx";

export function BookDetails({ book, onGoBack }) {
    console.log('book:', book);
    const currYear = (new Date).getFullYear()

    let bookPage = pageCount()
    let publishDate = checkDate()
    let bookDynClass = checkBookPrice()
    let onSaleStr = checkIfSale()

    function checkIfSale() {
      let str=''
        if(book.listPrice.isOnSale) str+='On sale'
        return str
    }

    function checkDate() {
        let dateStr = book.publishedDate
        if (currYear - dateStr > 10) dateStr += ' Vintage'
        else if (currYear - dateStr < 1) dateStr += ' New'
        return dateStr
    }

    function checkBookPrice() {
        let dynClass = ''
        if (book.listPrice.amount > 150) dynClass = 'red-price'
        else if (book.listPrice.amount < 20) dynClass = 'green-price'
        return dynClass
    }

    function pageCount() {
        let pageStr = book.pageCount
        if (book.pageCount > 500) pageStr += ' Searious Reading'
        else if (book.pageCount > 200) pageStr += ' Descent Reading'
        else if (book.pageCount < 100) pageStr += ' Light Reading'
        return pageStr
    }

    function onSaveReview(reviewToAdd) {
        booksService.saveReview(book.id, reviewToAdd)
            .then((review) => {
                const reviews = [review, ...book.reviews]
                setBook({ ...book, reviews })
            })
            .catch((err) => {
                console.log('err:', err);

            })
    }

    return (
        <div className="book-details">
            <p>{book.title}</p>
            <p>{book.subtitle}</p>
            <p>{bookPage}</p>
            <p>{publishDate}</p>
            <p><span className={bookDynClass}>{book.listPrice.amount}{book.listPrice.currencyCode}</span></p>
            <p>{onSaleStr}</p>
            <LongTxt txt={book.description} length={100} />
            <AddReview onSaveReview={onSaveReview} />
            <button onClick={onGoBack}>Go Back</button>
        </div>
    )
}