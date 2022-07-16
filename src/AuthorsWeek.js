import React, { useEffect } from 'react';
import { useState } from 'react';
import './AuthorsWeek.css';

import axios from 'axios';


const AuthorsWeek = () => {
    const [topAuthorsArray , setTopAuthorsArray] = useState([]);
    const [hoverd , setHoverd] = useState(false);
    
    
    

    useEffect(() => {
     
     let i = 0;
     while( i < 5) {
         // ASYNC FUNCTION
     async function fetchMyDiscover() {
       
       
            const request =  await axios.get(`https://randomuser.me/api`);
            //
            setTopAuthorsArray(prevState => [...prevState , ...request.data.results] ) ;
          
          
            return request;
        }
       
      
   // setTopAuthorsArray(request.data.results);
       
   i++;
   fetchMyDiscover();
     }

     


    }, []);
    
   
  //  const styledHover = { nomal: {'border': `none`} , onHovered: {'border': `5px solid #e44213d` } };
   
  
    return (
        <div className="authorsWeek"  >
              
             <h1 className="headline--category">Author Of The Weeks</h1>
             {topAuthorsArray.map((author , i) => (
               <div key={i} className="d-flex" onMouseEnter={  () => setHoverd(true) } onMouseLeave={() => setHoverd(false)}>
               
                   <img  style={ hoverd  ? { border: `5px solid ${author.gender === 'male' ? '#a8f77e' : '#f17ef7'}` } : {border: 'none'} } src={author.picture.large} alt="" className="topAuthor__img" />
                   <h2 className="topAuthor__name"  > {author.name.first} {author.name.last} </h2>
               </div>
             ))}

        </div>
    )
}

export default AuthorsWeek
