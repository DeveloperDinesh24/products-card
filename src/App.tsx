import { useEffect, useState } from 'react'
import './App.css'

interface ProductData {
  id: number
  image: string
  name: string
  description: string
  category: string
  price: number
}

function App() {
  const [productsData, setProductsData] = useState<ProductData[]>([])
  const isProductsDataEmpty = productsData.length === 0 ? true : false

  useEffect((): void => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data): void => setProductsData(() => data.products))
  }, [])

  if (!isProductsDataEmpty) {
    console.log(productsData)
  }

  return (
    <>
      
    </>
  )
}

export default App
