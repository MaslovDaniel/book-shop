

export function BookDetails({book , onGoBack}){

  
  
    return(
        <div>
            <p>{book.bookName}</p>
            <p>{book.bookPrice}</p>
            <button onClick={onGoBack}>Go Back</button>
        </div>
    )

}