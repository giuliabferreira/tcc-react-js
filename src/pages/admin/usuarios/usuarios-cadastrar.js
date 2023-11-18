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

import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';

const defaultTheme = createTheme();

export default function UsuariosCadastrar() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [celular1, setCelular1] = useState('');
  const [celular2, setCelular2] = useState('');


  const [nomeanimal, setNomeAnimal] = useState('');
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const [castracao, setCastracao] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handleRgChange = (event) => {
    setRg(event.target.value);
  };

  const handleEnderecoChange = (event) => {
    setEndereco(event.target.value);
  };

  const handleCidadeChange = (event) => {
    setCidade(event.target.value);
  };

  const handleCelular1Change = (event) => {
    setCidade(event.target.value);
  };

  const handleCelular2Change = (event) => {
    setCidade(event.target.value);
  };



  const handleNomeAnimalChange = (event) => {
    setNomeAnimal(event.target.value);
  };

  const handleEspecieChange = (event) => {
    setEspecie(event.target.value);
  };

  const handleRacaChange = (event) => {
    setRaca(event.target.value);
  };

  const handleSexoChange = (event) => {
    setSexo(event.target.value);
  };

  const handleIdadeChange = (event) => {
    setIdade(event.target.value);
  };

  const handleCastracaoChange = (event) => {
    setCastracao(event.target.value);
  };


  function handleSubmit() {
    const data = {nome, cpf, rg, endereco, cidade, celular1, celular2, nomeanimal, especie, raca, sexo, idade, castracao}
  }

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
              <Grid item xs={12} sm={12}>
                <Paper
                  sx={{
                    p: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 900,
                  }}>
                  <h1 style={{ textAlign: 'center', color: '#87CEEB', marginBottom: '20px' }}>
                    FORMULÁRIO DE CADASTRO
                  </h1>
                  <h3 style={{ color: '#87CEEB', marginBottom: '10px' }}>DADOS DO RESPONSÁVEL</h3>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <TextField margin="normal" fullWidth id="nome" label="Nome Completo" name="nome" value={nome} onChange={handleNomeChange}/>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <TextField fullWidth id="cpf" label="CPF" name="cpf" value={cpf} onChange={handleCpfChange}/>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <TextField fullWidth id="rg" label="RG" name="rg" value={rg} onChange={handleRgChange}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="endereco" label="Endereço" name="endereco" value={endereco} onChange={handleEnderecoChange}/>
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
                          <MenuItem value={40}>Bauru</MenuItem>
                          <MenuItem value={40}>Águas Claras</MenuItem>
                          <MenuItem value={40}>Itatiba</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="celular1" label="Número de Telefone Principal" name="celular1" value={celular1} onChange={handleCelular1Change}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="celular2" label="Número de Telefone Reserva" name="celular2" value={celular2} onChange={handleCelular2Change} />
                    </Grid>
                  </Grid>
                  <h3 style={{ color: 'white' }}></h3>
                  <h3 style={{ color: '#87CEEB' }}>DADOS DO ANIMAL</h3>
                  <Grid container spacing={3}>
                  <Grid item xs={12} sm={5}>
                      <TextField fullWidth id="nomeanimal" label="Nome" name="nome" value={nomeanimal} onChange={handleNomeAnimalChange} />
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
                          <MenuItem value={30}>Papagaio</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Raça</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={raca}
                          label="Raça"
                          onChange={handleRacaChange}
                        >
                          <MenuItem value={10}>Border Collie</MenuItem>
                          <MenuItem value={20}>Pinscher</MenuItem>
                          <MenuItem value={30}>Shitzu</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
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
                    <Grid item xs={12} sm={2}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Idade</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={idade}
                          label="Idade"
                          onChange={handleIdadeChange}
                        >
                          <MenuItem value={1}>1 ano</MenuItem>
                          <MenuItem value={2}>2 anos</MenuItem>
                          <MenuItem value={3}>3 anos</MenuItem>
                          <MenuItem value={4}>4 anos</MenuItem>
                          <MenuItem value={5}>5 anos</MenuItem>
                          <MenuItem value={6}>6 anos</MenuItem>
                          <MenuItem value={7}>7 anos</MenuItem>
                          <MenuItem value={8}>8 anos</MenuItem>
                          <MenuItem value={9}>9 anos</MenuItem>
                          <MenuItem value={10}>10 anos</MenuItem>
                          <MenuItem value={11}>11 anos</MenuItem>
                          <MenuItem value={12}>12 anos</MenuItem>
                          <MenuItem value={13}>13 anos</MenuItem>
                          <MenuItem value={14}>14 anos</MenuItem>
                          <MenuItem value={15}>15 anos</MenuItem>
                          <MenuItem value={16}>16 anos</MenuItem>
                          <MenuItem value={17}>17 anos</MenuItem>
                          <MenuItem value={18}>18 anos</MenuItem>
                          <MenuItem value={19}>19 anos</MenuItem>
                          <MenuItem value={20}>20 anos</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Castração</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={castracao}
                          label="Castração"
                          onChange={handleCastracaoChange}
                        >
                          <MenuItem value={10}>Sim</MenuItem>
                          <MenuItem value={20}>Não</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <h3></h3>
                  <Grid item x2={12} sm={12}>
                    <Link to="/inicio" style={{ textDecoration: 'none' }}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={{ backgroundColor: '#5CE1E6', border: '2px solid #5CE1E6', textAlign: 'center' }}
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Enviar
                      </Button>
                    </Link>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
