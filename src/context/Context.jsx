import React, { useState, useContext } from 'react'
import { useAxios } from '../custom_hooks/useAxios';

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

export const GlobalContext =()=>{
    return useContext(AppContext);
}



const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const {response:{meals},loading,error, fetchRandomMeal} = useAxios(allMealsUrl,searchTerm,randomMealUrl);
  const [showModal,setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorites, setFavorites] = useState(getFavoritesLocalStroage()||[]);

  function getFavoritesLocalStroage(){
    let favorites = localStorage.getItem('favorites');
    if(favorites){
      favorites = JSON.parse(localStorage.getItem('favorites'));
    }else{
      favorites= [];
    }
    return favorites;
  }
  

  function addFavorites (idMeal){
    const meal = meals.find((meal)=> meal.idMeal === idMeal );
    const alreadyFavorite = favorites.find((fav) => fav.idMeal === idMeal);
    if (alreadyFavorite) return;
    const updatedFavorites = [...favorites,meal];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites',JSON.stringify(updatedFavorites));
    console.log(updatedFavorites);
  }

  function removeFavorites (idMeal){
    const updatedFavorites = favorites.filter((fav)=> fav.idMeal !== idMeal);
    setFavorites(updatedFavorites);
  }


  function selectMeal (idMeal,favoriteMeal){
    let meal;
    if(favoriteMeal){
      meal = favorites.find((fav)=> fav.idMeal === idMeal );
    }else{
      meal= meals.find((meal)=> meal.idMeal === idMeal);
    }
    setSelectedMeal(meal);
    setShowModal(true);
    // console.log(meal);
  }

  function closeModal(){
    setShowModal(false);
  }
  

  return (
    <AppContext.Provider
      value={{ meals, loading , error, setSearchTerm ,fetchRandomMeal, showModal ,selectMeal , selectedMeal , closeModal , addFavorites, removeFavorites, favorites }}
    >
      {children}
    </AppContext.Provider>
  )
}

export  {AppProvider};