import { GlobalContext } from "../context/Context";


const Favorites = () => {

  const {favorites,removeFavorites,selectMeal} = GlobalContext();

  return (
      <section className="favorites">
        <div className="favorites-content">
          <h5>Favorites</h5>
          <div className="favorites-container">
            {favorites?.map((fav)=> {
              const {idMeal, strMealThumb:image} = fav;
              return(
                <article className="favorite-item" key={idMeal}>
                  <img src={image} alt="" className="img favorites-img" onClick={()=>selectMeal(idMeal,true)} />
                  <button className="remove-btn" onClick={()=> removeFavorites(idMeal)}>remove</button>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    )
}

export default Favorites