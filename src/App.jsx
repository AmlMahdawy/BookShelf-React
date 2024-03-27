
import BookContextProvider from './context/BookContext'
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import AllBooksPage from './pages/allBooks';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
  <BookContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AllBooksPage></AllBooksPage>}></Route>
    </Routes>
    </BrowserRouter>
  </BookContextProvider>

    </>
  )
}

export default App
