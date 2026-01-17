import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { ProductData } from '../types/product'

const ProductDetails = () => {
  const { id } = useParams() // Grabs the ID from the URL
  const [product, setProduct] = useState<ProductData | null>(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [id]) // Re-run if the ID changes

  if (!product) return <div>Loading details...</div>

  return (
    <div className='p-8'>
      <button onClick={() => window.history.back()}>← Back</button>
      <img
        src={product.images[0]}
        alt={product.title}
        className='w-96 h-96 object-contain'
      />
      <h1 className='text-4xl font-bold'>{product.title}</h1>
      <p className='mt-4 text-gray-700'>{product.description}</p>
      {/* Show more stuff here like rating, brand, etc. */}
    </div>
  )
}

export default ProductDetails
