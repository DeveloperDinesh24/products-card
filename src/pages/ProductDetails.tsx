import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { title } = useParams()

  return (
    <div className='p-10'>
      <h1 className='text-3xl font-bold'>Details for: {title}</h1>
      <p>Soon we will fetch the full data for this specific product!</p>
    </div>
  )
}

export default ProductDetails
