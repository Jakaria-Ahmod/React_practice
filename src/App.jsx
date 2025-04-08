
import './App.css'
import Message from './components/Message'
import Nav from './components/Nav'
import Propse from './components/Propse'

function App() {
 let data = "jakaria ahmod"

  return (
    <>
      <div>
        <Message></Message>
        <Nav></Nav>
        <Propse data={data}></Propse>
      </div>
    </>
  )
}

export default App
