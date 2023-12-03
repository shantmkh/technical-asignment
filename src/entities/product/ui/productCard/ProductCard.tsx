import { IProduct } from "utils/types/mainTypes"
import { CardCategory, CardContainer, CardDescription, CardDetails, CardImage, CardPrice, CardTitle, ProductAction } from "./styled"
import { FlexContainer } from "components/generic/genericStyled"

export const ProductCard: React.FC<{ product: IProduct; deleteProduct: (id: number) => void; setTargetProduct: (product: IProduct | null) => void }> = ({
  product,
  deleteProduct,
  setTargetProduct
}) => {

  return (
    <CardContainer>
      <CardImage alt={product.title} src={product.thumbnail} />
      <CardDetails>
        <CardTitle>{product.title}</CardTitle>
        <CardCategory>{product.category}</CardCategory>
        <CardDescription>{product.description}</CardDescription>
        <FlexContainer justifyType="space-between">
          <CardPrice>PRICE: {product.price}</CardPrice>
          <FlexContainer justifyType="space-between">
            <ProductAction
              aria-label="edit button"
              onClick={() => setTargetProduct(product)}
            >Edit</ProductAction>
            <ProductAction
              action="delete"
              aria-label="delete button"
              onClick={() => deleteProduct(product.id)}
            >Delete</ProductAction>
          </FlexContainer>
        </FlexContainer>
      </CardDetails>
    </CardContainer>
  )
}