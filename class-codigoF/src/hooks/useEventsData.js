import { useState, useEffect } from "react";
import eventsJSON from "../data/events.json";

const useEventsData = () => {
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError]=useState();
  useEffect(() => {
    setTimeout(() => {
        try{
            setData(eventsJSON);
            setIsLoading(false);
        }catch(error){
            setError(error)
        }
    }, 3000);
  }, []);
  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
  };
};

export default useEventsData;
