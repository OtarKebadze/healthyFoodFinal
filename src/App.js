import './App.css';
import ItemDetailContainer from './Components/listContainer/itemDetailContainer';
import ItemListContainer from './Components/listContainer/ItemListContainer';
import NavBar from './Components/navbar/navbar';


function App() {
  return (
  <div>
  <NavBar/>
  <ItemListContainer />
  <ItemDetailContainer />
  </div>)
}

export default App;
