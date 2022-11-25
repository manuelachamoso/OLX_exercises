import {Link} from 'react-router-dom'

const SearchPage = ({handleChange, search, bookFromSearch}) => {
  return (
    <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className='close-search'>Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {bookFromSearch.map((book) => (
                <div>
                  <div>{book.title}</div>
                </div>
              ))}
            </ol>
          </div>
        </div>
  )
}

export default SearchPage;