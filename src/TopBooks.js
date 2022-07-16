import React , {useState , useEffect} from 'react';
import './TopBooks.css';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
const API_KEY = process.env.REACT_APP_SECRET_KEY;
// 50

export const BooksArray = ['hardcover-fiction' , 'combined-print-and-e-book-fiction' , 'trade-fiction-paperback' , 'mass-market-paperback' , 'paperback-nonfiction' , 'e-book-fiction' , 'e-book-nonfiction' , 'hardcover-advice' , 'paperback-advice' , 'advice-how-to-and-miscellaneous' , 'hardcover-graphic-books' , 'paperback-graphic-books' , 'manga' , 'combined-print-fiction' , 'combined-print-nonfiction' , 'chapter-books' ,'childrens-middle-grade-paperback' , 'paperback-books' , 'picture-books' , 'series-books' , 'young-adult' , 'young-adult-hardcover' , 'young-adult-paperback' , 'animals' , 'audio-fiction' , 'business-books' , 'celebrities' , 'crime-and-punishment' , 'culture' , 'education' , 'espionage' , 'expeditions-disasters-and-adventures' , 'fashion-manners-and-customs' , 'food-and-fitness' , 'games-and-activities' , 'graphic-books-and-manga' , 'hardcover-business-books' , 'humor' , 'indigenous-americans' , 'relationships' , 'middle-grade-paperback-monthly' , 'paperback-business-books' , 'family' , 'hardcover-political-books' , 'race-and-civil-rights' , 'religion-spirituality-and-faith' , 'science' , 'sports' , 'travel' , 'young-adult-paperback-monthly'];


const TopBooks = () => {

    const [topBooksArray , setTopBooksArray] = useState([]);
    const [itemShow , setItemsShow] = useState(3);
    const [size , setSize] = useState(window.innerWidth);
   

    useEffect(() => {
     // ASYNC FUNCTION
     async function fetchMyDiscover() {
        const randomNum = Math.floor(Math.random() * 48);
        const request =  await axios.get(`https://api.nytimes.com/svc/books/v3/lists/${BooksArray[randomNum]}.json?api-key=${API_KEY} `);
   
  
    setTopBooksArray(request.data.results.books);
       
        return request;

     }

     fetchMyDiscover();
    }, []);

    const handleShow = () => {
        const mediaQuery = window.matchMedia('(max-width: 700px)');
        const mediaQuery__small = window.matchMedia('(max-width: 965px)');
      
        if (mediaQuery.matches) { setItemsShow(1) }
       else if (mediaQuery__small.matches) { setItemsShow(2) }
        else { setItemsShow(3) }
    }

    useEffect(() => {
        function handleSize () {
           setSize(window.innerWidth);

        }
        window.addEventListener('resize' , handleSize);
       
        handleShow();
    
    } , [size])
        
        
  
  
    return (
       
        <div className="topBooks" >
            <h1 className="my-4" >TOP BOOKS</h1>
           <div className="">
           <Carousel itemsToShow={itemShow} > 
           {topBooksArray.map((singleBook , i) => (
             <div className="top-single-book" key={i} >
             <div className="f-sv">
                 <img src={singleBook.book_image} className="top-single-book__image" alt="" />
                 <div className="top-book-info">
                     <h2 className="top-book__title">{singleBook.title}</h2>
                     <p className="top-book__author">By <span className="author-colorize" >{singleBook.author}</span> </p>
                     <p className="top-book__description mt-2">{singleBook.description.slice(0 , 90)}</p>
                     <button className="btn-book-now mt-3">See The Book</button>
                 </div>
             </div>
         </div>
            ))}
            </Carousel>
           </div>
            
           
        </div>
    )
}
export let topBooksArray;

export default TopBooks;
