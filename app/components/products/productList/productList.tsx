import { useContext } from 'react'
import ProductsContext from '../../../context/products/ProductsContext'
import Card from '../../cards/Card'

export const ProductList: React.FC = () => {
  const { products, getProducts } = useContext(ProductsContext)
  const onClick = () => {
    console.log(typeof products, 'type')
    console.log(products, 'products from context')
    getProducts()
  }
  return (
    <>
      <div className="p-4 justify-center flex">
        <button
          onClick={() => onClick()}
          className="border-1 p-2 px-4 bg-blue-600 text-white w-28 rounded-md"
        >
          {' Products '}
        </button>
      </div>
      {products.map((product, index) => {
        return (
          <>
            <Card
              key={`product-${index}`}
              author={product.brand}
              body={product.description}
              title={product.title}
              time={`${new Date()}`}
              tag={`${product.price}`}
              img={product.images[0]}
            />
          </>
        )
      })}
    </>
  )
}
