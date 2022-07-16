import React , {useState , useEffect} from 'react';
import axios from 'axios';

import './PopularSingleBookRow.css';

const PopularSingleBookRow = ({__fetchUrl}) => {
    const [PopularbooksList , setPopularBooksList] = useState([]);
    
    
    useEffect(() => {
      // ASYNC FUNCTION
      async function fetchPopularBook() {
         const request =  await axios.get(__fetchUrl);
         setPopularBooksList(request.data.results.books);
        
         return request;

      }

      fetchPopularBook();
    }, [__fetchUrl]);

   
    return (
        <React.Fragment >
          
            {PopularbooksList.map((popularBook , i) => (
             <div key={i} className="popular-book-single">

             <img src={popularBook.book_image} alt={popularBook.title} className="popular-bookCover__img " />
           <div className="popular-book-info">
           <h4 className="authorCover__title">{popularBook.title}</h4>
             <h5>Rank {popularBook.rank} </h5>          
             <p className="bookCover__description">{popularBook.description.slice(0 , 50)}</p>
             <p>Link To  <a href={popularBook.amazon_product_url}>Amazon</a> </p>
             <p className="popularBook__author"> By: {popularBook.author} </p>
           </div>
           
             {/* <StarIcon /> */}

         </div>
            ))}
        </React.Fragment>
    )
}

export default PopularSingleBookRow
