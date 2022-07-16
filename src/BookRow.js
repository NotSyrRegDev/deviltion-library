import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './BookRow.css';


const BookRow = ({fetchUrl}) => {
    const [booksList , setBooksList] = useState([]);
    const [objectList , setObjectList] = useState([]);
    
    useEffect(() => {
      // ASYNC FUNCTION
      async function fetchMyBook() {
        
         const request =  await axios.get(fetchUrl);
         setBooksList(request.data.results.books);
         setObjectList(request.data.results);
         return request;

      }

      fetchMyBook();
    }, []);


    return (
        <React.Fragment>
            
             <h1> {objectList.list_name} Books </h1>
             <div className="books_list_grid">
                
           
            <div className="g-col-3">
            {booksList.map((book , i) => (
                <div className="book-single" key={i} >

                <img src={book.book_image} alt={book.title} className="bookCover__img " />
              
                <h4 className="authorCover__title">{book.title}</h4>
                <h5>Rank {book.rank} </h5>
               
                
                <p className="bookCover__price">Price: {book.price}</p>
                
               
                <h5 className="categoryBook">{objectList.rank}</h5>


                <p>Link To  <a href={book.amazon_product_url}>Amazon</a> </p>
                {/* <StarIcon /> */}

            </div>
            ))}
            </div>
            </div>
            
            </React.Fragment>
    )
}

export default BookRow;
