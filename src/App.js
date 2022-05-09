import * as React from 'react'
import '../src/reset.css'
import '../src/main.css'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'

function App() {
  return (
    <div className="page-wrapper">
        <Header/>  
        <Carousel/>  
    </div>
  );
}

export default App;
