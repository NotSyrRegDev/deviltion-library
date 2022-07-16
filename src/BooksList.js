import React from 'react';
import './BooksList.css';

import BookRow from './BookRow';
import requests from './requests';

const BooksList = () => {
    return (
        <div className="bookList" >
            <h1>New In BooksLibrary</h1>
           
            <div className="mt-5" >
            
            <BookRow  className="mt-5" fetchUrl={requests.fetchFamilyBooks} />
            <BookRow  className="mt-5" fetchUrl={requests.fetchTravelBooks} />
            <BookRow  className="mt-5" fetchUrl={requests.fetchYoungAdultsBooks} />
              

            </div>
        </div>
    )
}

export default BooksList
