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
import Services from './components/Service/Services'
import Timetable from './components/Timetable'
import Test from './components/Order/Test'

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
          <Route path="/profession.html"></Route>
          <Route path="/teacher.html"></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/timetable" element={<Timetable />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;