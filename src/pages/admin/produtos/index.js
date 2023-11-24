import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Time from '../produtos/time';
import Agenda from '../produtos/agenda.css'
import InfoBar from './infoBar.js';

import MenuAdmin from '../../../components/menu-admin';

import Footer from '../../../components/footer-admin';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Produtos() {

  const [date, setDate] = useState(new Date())
  const[ showTime, setShowTime] = useState(false)
  const[info, setInfo] = useState('');
  const handleDayClick = () => {
    setShowTime(true);
    setInfo('Informações adicionais para o dia selecionado.'); // Atualize com as informações desejadas
  };

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
                  <Paper sx={{
                  p: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '750px',
                  width: '1200px',
                }}>
                  <h2 style={{ color: '#5CE1E6', textAlign: 'center' }}>
                    AGENDA
                  </h2>

                  <div className="produtos">
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date} onClickDay={handleDayClick} className="custom-calendar"/>
      {showTime && <InfoBar info={info}/>}
   </div>
   <div>.</div>
   <div className="text-center">
      Selecione uma data: {date.toDateString()}
   </div>
   {date.length > 0 ? (
     <p>
       <span>Começar</span>
       {date[0].toDateString()}
       &nbsp;
       &nbsp;
       <span>Fim</span> {date[1].toDateString()}
     </p>
   ) : (
     <p>
       <span>Selecione uma data final: </span>{' '} {date.toDateString()}
     </p>
   )}
   <Time showTime={showTime} date={date}/>
 </div>


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