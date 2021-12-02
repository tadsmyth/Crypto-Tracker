import axios from 'axios';

export default axios.create({
    baseURL: "https://api.coingecko.com/api/v3"
})


// Axios is a tool for handeling https requests and making it easier to do APIs.
//This axios object is storing the baseURL for my call and will make refrenceing it later for different endpopints easier.