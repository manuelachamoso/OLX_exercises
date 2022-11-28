import {useState} from 'react'

const BookInfo = ({books}) => {
const [toggle, setToggle] = useState(true)

  return (
    <div>
        <h1>Books details</h1>
        <br></br>
        {books.map((book, index) => {
            return (
                <ol className="books-container">
              <li>
              <div className='book-info' key={index}>
                    <div className="book-top-info">
                        <div
                        className="book-cover-info"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage:`url(${book.imageLinks ? book.imageLinks.smallThumbnail : ""})`,
                        }}></div>
                    </div>
                <div className="book-title-info">{book.title}</div>
                <div className="book-authors-info">{book.authors}</div> 

                <button onClick={() => setToggle(!toggle)}>Read more</button>
                {toggle && (
                    <div className="book-description">{book.description}</div> 
                )}
                
                </div>
              </li>
              </ol>
                
            )
        })}
    </div>
  )
}

export default BookInfo
