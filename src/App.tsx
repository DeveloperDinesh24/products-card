import { useEffect, useState } from 'react'
import './App.css'

interface ProductData {
  id: number
  images: [string]
  title: string
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
      <main className='h-full w-full p-6 bg-slate-300 flex flex-wrap justify-between gap-12'>
        {productsData.map((product: ProductData) => {
          return (
            <div
              key={product.id}
              className='w-84 h-fit bg-slate-400 border rounded-lg overflow-hidden'
            >
              <img src={product.images[0]} className='w-full border-b' />
              <div className='p-4 bg-green-300'>
                <h2 className='text-lg font-semibold'>
                  Name: <span className='font-normal'>{product.title}</span>
                </h2>
                <p className='text-lg font-semibold'>
                  Price: <span className='font-normal'>${product.price}</span>
                </p>
                <p className='text-lg font-semibold'>
                  Category:{' '}
                  <span className='font-normal'>{product.category}</span>
                </p>
                <p className='text-lg font-semibold'>
                  Description:{' '}
                  <span className='font-normal'>{product.description}</span>
                </p>
              </div>
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App
