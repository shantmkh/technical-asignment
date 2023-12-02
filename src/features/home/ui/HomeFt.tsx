import { useEffect } from "react"
import { getProductsFx } from "../effects/productEffect";
import { pageSize } from "utils/constants/generic";
import { useUnit } from "effector-react";
import { $productStore } from "entities/product/productModel";
import { ProductCard } from "entities/product/ui/ProductCard";
import { PageWrapper } from "components/generic/genericStyled";
import { ProductsContainer } from "./styled";

export const HomeFt: React.FC<{}> = () => {
  const { products } = useUnit($productStore);

  useEffect(() => {
    getProductsFx(`?limit=${pageSize}&skip=0`);
  }, []);

  console.log(products)

  return (
    <PageWrapper>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </ProductsContainer>
    </PageWrapper>
  )
}