import axios from 'axios';

//if major error it is likely because i am authorizing more than one app with the same key. 
//https://api.yelp.com/v3/businesses/{id}
//Fixed cors issue by adding a proxy
export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses',
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        Authorization: 'Bearer Zk-u960qzR6df9BF5SFq03hWj8XYvOGHBCxdcQUTYaQ0pHjNrlBG3kywtVgHrNVCexnHk8kb3fxIPGoy64afQorGttipkNVTbwQRIX2128HRT0ay2dMK98xdB38yX3Yx',
        
    }
})
