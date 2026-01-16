import { useEffect, useState } from 'react'
import './App.css'
import type { ProductData } from './types/product'
import ProductCard from './Components/ProductCard'
import ShimmerCard from './Components/ShimmerCard'

function App() {
  const [productsData, setProductsData] = useState<ProductData[]>([])
  const isProductsDataEmpty = productsData.length === 0 ? true : false
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className='w-full min-h-dvh h-full bg-slate-300 flex flex-col gap-16 px-6 py-12'>
      <input
        onChange={handleChange}
        type='text'
        value={searchTerm}
        placeholder='Search product...'
        className='w-72 h-10 py-1 px-2 text-xl bg-slate-400 outline-0 outline-slate-700 focus:outline rounded ml-8'
      />
      <main className='h-full w-full flex flex-wrap justify-center gap-12'>
        {isProductsDataEmpty
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((n) => (
              <ShimmerCard key={n} />
            ))
          : filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </main>
    </div>
  )
}

export default App
