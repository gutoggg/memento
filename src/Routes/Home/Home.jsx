import '../../reset.css'
import '../../main.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Carousel from '../../Components/Carousel/Carousel'
import PostContainer from '../../Components/PostContainer/PostContainer'
import * as React from 'react'

function Home(props) {

  function useForceUpdate() {
    const [value, setValue] = React.useState(0)
    return () => setValue(value => value + 1)
  }

  const forceUpdate = useForceUpdate()

  function addPost(post) {
    props.statePosts.push(post)
    props.setstatePosts(props.statePosts)
    forceUpdate()
  }
  return (
    <div className="page-wrapper">
      <Header addPost={addPost} />
      <Carousel />
      <PostContainer statePosts={props.statePosts} />
      <Footer />
    </div>
  )
}

export default Home
