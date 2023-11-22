import React from "react";

import { Routes, Route } from "react-router-dom";

// Importando o Admin
import Dashboard from "../src/pages/admin/dashboard/index";

// Importando o Client
import Painel from "../src/pages/client/painel/index";

//

import Produtos from "./pages/admin/produtos";


import Usuarios from "./pages/admin/usuarios";
import UsuariosCadastrar from "./pages/admin/usuarios/usuarios-cadastrar";
import UsuariosEditar from "./pages/admin/usuarios/usuarios-editar";


function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Painel />}/>

        <Route path="/inicio" element={<Usuarios />}/>

        <Route path="/agenda" element={<Produtos />}/>

        <Route path="/formulario" element={<UsuariosCadastrar />}/>

      -

        <Route path="usuarios/editar" element={<UsuariosEditar />}/>

      </Routes>
    </>
  );
}

export default MainRoutes;