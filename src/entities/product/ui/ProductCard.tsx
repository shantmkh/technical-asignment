import { IProduct } from "utils/types/mainTypes"
import { CardCategory, CardContainer, CardDescription, CardDetails, CardImage, CardPrice, CardTitle } from "./styled"
import { FlexBetween } from "components/generic/genericStyled"

export const ProductCard: React.FC<{ product: IProduct }> = ({
  product
}) => {
  console.log(product)
  return (
    <CardContainer>
      <CardImage src={product.thumbnail} />
      <CardDetails>
        <CardTitle>{product.title}</CardTitle>
        <CardCategory>{product.category}</CardCategory>
        <CardDescription>{product.description}</CardDescription>
        <FlexBetween>
          <CardPrice>PRICE: {product.price}</CardPrice>
        </FlexBetween>
      </CardDetails>
    </CardContainer>
  )
}