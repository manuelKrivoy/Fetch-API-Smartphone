import React from "react";
import { NavLink, Outlet, Form, redirect, useLoaderData } from "react-router-dom";
import { createContact, getContact, updateContact, getContacts } from "./contacts";

export async function action() {
  const contact = await createContact();
  return redirect(`/product/${contact.id}/edit`);
}

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

const Layout = () => {
  const { contacts } = useLoaderData();
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <div>
          <Form method="post">
            <button type="submit">Add</button>
          </Form>
        </div>

        <nav className="space-y-2">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "block bg-gray-700 text-white p-2 rounded" : "block bg-gray-900 text-white p-2 rounded"
            }
          >
            Productos
          </NavLink>

          {contacts.map((contact) => (
            <NavLink
              key={contact.id}
              to={`/product/${contact.id}`}
              className={({ isActive }) =>
                isActive ? "block bg-gray-700 text-white p-2 rounded" : "block bg-gray-900 text-white p-2 rounded"
              }
            >
              {contact.id}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
