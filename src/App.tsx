import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Routes, Route, NavLink} from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='/ressources'>Ressources</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/ressources' element={ <Ressources/>}/>
      </Routes>
    </>
  );
}

export default App;
