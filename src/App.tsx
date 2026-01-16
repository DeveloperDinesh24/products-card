import { useEffect, useState } from 'react'
import './App.css'
import type { ProductData } from './types/product'
import ProductCard from './Components/ProductCard'

function App() {
  const [productsData, setProductsData] = useState<ProductData[]>([])
  // const isProductsDataEmpty = productsData.length === 0 ? true : false

  useEffect((): void => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data): void => setProductsData(() => data.products))
      .catch((error) => {
        console.error('Error fetching or parsing JSON:', error)
      })
  }, [])

  // if (!isProductsDataEmpty) {
  //   console.log(productsData)
  // }

  return (
    <div className='w-full min-h-dvh h-full bg-slate-300 flex flex-col gap-16 px-6 py-12'>
      <main className='h-full w-full max-[1536px]:justify-around flex flex-wrap justify-between items-stretch gap-12'>
        {productsData.map((product: ProductData) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </main>
    </div>
  )
}

export default App
