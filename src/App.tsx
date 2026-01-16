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
      <main className='h-full w-full bg-slate-300 flex justify-between gap-12'>
        <div className='w-84 h-fit bg-slate-400 border rounded-lg overflow-hidden'>
          <img 
          src='https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp' 
          alt='product-image' 
          className='w-full border-b' />
          <div className='p-4 bg-green-300'>
            <h2 className='text-lg font-semibold'>Name: <span className='font-normal'>Essence Mascara Lask Princess</span></h2>
            <p className='text-lg font-semibold'>Price: <span className='font-normal'>$9.99</span></p>
            <p className='text-lg font-semibold'>Category: <span className='font-normal'>Beauty</span></p>
            <p className='text-lg font-semibold'>Description: <span className='font-normal'>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</span></p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
