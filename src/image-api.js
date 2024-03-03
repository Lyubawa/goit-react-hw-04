import axios from "axios"

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (searchQuery) => {
    const response = await axios.get("/photos", {
        params: {
            query: searchQuery,
            client_id: "cswiz_hNylYQ32QPH8pmdrnRSyvGkKdHK3VeITwHtIA",
            perPage: 10,
        }
    });
    return response.data;
}