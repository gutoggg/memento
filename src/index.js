import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Routes/Home/Home'
import Profile from './Routes/Profile/Profile'
import { LoremPicsum } from 'react-lorem-picsum'

let posts = [
  {
    profilePicture: <LoremPicsum className='post-image-button-photo' width={1024} random />,
    profileName: 'gutoggg',
    photo: <LoremPicsum className='post-image-button-photo' width={1024} random />,
    title: 'Teste'
  }
]

function App(props) {
  const [statePosts, setstatePosts] = React.useState(posts)
  return (
    < BrowserRouter >
      <Routes >
        <Route path="/" element={<Home statePosts={statePosts} setstatePosts={setstatePosts} />} />
        <Route path="profile/:profileId/:teste" element={<Profile statePosts={statePosts} setstatePosts={setstatePosts} />} />
        <Route path="profile/:profileId" element={<Profile />} />
        <Route path="/profile" element={<Home statePosts={statePosts} setstatePosts={setstatePosts} />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "15vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h1>A princesa esta em outro castelo! :'( </h1>
            </main>
          }
        />
      </Routes>
    </BrowserRouter >
  )
}

ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
);
