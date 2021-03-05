import React, {useState, useEffect, useRef} from 'react'
import './App.css';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Project1 from './components/Project1/Project1'
import Project2 from './components/Project2/Project2'
import Project3 from './components/Project3/Project3'
import AboutMe from './components/AboutMe/AboutMe'
import DotIndicator from './components/DotIndicator/DotIndicator'
import Contact from './components/Contact/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState();
  const [scrollDist, setScrollDist] = useState(0);

  function logit() {
    setScrollDist(window.pageYOffset);
    // console.log(new Date().getTime());
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  const vh = 82;
  const scrolloffset = (window.innerHeight / 100 * vh) 
  const vh2 = 20;
  const scrolloffsetdif = (window.innerHeight / 100 * vh2);

  useEffect(()=> {
    if (scrollDist >= 0 && scrollDist < scrolloffset - scrolloffsetdif) {
      setCurrentPage("home")
    } else if (scrollDist >= scrolloffset - scrolloffsetdif && scrollDist < 2 * scrolloffset - scrolloffsetdif ) {
      setCurrentPage("project1")
    } else if (scrollDist >= 2 * scrolloffset - scrolloffsetdif && scrollDist < 3 * scrolloffset - scrolloffsetdif ) {
      setCurrentPage("project2")
    } else if (scrollDist >= 3 * scrolloffset-scrolloffsetdif && scrollDist < 4 * scrolloffset-scrolloffsetdif) {
      setCurrentPage("project3")
    } else if (scrollDist >= 4 * scrolloffset-scrolloffsetdif  && scrollDist < 5 * scrolloffset-scrolloffsetdif) {
      setCurrentPage("about")
    } else if (scrollDist >= 5 * scrolloffset-scrolloffsetdif) {
      setCurrentPage("contact")
    }
  },[scrollDist])

  // window.addEventListener('scroll',() => {handleScroll()} )

  useEffect(()=> {
    setCurrentPage("home")
  }, [])
  
  return (
    <div className="App">
      <Nav 
        setCurrentPage={setCurrentPage}
      />
      <Home/>
      <Project1/>
      <Project2/>
      <Project3/>
      <AboutMe/>
      <Contact/>
      <DotIndicator 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage}
        scrollDist={scrollDist}
      />
    </div>
  );
}

export default App;
