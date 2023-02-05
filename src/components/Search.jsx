import { GlobalContext } from "../context/Context";
import { useState } from "react";

const Search = () => {
  // const [randomMeal, setRandomMeal] = useState([]);
  const {setSearchTerm , fetchRandomMeal} = GlobalContext();
  const [text,setText] = useState('');

  // async function fetchRandomMeal(url){
  //   try {      
  //     const {data} = axios.get(url);
  //     data && setRandomMeal(data.meals)
  //   } catch (error) {
      
  //   }
  // }

  function handleRandomMeal () {
    // setSearchTerm('')
    setText('')
    fetchRandomMeal();
  }

  function handleChange(e){
    setText(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    if(text){
      setSearchTerm(text);
    }
  } 
  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-input" placeholder="type favorite meal" value={text} onChange={handleChange}/>
        <button className="btn" type="submit">Search</button>
        <button className="btn btn-hipster" type="button" onClick={handleRandomMeal}>Surprise Me</button>
      </form>
    </header>
  )
}

export default Search