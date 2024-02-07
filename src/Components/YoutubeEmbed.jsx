import React from 'react'
import { useGlobelContext } from './Context/ProductContext'
import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";


const options = {
  method: "GET",
  url: "https://movies-api14.p.rapidapi.com/shows",
  headers: {
    "X-RapidAPI-Key": "9bc5f5c4f9msh1da6c3b02d67669p119d05jsn0628eda9cebf",
    "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
  },
};


function YoutubeEmbed() {
  const{var1,videos,setVideos}=useGlobelContext()


  useEffect(() => {
        
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log("this is ", response.data);
        const a = response.data.movies;
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
    <div>
    <h1>sdflsj{var1}</h1>
    </div>
  )
}

export default YoutubeEmbed