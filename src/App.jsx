import { useState } from 'react'

import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [images, setImages] = useState([0])

const handleSubmit = async(term) => {
  console.log('uste esta buscando con:', term)
}
return (
  <div>
    <h1>App</h1>
    <SearchBar onSubmit={handleSubmit}/>
  </div>
)
}
export default App
