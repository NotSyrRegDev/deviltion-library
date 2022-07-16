const API_KEY = process.env.REACT_APP_SECRET_KEY;
const BaseUrl = 'https://api.nytimes.com/svc/books/v3/lists/';

const requests = {
    fetchLists : `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`,
    fetchScienceBooks : `${BaseUrl}current/science.json?api-key=${API_KEY}`,
    fetchTravelBooks : `${BaseUrl}current/travel.json?api-key=${API_KEY}`,
    fetchYoungAdultsBooks: `${BaseUrl}current/young-adult-paperback-monthly.json?api-key=${API_KEY}`,
    fetchFamilyBooks: `${BaseUrl}current/family.json?api-key=${API_KEY}`,
    fetchBussinesBooks: `${BaseUrl}current/paperback-business-books.json?api-key=${API_KEY}`,
    fetchRelationshipBooks: `${BaseUrl}current/relationships.json?api-key=${API_KEY}`,
    fetchAnimalsBooks: `${BaseUrl}current/animals.json?api-key=${API_KEY}`,
    fetchFoodBooks: `${BaseUrl}current/food-and-fitness.json?api-key=${API_KEY}`,
    
};

export default requests;