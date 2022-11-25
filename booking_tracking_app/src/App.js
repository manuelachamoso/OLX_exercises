import "./App.css";
import Home from './pages/Home'
import SearchPage from "./pages/SearchPage";
import { Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react'
import * as BooksAPI from './BooksAPI';
import { search } from "./BooksAPI"; 

const App = () => {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')
  const [bookFromSearch, setBookFromSearch] = useState([])

  useEffect(() => {
    BooksAPI.getAll().then(books => setBooks(books));
  }, [])

  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(books => setBooks(books))
  }

  const handleChange = async (e) => {
    await setSearch({search:e.target.value})
    console.log(search)
    handleBookSearch(search)
  }

  const handleBookSearch = (search) => {
    BooksAPI.search(search).then((res) => setBookFromSearch({bookFromSearch:res}))
  }

  return (
        <Routes>
            <Route path='/' element={<Home books={books} changeShelf={changeShelf} search={search}/>} />
            <Route path='search' element={<SearchPage handleChange={handleChange} bookFromSearch={bookFromSearch}/>} />
        </Routes>
  )
}

export default App