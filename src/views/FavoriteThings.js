//for favorite foods(yelp api), favorite locations(maps api)

import React from 'react';
import FavoriteFoods from '../components/FavoriteFoods';

import yelp from "../api/yelp";
import maps from "../api/maps";

const FavoriteThings = () => {
    return ( 
        <div>
            <FavoriteFoods/> 
        </div>
     );
}
 
export default FavoriteThings;