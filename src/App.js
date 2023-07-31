import './App.css';
import GetMovies from './Components/GetMovies';
import Navbar from './Components/Navbar/navbar';
import GetMovieDetails from './Components/MovieDetails/details';

function App() {
  return (
    <div>
       <Navbar/>
      <GetMovies/>
      <GetMovieDetails/>
     
    </div>
  );
}
export default App;

