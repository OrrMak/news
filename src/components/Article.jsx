import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNews } from "../utils/api.js";


function Article() {
  const {articleId}=useParams();
  const [article,setArticle]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,serError]=useState(null);

  useEffect(()=>{
    const fetchArticle = async ()=>{
      try{
        const response=await fetch('')
      }
    }
  })

  return (
    <div>Article</div>
  )
}

export default Article