import axios from 'axios';

//if major error it is likely because i am authorizing more than one app with the same key. 
export default axios.create({
    //https://api.yelp.com/v3/businesses/{id}
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer apHCg3_x-6_NzY1NOQSJyQURtBwc40I4mlAZxgkdQoVIL_8ncbexIlFL1Jhoi74ShiaiJE413-yXOzDZKyJfsJsxXWK-xKdqSXp67pL0zREvCfFLiZVfbcWcFc0iX3Yx'
    }
})
