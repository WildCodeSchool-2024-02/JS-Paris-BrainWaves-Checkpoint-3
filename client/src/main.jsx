import React from "react";
import ReactDOM from "react-dom/client";
// import myAxios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Map from "./pages/Map";
import MoveBoat from "./pages/MoveBoat";
import CategoryEdit from "./components/CategoryEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Map /> },
      { path: "/boats/:id/move/:x/:y", element: <MoveBoat /> },
    ],

    
  },

  {
    path: "/categories/:id/edit",
    element: <CategoryEdit/>,
    // loader: async ({ params }) => {
    //   const response = await myAxios.get(`/api/categories/${params.id}`);
  
    //   return response.data;
    // },
    // action: async ({ request, params }) => {
    //   const formData = await request.formData();
  
    //   switch (request.method.toLowerCase()) {
    //     case "put": {
    //       await myAxios.put(`/api/categories/${params.id}`, {
    //         name: formData.get("name"),
    //       });
  
    //       return redirect(`/categories/${params.id}`);
    //     }
    //     case "delete": {
    //       await myAxios.delete(`/api/categories/${params.id}`);
  
    //       return redirect("/categories");
    //     }
    //     default:
    //       throw new Response("", { status: 405 });
    //   }
    // },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
