import "./App.css";
import Home from './pages/Home'
import SearchPage from "./pages/SearchPage";
import { Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react'
import * as BooksAPI from './BooksAPI';
import BookInfo from "./components/BookInfo";

const App = () => {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    BooksAPI.getAll().then(books => setBooks(books));
  }, [])

  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(books => setBooks(books))
    console.log(book)
  }  

  return (
        <Routes>
            <Route path='/' element={<Home books={books} changeShelf={changeShelf} search={search}/>} />
            <Route path='search' element={<SearchPage changeShelf={changeShelf} />} />
            <Route path='book/:id' element={<BookInfo />} />
        </Routes>
  )
}

export default App