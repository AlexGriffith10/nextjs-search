'use client'
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout'
import { NextPageWithLayout } from '../pages'
import { ProductList } from '../components/products/productList/productList'

const Products: NextPageWithLayout = () => {
  return (
    <>
      <div className="text-5xl text-center p-6">
        View All Available Products
      </div>
      <ProductList />
    </>
  )
}

export default Products

Products.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
