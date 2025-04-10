
import { Outlet } from 'react-router-dom'
import './App.css'
import Button from './components/Button'
import Data from './components/Data'
import Flex from './components/Flex'
import Form from './components/Form'
import Grid from './components/Grid'
import Nav from './reusbleCompo/Nav'
import Footer from './reusbleCompo/Footer'
// import Couunt from './components/Couunt'
// import Message from './components/Message'
// import Nav from './components/Nav'
// import Propse from './components/Propse'

function App() {
 let data = "jakaria ahmod"

  return (
    <>
      <div>
        {/* <Message></Message>
        <Nav></Nav>
        <Propse data={data}></Propse>
        <Couunt></Couunt> */}
        {/* <Data></Data> */}
        {/* <Form></Form> */}
        {/* <Button></Button> */}
        {/* <Flex></Flex> */}
        {/* <Grid></Grid> */}
      
        <Nav></Nav>
        <main>
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
