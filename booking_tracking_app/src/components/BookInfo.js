
const BookInfo = ({books}) => {
    const filtered = books.filter(book => book.title === 'The Linux Command Line')
        console.log(filtered);
    
        return (
            <div>
              {filtered.map(book => {
                return (
                  <div key={book.id} className="book-info">
                    <div className="book-info-top">
                    <div
                        className="book-info-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage:`url(${book.imageLinks ? book.imageLinks.smallThumbnail : ""})`,
                        }}></div>
                    <h2 className="book-info-title">name: {book.title}</h2>
                    <h2 className="book-info-authors">author: {book.authors}</h2>
                    <h2 className="book-info-description">description: {book.description}</h2>
                  </div>
                  </div>
                );
              })}
            </div>
          );
        }

export default BookInfo