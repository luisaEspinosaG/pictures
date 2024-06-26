import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import './App.css'
import SearchImage from './api'

function App() {
  const [images, setImages] = useState([])

const handleSubmit = async(term) => {
  console.log('uste esta buscando con:', term)
  const result = await SearchImage(term)
  console.log('coco')
  console.log(result)

  setImages(result)

}
return (
  <div>
    <h1>App</h1>
    <SearchBar onSubmit={handleSubmit}/>
    <ImageList images={images}/>
  </div>
)
}
export default App
