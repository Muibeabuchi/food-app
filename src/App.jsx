import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
import Favorites from './components/Favorites';
import './App.css';
import { GlobalContext } from './context/Context';


const App = () => {
  
  const {showModal = false,favorites} = GlobalContext();

  return (
    <main>
      <Search />
      {favorites?.length >0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </main>
  )
}

export default App;