import React from 'react'

const Book = ({book, changeShelf}) => {
    const updateShelf = (e) => {
        changeShelf(book, e.target.value)
        console.log(e.target.value)
    }
    return (
        <div className="book">
             <div className="book-top">
                <div
                className="book-cover"
                style={{
                width: 128,
                height: 193,
                backgroundImage:`url(${book.imageLinks ? book.imageLinks.smallThumbnail : ""})`,
                }}></div>
                <div className="book-shelf-changer" value={book.shelf}>
                    <select onChange={updateShelf}>
                    <option value="none">
                    Move to...</option>
                    <option value="currentlyReading">
                    Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
            <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(' and ')}</div> 
    </div>
    )}

export default Book