
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";




import Home from './Components/Page/Home';
import Header from './Components/Header';
import Characters from './Components/Page/Characters'
import House from './Components/Page/House';
import Griffindor from './Components/Page/Griffindor';
import Sort from './Components/Page/Sorts';
import Footer from './Components/Footer';
import Erreur from './Components/Page/Erreur/Pageerreur'
import Ravenclaw from './Components/Page/Ravenclaw';
import Serpent from './Components/Page/Serpent';
import Hufflepuff from './Components/Page/Hufflepuff';
import Book from './Components/Page/Book/book';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="house" element={<House />} />
          <Route path="griffindor" element={<Griffindor />} />
          <Route path="ravenclaw" element={<Ravenclaw />} />
          <Route path="serpent" element={<Serpent />} />
          <Route path='hufflepuff' element={<Hufflepuff />} />
          <Route path="sort" element={<Sort />} />
          <Route path="book" element={<Book />} />
          <Route path="*" element={<Erreur/>} />
         

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
