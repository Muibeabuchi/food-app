import { useState, useEffect } from 'react';
import axios from 'axios';

// axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';

// /**
//  fixed :
//   - no need to JSON.stringify to then immediatly do a JSON.parse
//   - don't use export defaults, because default imports are hard to search for
//   - axios already support generic request in one parameter, no need to call specialized ones
// **/
export const useAxios = (url,searchTerm,url2) => {

    const controller = new AbortController();
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async (link) => {
      try {
       const {data} = await axios.get(link,{
        signal:controller.signal
       });
       data && setResponse(data);
      //  console.log(data.meals);
       } catch( error ) {
         setError(error.response);
       } finally {
         setLoading(false);
       }
    };

    // useEffect(()=>{
    //   fetchData(url)
    // },[]);
    
    useEffect(() => {
      // if (!searchTerm) return;
      fetchData(`${url}${searchTerm}`);

    //   return () => {
    //     // cancel the request before component unmounts
    //     controller.abort();
    // };
    }, [searchTerm]); // execute once only
    
    const fetchRandomMeal=()=>{
      fetchData(url2);
    };

    return { response, error, loading, fetchRandomMeal  };
};