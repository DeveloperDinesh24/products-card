import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import type { ProductData } from './types/product'
import HomePage from './pages/HomePage'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [productsData, setProductsData] = useState<ProductData[]>([])
  const isProductsDataEmpty = productsData.length === 0 ? true : false
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = productsData.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  useEffect((): void => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data): void => setProductsData(() => data.products))
      .catch((error) => {
        console.error('Error fetching or parsing JSON:', error)
      })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value)
  }
  if (!isProductsDataEmpty) {
    console.log(productsData)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              searchTerm={searchTerm}
              handleChange={handleChange}
              isProductsDataEmpty={isProductsDataEmpty}
              filteredProducts={filteredProducts}
            />
          }
        />
        <Route path='product/:id' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
