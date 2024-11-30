import React, { useEffect, useState } from "react";
import NewsCard from './NewsCard.jsx';
import './CardList.css'
// import { fetchNews } from "../utils/api.js";
import './../../public/localData.json'
import { v4 as uuidv4 } from 'uuid';


function CardList() {

    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);
    const [articles,setArticles]=useState([]);

//real api fetch

    // useEffect(()=>{
    //     const loadCards = async ()=>{
    //         try{
    //             const data= await fetchNews(); 
    //             if(data.data){
    //                 setArticles(data.data);
    //                 console.log(data.data); // Test response data
    //             }
    //             else{
    //                 throw new Error("Unexpected API response format");
    //             }
    //         }
    //         catch(error){
    //             setError(error.message);
    //             console.log(error);
    //         }
    //         finally {
    //             setIsLoading(false); // Ensure loading state is reset regardless of success or error
    //         }
    //   };

    //   loadCards();
    // },[]);

//local Api fetch 
    useEffect(()=>{
        fetch('/localData.json')
        .then(response=>{
            if (!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); 
        })
        .then(data=>setArticles(data))
        .catch((error)=> {
            setError(error.message);
            console.log(error);
        })
        .finally(()=>{
            setIsLoading(false);
        });
    },[])

    if(isLoading){
        return(
            <div>Loading News..</div>
        )
    }
    if(error){
        return(
            <div>Error:{error}</div>
        )
    }

    return (
        <section id='CardList'>
            {articles.map((article,index)=>(
                <NewsCard
                    key={index}   // Use index temporarily as the key
                    title={article.title}
                    author={article.author}
                    date={article.published_at}
                    image={article.image || "default-image-url.jpg"}
                    source={article.source || "Unknown"}
                    country={article.country}
                    url={`/article/${article.id}`}  
                />
            ))}
        </section>
  )
}

export default CardList