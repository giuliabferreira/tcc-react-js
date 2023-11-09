import React from "react";
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
                    p: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 900,
                  }}>
                  <h1 style={{ textAlign: 'center', color: '#87CEEB', marginBottom: '20px' }}>
                    LISTAGEM DE USUÁRIOS
                  </h1>
                  
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