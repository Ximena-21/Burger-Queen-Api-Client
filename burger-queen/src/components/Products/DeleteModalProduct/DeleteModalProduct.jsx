import { useProductsContext } from "../../../context/ProductsContext";

export const BtnAbort = ({close}) => {

  return <button onClick={close}>CANCELAR</button>;
};

export const DeleteModalProduct = ({ element, closeModal }) => {
  const { deleteProduct } = useProductsContext()

  const handleDelete = async () => {
    await deleteProduct(element.id)
    closeModal()
  }

  return (
    <div>
      <h1>Eliminación</h1>
      <p>La información del producto no podrá ser recuperada</p>
      <p>¿Está seguro de eliminar el producto?</p>
      <button
        onClick={handleDelete}
      >
        ELIMINAR
      </button>
    </div>
  );
};
