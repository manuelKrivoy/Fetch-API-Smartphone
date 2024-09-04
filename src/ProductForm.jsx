import React from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { updateContact, getContact } from "./contacts";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log("updates", updates);
  await updateContact(params.productId, updates);
  return redirect(`/product/${params.productId}`);
}

const ProductForm = () => {
  const product = useLoaderData();
  return (
    <Form method="post" className="space-y-4 p-4 bg-white shadow-md rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          defaultValue={product.product.nombre}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Descripcion</label>
        <input
          type="text"
          placeholder="Descripcion"
          name="descripcion"
          defaultValue={product.product.descripcion}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Precio</label>
        <input
          type="number"
          placeholder="Precio"
          name="precio"
          defaultValue={product.product.precio}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Guardar
        </button>
      </div>
    </Form>
  );
};

export default ProductForm;
