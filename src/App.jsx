import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Comments from './components/Comments'
import { comments } from './mocks'
import './App.css'
 
function App(){
  return (
    <>
      <Header />
      <Carousel />
      {comments.map(data =>{
        return <Comments  data={data}/>
      })}
      <Footer />
    </>
  )
}
export default App


