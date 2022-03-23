import React from 'react'
import Header from "./compnents/Header"
import { Route, Routes } from 'react-router-dom'
import Home from "./compnents/Home"
import AddBook from "./compnents/AddBook"
import Books from "./compnents/Book/Books"
import About from "./compnents/About"
import BookDetail from "./compnents/Book/BookDetail"


function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<AddBook />} exact />
        <Route path="/books" element={<Books />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/books/:id" element={<BookDetail />} exact />
      </Routes>
    </main>

  </React.Fragment>
}

export default App;
