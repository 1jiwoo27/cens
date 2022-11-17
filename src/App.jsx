//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header'
import Main from './Main'
import Home from './components/Home'
import Info from './components/Order/Info'
import AboutUs from './components/AboutUs'
import Recommend from './components/Order/Recommend'
import Roadmaps from './components/Roadmap/Roadmaps'
import Roadmap1 from './components/Roadmap/Roadmap1'
import Roadmap2 from './components/Roadmap/Roadmap2'
import Roadmap3 from './components/Roadmap/Roadmap3'
import Services from './components/Service/Services'

//css
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/recommend" element={<Recommend />}></Route>
          <Route path="/roadmaps" element={<Roadmaps />}></Route>
          <Route path="/roadmaps/roadmap1" element={<Roadmap1 />}></Route>
          <Route path="/roadmaps/roadmap2" element={<Roadmap2 />}></Route>
          <Route path="/roadmaps/roadmap3" element={<Roadmap3 />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;