import * as React from 'react';

import { styled } from '@mui/material/styles';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import { mainListItems, secondaryListItems } from '../components/list-menu-admin';

const drawerWidth = 240;

export default function MenuAdmin() {

    const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    /* Adicione a cor de fundo desejada aqui */
    backgroundColor: '#5CE1E6',
  }));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

    return (

        <>
  <AppBar position="absolute" open={open}>
    <Toolbar
      sx={{
        pr: '24px', // Mantém o preenchimento à direita quando o drawer está fechado
      }}
    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        sx={{
          marginRight: '36px',
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Médico
      </Typography>
    </Toolbar>
  </AppBar>

  <Drawer variant="permanent" open={open}>
    <Toolbar
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
      }}
    >
      <IconButton onClick={toggleDrawer}>
        <ChevronLeftIcon />
      </IconButton>
    </Toolbar>
    <Divider />
    <List component="nav">
      {mainListItems}
      <Divider sx={{ my: 1 }} />
      {secondaryListItems}
    </List>
  </Drawer>
</>

    )
}