import React , {useState , useEffect} from 'react';
import './PopularBookRow.css';
import PopularSingleBookRow from './PopularSingleBookRow';
import requests from './requests';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';


const BaseUrl = 'https://api.nytimes.com/svc/books/v3/lists/';
const API_KEY = process.env.REACT_APP_SECRET_KEY;


const PopularBookRow = () => {
    const [urlFetch , setUrlFetch] = useState(requests.fetchFamilyBooks);
    const [listsArray , setListsArray] = useState([]);
    
    const [itemShow , setItemsShow] = useState(4);
    const [size , setSize] = useState(window.innerWidth);


    useEffect(() => {
        // ASYNC FUNCTION
        async function fetchPopularBook() {
           const request =  await axios.get(requests.fetchLists);
           setListsArray(request.data.results);
          
           return request;
  
        }
  
        fetchPopularBook();
      }, []);

     
      const handleShow = () => {

       
        const mediaQuery__med = window.matchMedia('(max-width: 768px)');
        const mediaQuery__small = window.matchMedia('(max-width: 668px)');
      
        if (mediaQuery__small.matches) { setItemsShow(1) }
       else if (mediaQuery__med.matches) { setItemsShow(2) }
      else if (mediaQuery__small.matches) { setItemsShow(3) }
       
        else { setItemsShow(4) }
    }

    useEffect(() => {
        function handleSize () {
           setSize(window.innerWidth);

        }
        window.addEventListener('resize' , handleSize);
       
        handleShow();
    
    } , [size])

  //  setUrlFetch(requests.fetchBussinesBooks);
    return (
        <div className="popularBookRow" >
             <div className="category-section">
            <div className="">
                <h1 className="headline--category my-2">Popular By Categories</h1>
                <div className="categories-box">
                    <h6 className="category-sub all-genr" id="changed"> Family Books </h6>
                    <Carousel itemsToShow={itemShow} >
                        
                    {listsArray.map((list , i) => {
                      
                        return (
                            <React.Fragment key={i} >
                           
                            <h5 className="category-sub" onClick={() => { setUrlFetch(`${BaseUrl}current/${list.list_name_encoded}.json?api-key=${API_KEY}`); document.getElementById('changed').textContent = `${list.list_name} Books`}   } >{list.list_name}</h5>
                           
                            </React.Fragment>
                        );
                      
                  })}
                    </Carousel>
                   
                </div>
            </div>
            </div>
            <div className="g-col-2">
            <PopularSingleBookRow __fetchUrl={urlFetch} />
            </div>
         
        </div>
    )
}

export default PopularBookRow
