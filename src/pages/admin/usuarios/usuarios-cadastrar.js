import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';

const defaultTheme = createTheme();

export default function UsuariosCadastrar() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <MenuAdmin />
  
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
              <Grid item xs={10} sm={10}>
                <Paper 
                  sx={{
                    p: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 800,
                  }}
                >
                    <h1 style={{ textAlign: 'center', color: '#87CEEB', marginBottom: '20px' }}>FORMULÁRIO DE CADASTRO</h1>

                    <h3 style={{ color: '#87CEEB', marginBottom: '10px' }}>DADOS DO RESPONSÁVEL</h3>
                  <Grid container spacing={3}>
                      
                    <Grid item xs={12} sm={6}>

                      <TextField
                        margin="normal"
                        fullWidth
                        id="nome"
                        label="Nome"
                        name="nome"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="sobrenome"
                        label="Sobrenome"
                        name="sobrenome"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="cpf"
                        label="CPF"
                        name="cpf"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="rg"
                        label="RG"
                        name="rg"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="endereco"
                        label="Endereço"
                        name="endereco"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="cidade"
                        label="Cidade"
                        name="cidade"
                      />
                    </Grid>
                    
                    <h3 style={{ color: '#87CEEB', marginBottom: '10px'}}>DADOS DO ANIMAL</h3>
                    
                    <Grid container spacing={3}>
                      
                    <Grid item xs={12} sm={6}>

                      <TextField
                        margin="normal"
                        fullWidth
                        id="nome"
                        label="Nome"
                        name="nome"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="sobrenome"
                        label="Sobrenome"
                        name="sobrenome"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="cpf"
                        label="CPF"
                        name="cpf"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="rg"
                        label="RG"
                        name="rg"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="endereco"
                        label="Endereço"
                        name="endereco"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="cidade"
                        label="Cidade"
                        name="cidade"
                      />
                    </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer sx={{ pt: 4 }} />
    </ThemeProvider>
  );
}
