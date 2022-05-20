
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";




import Home from './Components/Page/Home';
import Header from './Components/Header';
import Characters from './Components/Page/Characters'
import House from './Components/Page/House';
import Griffindor from './Components/Page/Griffindor';
import Sort from './Components/Page/Sorts';
import Footer from './Components/Footer';


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
          <Route path="sort" element={<Sort />} />
         

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
