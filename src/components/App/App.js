import './App.css';
import { Routes, Route } from 'react-router-dom';
import MenuPage from '../../Pages/MenuPage';
import HomePage from '../../Pages/HomePage';
import NotFound from '../../Pages/NotFound';

/**
 * TODOs:
 * - Add option to show entire menu on a single page
 * - Add Landing Page (ReactAJAX?)
 *     + Google Maps Applet
 *     + Pictures of the place?
 * - Possibly implement a mock "cart" system.
 * 
 * @returns the main view for this React project.
 */
export default function App() {
  return (
    <Routes>
      <Route exact path='/menu' element={ <MenuPage /> }/>
      <Route exact path='/' element={ <HomePage /> }/>

      {/* Must be the last! */}
      <Route path='*' element={ <NotFound /> }/>
    </Routes>
  )
}