import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDetail/movieDetail";
function App() {
  return (
    <div className= " text-white font-sans bg-black">
      <Router>
       <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path ="movies/:type" element={<MovieList/>}></Route>
          <Route path ="/" element={<h1>Error page</h1>}></Route>
        </Routes>
        <div>
          <h1 className="wt-1/2 h-20"></h1>
        </div>
      </Router>
    </div>
  );
}

export default App;
