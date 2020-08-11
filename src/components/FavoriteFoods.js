import React, {useState} from 'react';
import styled, {css} from 'styled-components';

import useYelpBusinesses from '../hooks/useYelpBusinesses';

//react styled components must be caps (as is the standard for all react components)
const FavoriteSelectShell = styled.button`
    border: 2px solid black;
    margin: 10px;

    ${props =>
        props.primary &&
        css`
          background: palevioletred;
          color: white;
        `};
`



const FavoriteFoods = () => {
    //will pass search terms based on what someone clicks.  Ie. create clickable elements and pass in search term based on that
    //if there are issues with passing data, just load them all and render null for everything not selected. 
    
    // const [term, setTerm] = useState('');
    const [yelpSearchApi, business, errMessage] = useYelpBusinesses();

    //only call one search term based on which element is clicked
    console.log(business);
    return ( 
        <div>
            <div style={styles.selectContainer}>
                <FavoriteSelectShell onClick={() => yelpSearchApi('dragonfly')}>sushi</FavoriteSelectShell>
                <FavoriteSelectShell onClick={() => yelpSearchApi('leonardos')}>pizza</FavoriteSelectShell>
                <FavoriteSelectShell onClick={() => yelpSearchApi('embers')}>Steak</FavoriteSelectShell>
                {/* display error message if one of the button requests to yelp doesn't work out */}
                { errMessage ? 
                    <p>{errMessage}</p> 
                    :null
                }
            </div>
        </div>
     );
}

const styles = {
    selectContainer: {
        display: "inline-block"
    }
}
 
export default FavoriteFoods;