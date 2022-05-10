import * as React from 'react'
import '../src/reset.css'
import '../src/main.css'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'
import PostContainer from './Components/PostContainer/PostContainer'
import Footer from './Components/Footer/Footer'

function App() {
  const postContainer = React.useRef()

  return (
    <div className="page-wrapper">
        <Header postContainer={postContainer}/> 
        <Carousel/>  
        <PostContainer  referencia={postContainer}/>
        <Footer/>
    </div>
  );
}

export default App;
