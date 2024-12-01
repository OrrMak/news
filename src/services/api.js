// const BASE_URL = 'http://api.mediastack.com/v1/news';

// export function fetchNews(articleId=null) {
//     const params = {
//         languages: 'en',
//         countries: 'us,il,ae',
//         access_key: import.meta.env.VITE_API_KEY;
//         keywords: "Israel,Palestine",
//         limit: 10
//     };
    
//     const urlParams = new URLSearchParams(params).toString();

//     // If articleId is provided, fetch a specific article
//     if (articleId) {
//         return fetch(`${BASE_URL}/${articleId}?${urlParams}`)
//             .then(res => res.json())
//             .then(res => res);
//     }
//     // Otherwise, fetch a list of articles
//     return fetch(`${BASE_URL}?${urlParams}`)
//         .then(res => res.json())
//         .then(res => {
//             return res;
//         });
// }


// const API_KEY = 'your_mediastack_api_key';
// const BASE_URL = 'http://api.mediastack.com/v1';

// export const fetchNews = async (query = 'technology', limit = 10) => {
//     try {
//         const response = await fetch(`${BASE_URL}/news?access_key=${API_KEY}&keywords=${query}&limit=${limit}`);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.statusText}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching news:', error);
//         throw error;
//     }
// };