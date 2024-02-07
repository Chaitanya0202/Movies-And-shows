import React from 'react'
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useGlobelContext } from './Context/ProductContext';



const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '9bc5f5c4f9msh1da6c3b02d67669p119d05jsn0628eda9cebf',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };
  
function Movies() {
    const [videos, setVideos] = useState([]);
    const{var1,setVar1}=useGlobelContext();
    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await axios.request(options);
            console.log("this is ", response.data);
            const a = response.data;
            setVideos(a);
            console.log(videos);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData(); // Call the async function immediately
    
        // If you need cleanup logic, return a cleanup function here
      }, []); // The empty dependency array ensures the effect runs once on mount


  return (
    <>
    <div>Movies</div>


    <div className="d-flex flex-wrap justify-content-center">
    {videos.map((t, index) => (
      <Link
        className="card shadow m-2 "
        style={{ width: "18rem" }}
        key={index}
        
        to={t.imdb_link}

      >
        <img src={t.big_image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{t.title}</h5>
          <p
            className="card-text "
            style={{
              maxHeight: "100px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {t.strCategoryDescription}
          </p>
        </div>
      </Link>
    ))}
  </div>
  </>

  )
}

export default Movies