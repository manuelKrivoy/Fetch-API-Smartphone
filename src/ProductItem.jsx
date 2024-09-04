import { getContact } from "./contacts";
import { useLoaderData, useNavigate } from "react-router-dom";
useNavigate;
export async function loader({ params }) {
  const product = await getContact(params.productId);

  return { product };
}

const ProductItem = () => {
  const product = useLoaderData();
  const navigate = useNavigate();
  const handleEdit = (productid) => {
    console.log(productid);
    return navigate(`/product/${productid}/edit`);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-2">
        ID producto: {product.product.id} -- Creado en: {product.product.createdAt}
      </h1>
      <h2 className="text-lg font-semibold mb-1">Nombre: {product.product.nombre}</h2>
      <h2 className="text-lg mb-1">Descripcion: {product.product.descripcion}</h2>
      <h2 className="text-lg mb-1">Precio: {product.product.precio}</h2>
      <button
        className=" bg-blue-500 text-white rounded-lg w-11 h-15 hover:bg-blue-900 cursor-pointer "
        onClick={() => {
          handleEdit(product.product.id);
        }}
      >
        Editar
      </button>
    </div>
  );
};

export default ProductItem;
