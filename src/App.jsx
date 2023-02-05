import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
import Favorites from './components/Favorites';
import './App.css';
import { GlobalContext } from './context/Context';


const App = () => {
  
  const {showModal} = GlobalContext();

  return (
    <main>
      <Search />
      {/* <Favorites /> */}
      <Meals />
      {showModal && <Modal />}
    </main>
  )
}

export default App;