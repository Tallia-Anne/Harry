
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";




import Home from './Components/Page/Home';
import Header from './Components/Header';
import Characters from './Components/Page/Characters'
import House from './Components/Page/House';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="house" element={<House />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
