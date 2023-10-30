import React from "react";
import ReactDOM from 'react-dom/client';

import { Routes, Route } from "react-router-dom";

// Importando o Admin
import Dashboard from "../src/pages/admin/dashboard/index";

// Importando o Client
import Painel from "../src/pages/client/painel/index";

//

import Produtos from "./pages/admin/produtos";
import ProdutosCadastrar from "./pages/admin/produtos/produtos-cadastrar";
import ProdutosEditar from "./pages/admin/produtos/produtos-editar";

import Usuarios from "./pages/admin/usuarios";
import UsuariosCadastrar from "./pages/admin/usuarios/usuarios-cadastrar";
import UsuariosEditar from "./pages/admin/usuarios/usuarios-editar";


function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Painel />}/>

        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </>
  );
}

export default MainRoutes;