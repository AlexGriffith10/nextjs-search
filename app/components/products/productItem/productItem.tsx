export type ProductItemProps = {
  id: number
  title: string
  description: string
}

export const ProductItem: React.FC<ProductItemProps> = ({
  id,
  title,
  description,
}) => {
  return (
    <>
      <p>{id}</p>
      <p>{title}</p>
      <p>{description}</p>
    </>
  )
}
