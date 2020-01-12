import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer xXmUj9mzekbk5j6jdAe7uj_j6BImnz9VCX08upLy2vC_jcoXSBkr3fB_2JXDBrYid_JAvqCeIts80pC4iBlbyypnVbfvhJ2qJRVcwdm3dTpWKhiyee2ZnqdvQOQaXnYx'
    }
});

