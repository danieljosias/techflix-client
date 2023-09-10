import { createStandaloneToast } from '@chakra-ui/react'
const { ToastContainer } = createStandaloneToast()
import './App.css'
import { Router } from './routes/routes'

function App(){
  return (
    <>
      <Router/>
      <ToastContainer />
    </>
  )
}
export default App


