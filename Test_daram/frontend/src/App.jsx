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
import Timetable from './components/Timetable'
import React, { component } from 'react';
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
          <Route path="/timetable" element={<Timetable />}></Route>
          <Route path="/api" element={<Timetable />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



function App {
  state = {
      posts: []
  };

  async function componentDidMount() {
      try {
          const res = await fetch('http://127.0.0.1:8000/api/');
          const posts = await res.json();
          this.setState({
              posts
          });
      } catch (e) {
          console.log(e);
      }
  }
  return (
    <div>
        {this.state.posts.map(item => (
            <div key={item.id}>
                <h1>{item.title}</h1>
                <span>{item.content}</span>
            </div>
        ))}
    </div>
);
        }

