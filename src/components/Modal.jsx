import { GlobalContext } from "../context/Context";

const Modal = () => {

  const {selectedMeal, closeModal} = GlobalContext();
  const {strSource:source,strMealThumb:image,strInstructions:text,strMeal:title} = selectedMeal;
  return <aside className='modal-overlay'>
    <div className="modal-container">
      <div className="modal-image">
        <img src={image} className="img modal-img" />
      </div>
      <div className='modal-content'>
        <h4>{title}</h4>
        <p>Cooking Instructions</p>
        <p> {text}</p>
        <a href={source} target="_blank">Original Source</a>
        <button className="btn btn-hipster close-btn" onClick={closeModal}>close</button>
      </div>
    </div>
  </aside>
}

export default Modal;