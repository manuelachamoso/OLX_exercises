import React from 'react'
import Shelf from '../components/Shelf'
import {Link} from 'react-router-dom'
import Readmore from '../components/Readmore'

const Home = ({books, changeShelf}) => {
  return (
    <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            </div>
            <div>
            <Shelf section='Currently Reading' books={books} category="currentlyReading" changeShelf={changeShelf} />
            <Readmore/>
            <Shelf section='Want to read' books={books} category="wantToRead" changeShelf={changeShelf} />
            <Readmore/>
            <Shelf section='Read' books={books} category="read" changeShelf={changeShelf}/>
            <Readmore/>
            </div>
            <div className="open-search">
              <Link to='/search' className='open-search'>Add a book</Link>
          </div>
          </div>
        </div>
  )
}

export default Home;