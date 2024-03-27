import axios from 'axios';
import { createContext, useCallback, useEffect, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState();
    const [originalBooks, setOriginalBooks] = useState(); 
    const [booksPages, setBooksPages] = useState();
    const [categories, setCategories] = useState();
    const [authors, setAuthors] = useState();
    const [search, setSearch] = useState('');
    const [currPage, setCurrPage] = useState(1);
    const [booksPerPage] = useState(20);
    const [checkedCategory, setCheckedCategory] = useState('');
    const [checkedAuthors, setCheckedAuthors] = useState('');

    const lastBookIndex = currPage * booksPerPage;
    const firstBookIndex = lastBookIndex - booksPerPage;

    const fetchCategories = useCallback(() => {
        axios.get('http://localhost:3000/book/genre/all')
            .then((res) => {
                setCategories(res.data);
            }).catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const fetchAuthors = useCallback(() => {
        axios.get('http://localhost:3000/book/author/all')
            .then((res) => {
                setAuthors(res.data);
            }).catch((error) => {
                console.error('Error fetching authors:', error);
            });
    }, []);

    const fetchDataByCategory = useCallback((cat) => {
        axios.get(`http://localhost:3000/book/genre/${cat}`)
            .then((res) => {
                setOriginalBooks(res.data); 
                setBooksPages(res.data);
            }).catch((error) => {
                console.error('Error fetching books by category:', error);
            });
    }, []);

    const fetchDataByAuthor = useCallback((selectedAuthor) => {
        axios.get(`http://localhost:3000/book/author/${selectedAuthor}`)
            .then((res) => {
                setOriginalBooks(res.data); 
                setBooksPages(res.data);
            }).catch((error) => {
                console.error('Error fetching books by author:', error);
            });
    }, []);

    const fetchData = useCallback(() => {
     
        axios.get('http://localhost:3000/book/all', {
            headers: {
                'x-book-store-authentication': 'your-auth-token'
            }
        }).then((res) => {
            setOriginalBooks(res.data); 
            setBooksPages(res.data);
        }).catch((error) => {
            console.error('Error fetching books:', error);
        });
    }, []);

    useEffect(() => {
        fetchData();
        fetchCategories();
        fetchAuthors();
    }, [fetchData, fetchCategories, fetchAuthors]);

    useEffect(() => {
        if (checkedCategory) {
            fetchDataByCategory(checkedCategory);
        }
        if (checkedAuthors) {
            fetchDataByAuthor(checkedAuthors);
        }
    }, [checkedCategory, checkedAuthors, fetchDataByCategory, fetchDataByAuthor]);

    useEffect(() => {
        const getPagesData = () => {
            if (booksPages) {
                const currBooks = booksPages.slice(firstBookIndex, lastBookIndex);
                setBooks(currBooks);
            }
        };
        getPagesData();
    }, [booksPages, firstBookIndex, lastBookIndex]);

    useEffect(() => {
        if (search) {
            const filteredBooks = originalBooks?.filter(book =>
                book.title.toLowerCase().includes(search.toLowerCase())
            );
            setBooksPages(filteredBooks);
            setCurrPage(1);
        } else {
            setBooksPages(originalBooks);
        }
    }, [originalBooks, search]);

    return (
        <div>
            <BookContext.Provider value={{
                setCheckedAuthors,
                fetchDataByCategory,
                checkedAuthors,
                fetchDataByAuthor,
                authors,
                checkedCategory,
                setCheckedCategory,
                books,
                search,
                setSearch,
                booksPages,
                booksPerPage,
                setCurrPage,
                setBooksPages,
                currPage,
                categories,
                fetchData
            }}>
                {children}
            </BookContext.Provider>
        </div>
    );
};

export default BookContextProvider;
