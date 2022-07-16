import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import HeroArea from './HeroArea';
import TopBooks from './TopBooks';
import AuthorsWeek from './AuthorsWeek';
import PopularBooks from './PopularBooks';



const App = () => {
    return (
        <div className="app" >
            <Navbar />
            <div className="app__mainPage">
               
            <Sidebar />
           
            <HeroArea />
           
            </div>
            <TopBooks />
            <div className="app__subPage ">
                 <AuthorsWeek />
                <PopularBooks   /> 
            </div>

        </div>
    )
}

export default App
