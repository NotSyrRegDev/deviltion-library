import React from 'react';
import './HeroArea.css';
import DiscoverPage from './DiscoverPage';
import BooksList from './BooksList';

const HeroArea = () => {
    return (
        <div className="heroArea" >
            
            <DiscoverPage />
            <BooksList />
        </div>
    )
}

export default HeroArea
