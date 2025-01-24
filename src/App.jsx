import './App.css';

//2- Reaproveitamento de estrutra
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      {<Outlet />}
    </>
  )
}

export default App
