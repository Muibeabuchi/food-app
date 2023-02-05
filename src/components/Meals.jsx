import { GlobalContext } from '../context/Context';
import {BiLike} from 'react-icons/bi';


const Meals = () => {
  const { meals,loading, selectMeal} = GlobalContext();
  // console.log(meals);
  if (loading){
    return <section className='section'>
      <h1>Loading...</h1>
    </section> 
  }

  if (!meals ){
    return <section className='section'>
      <h4>No meals matched your search term. Please try again</h4>
    </section>
  }

  
  return <section className="section-center">
    {meals?.map((singleMeal) => {
      const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
     
      return <article key={idMeal} className="single-meal" onClick={()=> selectMeal(idMeal)}>
        <img src={image}  className="img" />
        <footer>
          <h5>{title}</h5>
          <button className='like-btn'>click me <span><BiLike/></span> </button>
        </footer>
      </article>
    })}
  </section>

}

export default Meals;