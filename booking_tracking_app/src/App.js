import "./App.css";
import Home from './pages/Home'
import SearchPage from "./pages/SearchPage";
import { Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react'
import * as BooksAPI from './BooksAPI';
import Drag from "./pages/Drag";
import BookInfo from "./pages/BookInfo";

const App = () => {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    BooksAPI.getAll().then(books => setBooks(books));
  }, [])

  const changeShelf = async (bookID, shelf) => {
    const book = await BooksAPI.get(bookID)
    await BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(books => setBooks(books))
  }  

  return (
        <Routes>
            <Route path='/' element={<Home books={books} changeShelf={changeShelf} search={search}/>} />
            <Route path='search' element={<SearchPage changeShelf={changeShelf} />} />
            <Route path='drag' element={<Drag books={books} changeShelf={changeShelf} setBooks={setBooks}/>} />
            <Route path='bookInfo' element={<BookInfo books={books} changeShelf={changeShelf} />} />
        </Routes>
  )
}

export default App