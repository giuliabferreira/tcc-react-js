import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ButtonGroup from '@mui/material/ButtonGroup';

import MenuAdmin from '../../../components/menu-admin';

import Footer from '../../../components/footer-admin';

const defaultTheme = createTheme();

function createData(id, nomeanimal, especie, raca, sexo, nome) {
  return {id, nomeanimal, especie, raca, sexo, nome };
}

const rows = [
  createData(1, 'Mel', 'Cachorro', 'Border Collie', 'F', 'Magno Nunes Ferreira'),
  createData(2, 'Rebeca', 'Cachorro', 'Pinscher', 'F', 'Giulia Bodo Ferreira'),
  createData(3, 'Bitelo', 'Cachorro', 'Husky Siberiano', 'M', 'Magno Nunes Ferreira'),
  createData(4, 'Pepa', 'Cachorro', 'Border Collie', 'F', 'Giulia Bodo Ferreira'),
  createData(5, 'Rosa', 'Cachorro', 'Dachschund', 'F', 'Isabela Soares da Costa'),
  createData(6, 'Elias', 'Gato', 'Siamês', 'M', 'Renato Fernando Lopes'),
  createData(7, 'Helena', 'Gato', 'Persa', 'F', 'Rosângela Feliposa de Andrade'),
  createData(8, 'Tyrone', 'Gato', 'Ragdoll', 'M', 'Rafael Rodrigues da Silva'),
  createData(9, 'Harry', 'Gato', 'Vira-Lata', 'M', 'Fernando Torres'),
];

export default function UsuariosListagem() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        
        <MenuAdmin/>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item sm={12}>
                <Paper
                sx={{
                  p: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '770px',
                  width: '1200px',
                }}>
                <h2 style={{ color: '#5CE1E6', textAlign: 'center' }}>
                    LISTAGEM DE USUÁRIOS
                  </h2>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center">ID</TableCell>
            <TableCell align="center">Nome do Animal</TableCell>
            <TableCell align="center">Espécie</TableCell>
            <TableCell align="center">Raça</TableCell>
            <TableCell align="center">Sexo</TableCell>
            <TableCell align="center">Nome do Responsável</TableCell>
            <TableCell align="center">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.nomeanimal}</TableCell>
              <TableCell align="center">{row.especie}</TableCell>
              <TableCell align="center">{row.raca}</TableCell>
              <TableCell align="center">{row.sexo}</TableCell>
              <TableCell align="center">{row.nome}</TableCell>
              <TableCell align="center">
                      <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button style={{ borderColor: 'black', color: 'black', fontSize: '0.8rem', padding: '6px 9px' }} href={'usuarios/editar'}>Editar</Button>
                        <Button style={{ borderColor: 'black', color: 'black', fontSize: '0.8rem', padding: '6px 9px' }}>Excluir</Button>
                      </ButtonGroup>
                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                    </Grid>
                  </Grid>
                </Paper>
                </Grid>
              </Grid>
            <Footer sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}