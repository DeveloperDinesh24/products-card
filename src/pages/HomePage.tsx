import { Link } from 'react-router-dom'
import ShimmerCard from '../components/ShimmerCard'
import ProductCard from '../components/ProductCard'
import type { ProductData } from '../types/product'

interface PassedProps {
  searchTerm: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isProductsDataEmpty: boolean
  filteredProducts: ProductData[]
}

export default function HomePage({
  searchTerm,
  handleChange,
  isProductsDataEmpty,
  filteredProducts,
}: PassedProps) {
  return (
    <div className=' bg-slate-300'>
      <div className='w-full min-h-dvh max-w-400 mx-auto h-full flex flex-col gap-16 px-6 py-12'>
        <input
          onChange={handleChange}
          type='text'
          value={searchTerm}
          placeholder='Search product...'
          className='w-72 h-10 py-1 px-2 text-xl bg-slate-400 outline-0 outline-slate-700 focus:outline rounded mx-auto sm:ml-8'
        />
        <main className='h-full w-full flex flex-wrap justify-center gap-12'>
          {isProductsDataEmpty
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((n) => (
                <ShimmerCard key={n} />
              ))
            : filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              ))}
        </main>
      </div>
    </div>
  )
}
