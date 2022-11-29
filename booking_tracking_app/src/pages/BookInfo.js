import {useState} from 'react'
import Modal from '../components/Modal'

const BookInfo = ({books}) => {
const [toggle, setToggle] = useState("")

  return (
    <div>
        <h1 className='book-details'>Books details</h1>
        {books.map(({ title, description, id, imageLinks, authors }) => {
        return (
          <div className='books-info-container'>            
            <div className="book">
             <div className="book-top">
                <div
                className="book-cover"
                style={{
                width: 128,
                height: 193,
                backgroundImage:`url(${imageLinks ? imageLinks.smallThumbnail : ""})`,
                }}></div>
                </div>
            <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(' and ')}</div> 
        <div className="read-more">
        <button className='read-more'onClick={() => setToggle(id)}>Read more</button>
        </div>
    </div>

           
            {toggle === id ? (
              <>
                <p><Modal setToggle={setToggle} description={description} title={title}/></p>
                
              </>
            ) : null}
          </div>
        ); 
      })}
  </div>
  )
}

export default BookInfo
