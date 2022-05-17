import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import StorieButton from './Components/StorieButton/StorieButton'
import Home from './Routes/Home/Home'
import Profile from './Routes/Profile/Profile'
import dolor from 'dolor'

const postQuantity = 12
let posts = []

for (let i = 0; i < postQuantity; i++) {

  let randomUsername = dolor.words(1)+'_'+dolor.words(1)

  let postTemplate = {
    profilePicture:<StorieButton link={`/profile`} linkState={{profilePicture: `https://picsum.photos/1024?random=${Math.random()}`, profileName: randomUsername}} alt={"Foto de perfil"} />,
    profileName: randomUsername ,
    photo: <img className='post-image-button-photo' src={`https://picsum.photos/1024?random=${Math.random()}`} />,
    title: dolor.words(4)
  }

  posts.push(postTemplate)
}


function App(props) {
  const [statePosts, setstatePosts] = React.useState(posts)
  return (
      <Routes >
        <Route path="/" element={<Home statePosts={statePosts} setstatePosts={setstatePosts} />} />
        <Route path="/profile" element={<Profile/>} />
        <Route
          path="*"
          element={
            <main style={{ padding: "15vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h1>A princesa esta em outro castelo! :'( </h1>
            </main>
          }
        />
      </Routes>
  )
}

ReactDOM.render(
  < BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);
