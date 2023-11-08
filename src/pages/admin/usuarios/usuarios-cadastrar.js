import * as React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl } from '@mui/material';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';

const defaultTheme = createTheme();

export default function UsuariosCadastrar() {
  const [cidade, setCidade] = useState('');
  const [especie, setEspecie] = useState('');
  const [sexo, setSexo] = useState('');

  const [showAlert, setShowAlert] = useState(false); // Adicione este estado


  const handleCidadeChange = (event) => {
    setCidade(event.target.value);
  };

  const handleEspecieChange = (event) => {
    setEspecie(event.target.value);
  };

  const handleSexoChange = (event) => {
    setSexo(event.target.value);
  };

  const handleEnviarClick = () => {
    // Quando o botão "Enviar" é clicado, exiba o alerta
    setShowAlert(true);
  };

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
              <Grid item xs={12} sm={10}>
                <Paper
                  sx={{
                    p: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 900,
                  }}
                >
                  <h1 style={{ textAlign: 'center', color: '#87CEEB', marginBottom: '20px' }}>
                    FORMULÁRIO DE CADASTRO
                  </h1>
                  <h3 style={{ color: '#87CEEB', marginBottom: '10px' }}>DADOS DO RESPONSÁVEL</h3>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        margin="normal"
                        fullWidth
                        id="nome"
                        label="Nome"
                        name="nome"
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <TextField
                        margin="normal"
                        fullWidth
                        id="sobrenome"
                        label="Sobrenome"
                        name="sobrenome"
                      />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <TextField fullWidth id="cpf" label="CPF" name="cpf" />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <TextField fullWidth id="rg" label="RG" name="rg" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="endereco" label="Endereço" name="endereco" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Cidade</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={cidade}
                          label="Cidade"
                          onChange={handleCidadeChange}
                        >
                          <MenuItem value={10}>Lençóis Paulista</MenuItem>
                          <MenuItem value={20}>Macatuba</MenuItem>
                          <MenuItem value={30}>Agudos</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField fullWidth id="celular" label="Celular" name="celular" />
                    </Grid>
                  </Grid>
                  <h3 style={{ color: 'white' }}></h3>
                  <h3 style={{ color: '#87CEEB', marginBottom: '10px' }}>DADOS DO ANIMAL</h3>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={5}>
                      <TextField
                        margin="normal"
                        fullWidth
                        id="nomecachorro"
                        label="Nome"
                        name="nome"
                      />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Espécie</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={especie}
                          label="Espécie"
                          onChange={handleEspecieChange}
                        >
                          <MenuItem value={10}>Cachorro</MenuItem>
                          <MenuItem value={20}>Gato</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="raca" label="Raça" name="raça" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="pelagem" label="Pelagem" name="pelagem" />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={sexo}
                          label="Sexo"
                          onChange={handleSexoChange}
                        >
                          <MenuItem value={10}>Feminino</MenuItem>
                          <MenuItem value={20}>Masculino</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField fullWidth id="idade" label="Idade" name="idade" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="peso" label="Peso" name="peso" />
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="center">
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={{ backgroundColor: '#87CEEB', border: '2px solid #87CEEB', textAlign: 'center' }}
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Enviar
                      </Button>
                    </Link>
                  </Grid>
                  {showAlert && ( // Renderize o Alert apenas quando showAlert for true
                    <Alert severity="success">
                      <AlertTitle>Sucesso</AlertTitle>
                      Seu formulário foi enviado com sucesso!
                    </Alert>
                  )}
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
