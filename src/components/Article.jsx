import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {changeMood} from '../services/articleService.js';
// import { fetchNews } from "../utils/api.js";

function Article() {
  const {articleId}=useParams();

  const [article,setArticle]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  const [chilling,setChilling]=useState(false);

  useEffect(()=>{
    const fetchSingleArticle = async () =>{
      try{
        const response = await fetch('/localData.json');
        if (!response.ok){
          throw new Error('Failes to fetch articles in ArticlePage');
        }
        const data= await response.json();

        const decodedArticleId = decodeURIComponent(articleId);
        console.log("Decoded Article ID from URL:", decodedArticleId);

        const singleArticle = data.find((article) => {
          const generatedId  = `${encodeURIComponent(article.title.replace(/\s+/g, '-').toLowerCase())}-${encodeURIComponent(article.published_at)}`;
          const normalizedGeneratedId = decodeURIComponent(generatedId); // Normalize encoding
          
          console.log("Generated ID (Normalized):", normalizedGeneratedId);
          console.log("Decoded ID:", decodedArticleId);

          if( normalizedGeneratedId === decodedArticleId){
            console.log("Match Found:", article);
          }
          return normalizedGeneratedId === decodedArticleId;
        });

        if(!singleArticle){
          console.error('Article not found. Decoded ID:', decodedArticleId);
          throw new Error('Single article not found');
        }
          console.log("Found article:", singleArticle);
          setArticle(singleArticle);
      }
      catch(error){
        setError(error);
      }
      finally{
        setLoading(false);
      }
    };

    fetchSingleArticle();
  },[articleId]); /// this will run each time the articleID in the url changes.
  
  if(loading){ return( <>Loading Article...</>)}
  if(error){return (<div>ERROR: {error.message} </div>)}

  const handleModification = async ()=>{
    setChilling(true);
    try{
        const modifiedArticle=await changeMood({
        title: article.title,
        description: article.description
      });
      console.log('origin title: ', article.title);
      console.log('origin description: ', article.description);

      setArticle((originArticle)=>({
      ...originArticle,
      title: modifiedArticle.title,
      description: modifiedArticle.description,
      }));
    console.log('new title: ', modifiedArticle.title);
    console.log('new description: ', modifiedArticle.description);
  }
  catch(error){
    console.error("Error updating article mood:", error);
  } finally {
    setChilling(false);
  }
};

  return (
    <div id='articleContainer'>
      <h2>{article.title}</h2>
      <p>By: {article.author}</p>
      <p>{article.country}</p>
      <p>{article.category}</p>
      <p>{article.source}</p>
      <p>{article.description}</p>
      <p>Date: {article.published_at}</p>
      <button id="chillPillButton" onClick={handleModification} disabled={chilling}>
      {chilling? "chilling..." : "Take A CHILL PILL"}
      </button>
      <img src={article.image || "default-image-url.jpg"} alt="" />
    </div>
  )
}

export default Article