import axios from "axios"

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (searchQuery, page) => {
    const response = await axios.get("/search/photos", {
        params: {
            query: searchQuery,
            client_id: "cswiz_hNylYQ32QPH8pmdrnRSyvGkKdHK3VeITwHtIA",
            per_page: 12,
            orientation: "landscape",
            page,
        }
    });
    return response.data.results;
}