import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const AppContext = createContext();

const options = {
    method: "GET",
    url: "https://movies-api14.p.rapidapi.com/shows",
    headers: {
      "X-RapidAPI-Key": "9bc5f5c4f9msh1da6c3b02d67669p119d05jsn0628eda9cebf",
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  };
  

const AppProvider = ({ children }) => {
  
    const [var1, setVar1] = useState();

    const [videos, setVideos] = useState([]);
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
    <AppContext.Provider
      value={{
        var1,
        setVar1,
        videos,
        setVideos,


      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// costom hook
const useGlobelContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobelContext };
