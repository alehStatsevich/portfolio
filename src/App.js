
import React from 'react';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./myWorks/MyWorks";
import Contact from "./contact/Contact";
import Footer from "./icons/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <MyWorks/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
