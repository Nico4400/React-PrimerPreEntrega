import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartConteiner'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <ItemListContainer greating={"Benvenuti"} />    */}
        <Routes>        
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path= '/category/:categoryId' element={<ItemListContainer />} />
          <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
