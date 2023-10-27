import React from "react";
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importando o Admin
import Dashboard from "../src/pages/admin/dashboard";

// Importando o Client
import Painel from "../src/pages/client/painel/";

//

import Produtos from "./pages/admin/produtos";
import ProdutosCadastrar from "./pages/admin/produtos/produtos-cadastrar";
import ProdutosEditar from "./pages/admin/produtos/produtos-editar";

import Usuarios from "./pages/admin/usuarios";
import UsuariosCadastrar from "./pages/admin/usuarios/usuarios-cadastrar";
import UsuariosEditar from "./pages/admin/usuarios/usuarios-editar;"


// Configurando o Router

const router = createBrowserRouter([

  {
    path: '/',
    element: <Painel />
  },

  {
    path: 'dashboard',
    element: <Dashboard />
  },

  {
    path: 'painel',
    element: <Painel />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);