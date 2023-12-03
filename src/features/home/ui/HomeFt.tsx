import { useEffect, useState } from "react"
import { pageSize } from "utils/constants/generic";
import { useUnit } from "effector-react";
import { $productStore } from "entities/product/productModel";
import { ProductCard } from "entities/product/ui/productCard/ProductCard";
import { Button, FlexContainer, PageWrapper } from "components/generic/genericStyled";
import { IProduct } from "utils/types/mainTypes";
import { EditProduct } from "entities/product/ui/editProduct/EditProduct";
import { deleteProductsFx, getProductsFx, updateProductFx } from "../effects/productEffect";
import { ProductsContainer } from "./styled";
import { toQueryString } from "utils/helpers/urlHelper";

export const HomeFt: React.FC<{}> = () => {
  const { products } = useUnit($productStore);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getProductsFx({ params: toQueryString({ _page: `${currentPage}`, limit: `${pageSize}` })});
    /* eslint-disable-next-line */
  }, []);

  const deleteProduct = (productId: number) => {
    deleteProductsFx(productId);
    setCurrentPage(1);
  }

  const setTargetProduct = (product: IProduct | null) => {
    setSelectedProduct(product);
  }

  const saveData = (newProduct: IProduct) => {
    updateProductFx(newProduct);
    setTargetProduct(null);
    setCurrentPage(1);
  }

  const getMoreData = () => {
    const nextPage = currentPage + 1;

    getProductsFx({ params: toQueryString({ _page: `${nextPage}`, limit: `${pageSize}` }), prevProducts: products });
    setCurrentPage(nextPage);
  }

  return (
    <PageWrapper>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
            setTargetProduct={setTargetProduct}
          />
        ))}
      </ProductsContainer>
      {selectedProduct && (
        <EditProduct
          product={selectedProduct}
          closeModal={() => setTargetProduct(null)}
          saveData={saveData}
        />
      )}
      <FlexContainer justifyType="center">
        <Button onClick={getMoreData} variant="black">Load more</Button>
      </FlexContainer>
    </PageWrapper>
  )
}