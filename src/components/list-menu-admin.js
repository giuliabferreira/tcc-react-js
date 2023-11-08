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

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }};
  
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

      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      
    </ListItemButton>
    </Link>
  </React.Fragment>
);