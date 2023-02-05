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
  const [showModal,setShowModal] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);

  function selectMeal (idMeal,favoriteMeal){
    let meal;
    meal= meals.find((meal)=> meal.idMeal === idMeal);
    setSelectedMeal(meal);
    console.log(meal);
    setShowModal(true);
  }

  function closeModal(){
    setShowModal(false);
  }
  

  return (
    <AppContext.Provider
      value={{ meals, loading , error, setSearchTerm ,fetchRandomMeal, showModal ,selectMeal , selectedMeal , closeModal}}
    >
      {children}
    </AppContext.Provider>
  )
}

export  {AppProvider};