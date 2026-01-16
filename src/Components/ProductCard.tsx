import type { ProductData } from '../types/product'

interface ProductCardProps {
  product: ProductData
}

const ProductCard = function ({ product }: ProductCardProps) {
  return (
    <div className='w-84 bg-slate-400 border rounded-lg overflow-hidden relative'>
      <img
        src={product.images[0]}
        className='w-full h-1/2 cursor-pointer hover:scale-110 transition-transform duration-300'
      />
      <div className='p-4 h-full border-t bg-green-300'>
        <h2 className='text-lg font-semibold'>
          Name: <span className='font-normal'>{product.title}</span>
        </h2>
        <p className='text-lg font-semibold'>
          Price: <span className='font-normal'>${product.price}</span>
        </p>
        <p className='text-lg font-semibold'>
          Category: <span className='font-normal'>{product.category}</span>
        </p>
        <p className='text-lg font-semibold'>
          Description:{' '}
          <span className='font-normal'>{product.description}</span>
        </p>
      </div>
    </div>
  )
}

export default ProductCard
