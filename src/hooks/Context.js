import React, { createContext, useState } from 'react';

export const CustomContext = createContext();

export function Context(props) {
    const [books, setBooks] = useState([
        {id: 1, title: 'JS'},
        {id: 2, title: 'REACT'},
        {id: 3, title: 'NodeJS'}
    ])

    function addBook(book) {
        return setBooks([book, ...books]);
    }
    function removeBook(id) {
        return setBooks(books.filter(item => item.id !== id));
    }

    let obj = {
        books,
        addBook,
        removeBook
    }
    return <CustomContext.Provider value={obj}>
        { props.children }
    </CustomContext.Provider>

}
