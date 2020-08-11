import { useEffect, useState } from 'react';

import yelp from '../api/yelp';

export default () => {
    const [business, setBusiness] = useState([]);
    const [errMessage, setErrorMessage] = useState('');


    const yelpSearchApi = async (searchTerm) => {
        console.log('yelp search function reached', searchTerm);
        
        try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 1, 
                    term: searchTerm,
                    location: 'gainesville'
                }
            });
            //limiting to call one business at a time
            setBusiness(response.data.businesses);
            setErrorMessage("");
        } catch (e) {
            console.log(e);
            setErrorMessage("something went wrong when connecting to Yelp");
        }
    }

    useEffect(() =>{
        yelpSearchApi('dragonfly');
    }, []);

    return [yelpSearchApi, business, errMessage];
}