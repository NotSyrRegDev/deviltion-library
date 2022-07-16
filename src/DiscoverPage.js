import React, { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import './DiscoverPage.css';
import axios from 'axios';
import {BooksArray} from './TopBooks';
const API_KEY = process.env.REACT_APP_SECRET_KEY;


const DiscoverPage = () => {
    const [discoverArray , setDiscoverArray] = useState([]);
    const [itemShow , setItemsShow] = useState(2);
    const [size , setSize] = useState(window.innerWidth);

   

    useEffect(() => {
     // ASYNC FUNCTION
     async function fetchMyDiscover() {
        const randomNum = Math.floor(Math.random() * 48);
        const request =  await axios.get(`https://api.nytimes.com/svc/books/v3/lists/${BooksArray[randomNum]}.json?api-key=${API_KEY} `);
 
   
        setDiscoverArray(request.data.results.books);
       
        return request;

     }

     fetchMyDiscover();
     handleShow();
    }, []);
    const handleShow = () => {
        const mediaQuery = window.matchMedia('(max-width: 968px)');
      
        if (mediaQuery.matches) { setItemsShow(1) }
       
        else { setItemsShow(2) }
    }

    useEffect(() => {
        function handleSize () {
           setSize(window.innerWidth);

        }
        window.addEventListener('resize' , handleSize);
       
        handleShow();
    
    } , [size])
   
   
    
    
    return (
        <div className="discoverPage" >
            <h1  >Discover</h1>
            <div className="">
            <Carousel itemsToShow={itemShow} > 
                {discoverArray.map((discover , i) => (
          <div className="hero-discover" key={i} >
           <img  src={discover.book_image} alt="" />
          </div>
                ))}
                </Carousel>
                
               
            </div>
        </div>
    )
}

export default DiscoverPage
