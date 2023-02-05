import './App.css';
import { Footer, Blog, Possiblity, Features, WhatGPT3, Header } from './Containers';
import { CTA, Brand, Navbar } from './Comp';


function App() {
  return (
    <>   
    <div className='gradient__bg'>
    <Navbar/>
    <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possiblity/>
    <CTA/>
    <Blog/>
    <Footer/>
    </>
  );
}

export default App;
