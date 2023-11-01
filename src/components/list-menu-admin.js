import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <Link to='/dashboard' style={{ textDecoration: 'none '}}>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Página Inicial" style={{ color: 'black' }}/>
    </ListItemButton>
    </Link>
    <Link to='/agenda' style={{ textDecoration: 'none '}}>
    <ListItemButton>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Agenda" style={{ color: 'black' }}/>
    </ListItemButton>
    </Link>
    <Link to='/formulario' style={{ textDecoration: 'none '}}>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Formulário" style={{ color: 'black' }}/>
    </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Opções
    </ListSubheader>
    <Link to='/' style={{ textDecoration: 'none' }}>
    <ListItemButton>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Sair" style={{ color: 'black' }}/>
    </ListItemButton>
    </Link>
  </React.Fragment>
);