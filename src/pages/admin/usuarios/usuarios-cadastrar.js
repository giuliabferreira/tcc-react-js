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
import { useQuery } from "react-query";
import axios from "axios";

import MenuAdmin from '../../../components/menu-admin';

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
    setCelular1(event.target.value);
  };

  const handleCelular2Change = (event) => {
    setCelular2(event.target.value);
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
                    p: 6,
                    display: 'static',
                    flexDirection: 'column',
                    height: 830,
                  }}>

                  <h1 style={{ textAlign: 'center', color: '#5CE1E6', marginBottom: '20px' }}>
                    FORMULÁRIO DE CADASTRO
                  </h1>
                  <h3 style={{ color: '#5CE1E6', marginBottom: '10px' }}>DADOS DO RESPONSÁVEL</h3>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <TextField margin="normal" fullWidth id="nome" label="Nome Completo" name="nome" required value={nome} onChange={handleNomeChange}/>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <TextField fullWidth id="cpf" label="CPF" name="cpf" required value={cpf} onChange={handleCpfChange}/>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <TextField fullWidth id="rg" label="RG" name="rg" required value={rg} onChange={handleRgChange}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="endereco" label="Endereço" required name="endereco" value={endereco} onChange={handleEnderecoChange}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Cidade</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={cidade}
                          required
                          label="Cidade"
                          onChange={handleCidadeChange}
                        >
                          <MenuItem value={1}>Lençóis Paulista</MenuItem>
                          <MenuItem value={2}>Macatuba</MenuItem>
                          <MenuItem value={3}>Agudos</MenuItem>
                          <MenuItem value={4}>Bauru</MenuItem>
                          <MenuItem value={5}>Águas Claras</MenuItem>
                          <MenuItem value={6}>Itatiba</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="celular1" label="Número de Telefone Principal" name="celular1" required value={celular1} onChange={handleCelular1Change}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="celular2" label="Número de Telefone Reserva" name="celular2" required value={celular2} onChange={handleCelular2Change} />
                    </Grid>
                  </Grid>
                  <h1 style={{ color: 'white' }}></h1>
                  <h3 style={{ color: '#5CE1E6' }}>DADOS DO ANIMAL</h3>
                  <Grid container spacing={3}>
                  <Grid item xs={12} sm={5}>
                      <TextField fullWidth id="nomeanimal" label="Nome" name="nome" required value={nomeanimal} onChange={handleNomeAnimalChange} />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Espécie</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select-required"
                          value={especie}
                          required
                          label="Espécie"
                          onChange={handleEspecieChange}
                        >
                          <MenuItem value={1}>Cachorro</MenuItem>
                          <MenuItem value={2}>Gato</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Raça</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select-required"
                          required
                          value={raca}
                          label="Raça"
                          onChange={handleRacaChange}
                        >
                          <MenuItem value={1}>Border Collie</MenuItem>
                          <MenuItem value={2}>Pinscher</MenuItem>
                          <MenuItem value={3}>Shitzu</MenuItem>
                          <MenuItem value={4}>Vira-Lata</MenuItem>
                          <MenuItem value={5}>Dachschund</MenuItem>
                          <MenuItem value={6}>Siamês</MenuItem>
                          <MenuItem value={7}>Ragdoll</MenuItem>
                          <MenuItem value={8}>Persa</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                        <Select
                          labelId="demo-simple-select-required-label"
                          id="demo-simple-select-required"
                          value={sexo}
                          label="Sexo"
                          onChange={handleSexoChange}
                        >
                          <MenuItem value={1}>Feminino</MenuItem>
                          <MenuItem value={2}>Masculino</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-required-label">Idade</InputLabel>
                        <Select
                          labelId="demo-simple-select-required-label"
                          id="demo-simple-select-required"
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
                        <InputLabel id="demo-simple-select-required-label">Castração</InputLabel>
                        <Select
                          labelId="demo-simple-select-required-label"
                          id="demo-simple-select-required"
                          value={castracao}
                          required
                          label="Castração"
                          onChange={handleCastracaoChange}
                        >
                          <MenuItem value={1}>Sim</MenuItem>
                          <MenuItem value={2}>Não</MenuItem>
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
                        Salvar
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
