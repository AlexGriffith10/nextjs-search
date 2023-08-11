'use client'

import { ReactNode, createContext, useState } from 'react'

export type ProductTypes = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface IProductContext {
  products: ProductTypes[]
  getProducts: () => void
}

const defaultValue: IProductContext = {
  products: [],
  getProducts: () => {},
}

export const ProductsContext = createContext<IProductContext>(defaultValue)

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState(defaultValue.products)
  const getProducts = async (): Promise<void> => {
    const results = await fetch('https://dummyjson.com/products/', {
      method: 'GET',
    }).then((response) => response.json())

    console.log(results)
    setProducts(results.products)
  }

  return (
    <ProductsContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
