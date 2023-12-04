import { IProduct } from "utils/types/mainTypes"
import { ModalButtons, ModalContainer, ModalContent } from "./styled";
import { FormEvent, useState } from "react";
import { Button, Input } from "components/generic/genericStyled";

export const EditProduct: React.FC<{
  product: IProduct;
  closeModal: () => void;
  saveData: (newProduct: IProduct) => void;
}> = ({
  product,
  closeModal,
  saveData
}) => {
  const [formData, setFormData] = useState<Record<string, string | number>>({
    title: product.title || '',
    price: product.price || 0,
    description: product.description || ''
  });

  const onFormChange = ({ target }: FormEvent<HTMLInputElement>) => {
    const { name, value } = target as HTMLInputElement;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const saveProduct = () => {
    saveData({
      ...product,
      ...formData
    })
  }

  return (
    <ModalContainer onClick={closeModal}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <Input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={onFormChange}
        />
        <Input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={onFormChange}
        />
        <Input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={onFormChange}
        />
        <ModalButtons>
          <Button onClick={closeModal} aria-label="save product">Cancel</Button>
          <Button onClick={saveProduct} variant="purple" aria-label="close modal">Save</Button>
        </ModalButtons>
      </ModalContent>
    </ModalContainer>
  )
}